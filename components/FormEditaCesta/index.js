import { useEffect, useState } from 'react';

const FormEditaCestas = ({ catalogos }) => {
  const baseUrl = "https://docesurpresa-backend.onrender.com";


  const [cestas, setCestas] = useState([])
  const [nomeDoCatalogoCriado, setNomeDoCatalogoCriado] = useState('');
  const [novaCestaNome, setNovaCestaNome] = useState("");
  const [novaCestaPreco, setNovaCestaPreco] = useState(0);
  const [cestaImagem, setCestaImagem] = useState(null);
  const [cestaCriada, setCestaCriada] = useState(0);
  const [nomeDaCestaCriada, setNomeDaCestaCriada] = useState('')
  const [novoItem, setNovoItem] = useState("");
  const [itens, setItens] = useState([]);

  useEffect(() => {
    obterCestas()
  }, [catalogos])

  const obterCestas = async () => {
    let cestas = await fetch(`${baseUrl}/box/${catalogos.id}`)
    const cestasJson = await cestas.json();
    setCestas(cestasJson);

  }


  const AtualizarCesta = async () => {

    const formData = new FormData();
    formData.append("cesta_nome", novaCestaNome);
    formData.append("preco", novaCestaPreco);
    formData.append("foto", cestaImagem);
    formData.append("catalogo_id", catalogos.id);

    try {
      const response = await fetch(`${baseUrl}/box/${cestaCriada}`, {
        method: "PUT",
        body: formData,
      });

      alert(`Cesta atualizada com sucesso!`);
      await obterCestas();

    } catch (error) {
      console.error(error);
    }

  };


  const DeletarItem = async () => {
    try {
      await fetch(`${baseUrl}/item/${cestaCriada}`, {
        method: 'DELETE',
      });
    } catch (error) { console.log(error) }
  }

  const AtribuirItem = async () => {

    if (itens.length === 0 || itens[0] === '') {
      alert("Adicione ao menos 1 item à cesta!");
    } else {
      try {
        await DeletarItem();
        const newItem = await fetch(`${baseUrl}/item/${cestaCriada}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ itens }),
        });

        if (newItem.ok) {
          alert(`Itens vinculados com sucesso à cesta: ${novaCestaNome}`);
          await obterCestas()
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
    console.log(value)
    const updatedItems = [...itens];
    updatedItems[index] = value;
    console.log(updatedItems)
    setItens(updatedItems);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...itens];
    updatedItems.splice(index, 1);
    setItens(updatedItems);
  };

  const handleEditCesta = async ({ id, cesta_nome, preco, item }) => {
    setCestaCriada(id)
    setNovaCestaNome(cesta_nome)
    setNovaCestaPreco(preco)
    handleOldItens([...item])

  }

  const handleOldItens = (item) => {
    let oldItems = []
    item.map(({ item_nome }) => {
      oldItems.push(item_nome);
    })
    setItens([...oldItems]);
  }

  return (
    <>
      <title>Doce Surpresa Cestaria</title>

      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>Selecione uma cesta para editar</h4>
      {cestas.map((cesta, index) => (
        <div key={index} className='d-flex p-2' style={{ textAlign: 'center', margin: 'auto', width: '25%' }}>
          <button
            key={index}
            className="btn btn-primary btn-lg btn-block"
            onClick={() => handleEditCesta(cesta)}
            style={{ textAlign: 'center', margin: 'auto', width: '100%' }}
          >
            {cesta.cesta_nome}
          </button>
        </div>

      ))}
    

      {cestaCriada && (
        <>
          <div className='container'>
            <div className="form-group mt-2 ">
              <div className="col-sm-4">

                <label style={{ fontSize: '2rem' }}>Nome da Cesta:</label>
                <input
                  style={{ fontSize: '15px' }}
                  type="text"
                  className="form-control"
                  value={novaCestaNome || ''}
                  onChange={(e) => setNovaCestaNome(e.target.value)}
                />
              </div>
            </div>
            <div className="col-sm-5">

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
            </div>
            <div className="col-sm-2">
              <div className="form-group">
                <label style={{ fontSize: '2rem' }}>Preço R$:</label>
                <input
                  style={{ fontSize: '15px' }}

                  type="number"
                  className="form-control"
                  step="0.01"
                  value={novaCestaPreco || 0}
                  onChange={(e) => setNovaCestaPreco(e.target.value)}
                />
              </div>
              <input
                type="button"
                className="btn btn-success btn-lg mt-3"
                value="Atualizar Cesta"
                onClick={AtualizarCesta}
              />
            </div>
            {cestaCriada !== 0 && (
              <input
                type="button"
                className="btn btn-info btn-lg mt-3"
                value={`Você está Atualizando os itens da cesta: ${novaCestaNome || ''}`}
              />
            )}
          </div>
        </>
      )}
      {cestaCriada !== 0 && (
        <>
          <div className=" container">
            <div className="col-sm-3">

              <div className="form-group mt-5">
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
                      className="btn btn-outline-danger btn-lg"
                      onClick={() => handleDeleteItem(index)}
                    >
                      Excluir
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <button className="btn btn-primary btn-lg mb-5" onClick={addNewItemField}>
              Adicionar item
            </button>
            <button className="btn btn-success btn-lg mb-5" onClick={AtribuirItem}>
              Atualizar Itens
            </button>
          </div>
        </>
      )}




    </>






  )
};

export default FormEditaCestas;
