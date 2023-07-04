import { useState } from 'react';

const FormCatalogo = () => {
    const baseUrl = "https://docesurpresa-backend.onrender.com";

    const [novoCatalogo, setNovoCatalogo] = useState("");
    const [catalogoCriado, setCatalogoCriado] = useState(0);
    const [nomeDoCatalogoCriado, setNomeDoCatalogoCriado] = useState('');
    const [novaCestaNome, setNovaCestaNome] = useState("");
    const [novaCestaPreco, setNovaCestaPreco] = useState(0);
    const [cestaImagem, setCestaImagem] = useState(null);
    const [cestaCriada, setCestaCriada] = useState(0);
    const [nomeDaCestaCriada,setNomeDaCestaCriada] = useState('')
    const [novoItem, setNovoItem] = useState("");
    const [itens, setItens] = useState([]);


    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    };

    const CriarCatalogo = async () => {
        if (novoCatalogo.trim() !== '') {
            try {
                const response = await fetch(`${baseUrl}/catalogo`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ titulo: novoCatalogo })
                });
                if (response.ok) {
                    const data = await response.json();
                    setCatalogoCriado(data.id);
                    setNomeDoCatalogoCriado(novoCatalogo);
                    alert(`Catalogo criado código:${data.id}`);
                } else {
                    throw new Error("Failed to create catalogo");
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            alert(`O nome do catalogo não pode estar em branco!`);
        }
    };

    const CriarCesta = async () => {
        if (!novaCestaNome || !novaCestaPreco || !cestaImagem) {
            alert("Algum campo não foi preenchido");
        } else {
            const formData = new FormData();
            formData.append("cesta_nome", novaCestaNome);
            formData.append("preco", novaCestaPreco);
            formData.append("foto", cestaImagem);
            formData.append("catalogo_id", catalogoCriado);

            try {
                const response = await fetch(`${baseUrl}/box/${catalogoCriado}`, {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    setCestaCriada(data.id);
                    setNomeDaCestaCriada(novaCestaNome);
                    alert(`Cesta adicionada ao catalogo ${nomeDoCatalogoCriado}`);
                } else {
                    throw new Error("Failed to create cesta");
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    const AtribuirItem = async () => {
        if (itens.length === 0 || itens[0] === '') {
            alert("Adicione ao menos 1 item à cesta!");
        } else {
            try {
                const newItem = await fetch(`${baseUrl}/item/${cestaCriada}`, {
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
        <div className="container">
            <h4 className="fst-italic mt-3">Novo catalogo </h4>
            <div className="form-group">
                <label style={{ fontSize: '2rem' }}>Nome do catalogo:</label>
                <input
                    type="text"
                    className="form-control"
                    value={novoCatalogo}
                    onChange={(e) => handleInputChange(e, setNovoCatalogo)}
                />
                <input
                    type="button"
                    className="btn btn-primary mt-3"
                    value="Criar Catalogo"
                    onClick={CriarCatalogo}
                />
                {catalogoCriado && (
                    <input
                        type="button"
                        className="btn btn-info mt-3"
                        value={`Você está adicionando cestas ao catalogo: ${nomeDoCatalogoCriado}`}
                    />
                )}
            </div>
            {catalogoCriado && (
                <>
                    <div className="form-group mt-2">
                        <label style={{ fontSize: '2rem' }}>Nome da Cesta:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={novaCestaNome}
                            onChange={(e) => handleInputChange(e, setNovaCestaNome)}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label style={{ fontSize: '2rem' }}>Foto da cesta:</label>
                        <input
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
                                type="number"
                                className="form-control"
                                step="0.01"
                                value={novaCestaPreco}
                                onChange={(e) => handleInputChange(e, setNovaCestaPreco)}
                            />
                        </div>
                        <input
                            type="button"
                            className="btn btn-primary mt-3"
                            value="Adicionar cesta"
                            onClick={CriarCesta}
                        />
                            </div>
                        {cestaCriada !== 0 && (
                             <input
                             type="button"
                             className="btn btn-info mt-3"
                             value={`Você está adicionando itens a cesta: ${nomeDaCestaCriada}`}
                         />
                        )}
                </>
            )}
            {cestaCriada !== 0 && (
                <>
                    <div className="col-sm-4">
                        <div className="form-group mt-5">
                            {itens.map((item, index) => (
                                <div key={index} className="input-group mb-3">
                                    <input
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
                        <button className="btn btn-primary mb-5" onClick={addNewItemField}>
                            Adicionar item
                        </button>
                        <button className="btn btn-success mb-5" onClick={AtribuirItem}>
                            Incluir Itens
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default FormCatalogo;
