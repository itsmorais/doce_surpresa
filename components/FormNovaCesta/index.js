import { useState } from 'react';

const FormNovaCesta = ({ catalogos }) => {

  const [novoCatalogo, setNovoCatalogo] = useState("");
  const [catalogoCriado, setCatalogoCriado] = useState(0);
  const [nomeDoCatalogoCriado, setNomeDoCatalogoCriado] = useState('');
  const [novaCestaNome, setNovaCestaNome] = useState("");
  const [novaCestaPreco, setNovaCestaPreco] = useState(0);
  const [cestaImagem, setCestaImagem] = useState(null);
  const [cestaCriada, setCestaCriada] = useState(0);
  const [nomeDaCestaCriada, setNomeDaCestaCriada] = useState('')
  const [novoItem, setNovoItem] = useState("");
  const [itens, setItens] = useState([]);


  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };



  const CriarCesta = async () => {
    if (!novaCestaNome || !novaCestaPreco || !cestaImagem) {
      alert("Algum campo não foi preenchido");
    } else {
      const formData = new FormData();
      formData.append("cesta_nome", novaCestaNome);
      formData.append("preco", novaCestaPreco);
      formData.append("foto", cestaImagem);
      formData.append("catalogo_id", catalogos.id);

      try {
        const response = await fetch(`api/box`, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setCestaCriada(data.id);
          setNomeDaCestaCriada(novaCestaNome);
          alert(`Cesta adicionada ao catalogo ${nomeDoCatalogoCriado}`);
        } else {
          const errorData = await response.json();
          throw new Error(errorData.msg);
        }
      } catch (error) {
        console.error(error);
        alert("Failed to create cesta: " + error.message);
      }
    }
  };

  const AtribuirItem = async () => {
    if (itens.length === 0 || itens[0] === '') {
      alert("Adicione ao menos 1 item à cesta!");
    } else {
      try {
        const newItem = await fetch(`api/item?box=${cestaCriada}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ itens }),
        });

        if (newItem.ok) {
          setNovaCestaNome("");
          setNovaCestaPreco(0);
          alert(`Itens vinculados com sucesso à cesta: ${novaCestaNome}`);
        } else {
          throw new Error("Failed to create item");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const addNewItemField = () => {
    setItens([...itens, ""]);
  };

  const handleItemChange = (index, value) => {
    const updatedItems = [...itens];
    updatedItems[index] = value;
    setItens(updatedItems);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...itens];
    updatedItems.splice(index, 1);
    setItens(updatedItems);
  };

  return (
    <>
      <div className='container'>
        <div className='form-group'>
          <input
            type="button"
            className="btn btn-info mt-3"
            value={`Você está adicionando cestas ao catalogo: ${catalogos.titulo}`}
          />
        </div>

        <>
          <div className="form-group mt-2">
            <label style={{ fontSize: '2rem' }}>Nome da Cesta:</label>
            <input
              style={{ fontSize: '15px' }}

              type="text"
              className="form-control"
              value={novaCestaNome}
              onChange={(e) => handleInputChange(e, setNovaCestaNome)}
            />
          </div>
          <div className="form-group mt-2">
            <label style={{ fontSize: '2rem' }}>Foto da cesta:</label>
            <input
              style={{ fontSize: '15px' }}

              className="form-control"
              type="file"
              name="foto"
              onChange={(e) => setCestaImagem(e.target.files[0])}
            />
          </div>
          <div className="col-sm-2">
            <div className="form-group">
              <label style={{ fontSize: '2rem' }}>Preço R$:</label>
              <input
                style={{ fontSize: '15px' }}

                type="number"
                className="form-control"
                step="0.01"
                value={novaCestaPreco}
                onChange={(e) => handleInputChange(e, setNovaCestaPreco)}
              />
            </div>
            <input
              type="button"
              className="btn btn-primary btn-lg mt-3"
              value="Adicionar cesta"
              onClick={CriarCesta}
            />
          </div>
          {cestaCriada !== 0 && (
            <input
              type="button"
              className="btn btn-info btn-lg mt-3"
              value={`Você está adicionando itens a cesta: ${nomeDaCestaCriada}`}
            />
          )}
        </>
      </div>

      {cestaCriada !== 0 && (
        <>
          <div className='form-group'>
            <div className="container sm-4">
              <div className="form-group mt-5">
                <div className='col-sm-4'>

                  {itens.map((item, index) => (
                    <div key={index} className="input-group mb-3">
                      <input
                        style={{ fontSize: '15px' }}

                        className="form-control"
                        type="text"
                        placeholder={`Novo item da cesta: ${novaCestaNome}`}
                        value={item}
                        onChange={(e) => handleItemChange(index, e.target.value)}
                      />
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => handleDeleteItem(index)}
                      >
                        Excluir
                      </button>
                    </div>
                  ))}
                </div>
                <button className="btn btn-primary btn-lg mb-5" onClick={addNewItemField}>
                  Adicionar item
                </button>
                <button className="btn btn-success btn-lg mb-5" onClick={AtribuirItem}>
                  Incluir Itens
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );

};

export default FormNovaCesta;
