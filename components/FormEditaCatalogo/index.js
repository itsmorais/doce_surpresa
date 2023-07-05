import { useState, useEffect } from 'react';

const FormEditaCatalogo = ({ catalogo }) => {
  const baseUrl = "https://docesurpresa-backend.onrender.com";

  const [novoCatalogo, setNovoCatalogo] = useState("");
  const [catalogoCriado, setCatalogoCriado] = useState(catalogo.id);
  const [nomeDoCatalogoCriado, setNomeDoCatalogoCriado] = useState(catalogo.titulo);
  const [novaCestaNome, setNovaCestaNome] = useState("");
  const [novaCestaPreco, setNovaCestaPreco] = useState(0);
  const [cestaImagem, setCestaImagem] = useState(null);
  const [cestaCriada, setCestaCriada] = useState(0);
  const [nomeDaCestaCriada, setNomeDaCestaCriada] = useState('')
  const [novoItem, setNovoItem] = useState("");
  const [itens, setItens] = useState([]);


  return (
    <div className="container">
      <div className="form-group">
        <label style={{ fontSize: '2rem' }}>Editar nome do catalogo:{catalogo.titulo}</label>
        <input
          type="text"
          className="form-control"
          value={novoCatalogo}
          onChange={(e) => setNovoCatalogo(e.target.value)}
        />
        <input
          type="button"
          className="btn btn-warning mt-3"
          value="Atualizar nome do catalogo"
        //onClick={CriarCatalogo}
        />

      </div>

    </div>
  );
};

export default FormEditaCatalogo;
