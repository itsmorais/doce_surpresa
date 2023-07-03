import { useState } from 'react';
import { useForm } from 'react-hook-form'


const url = "https://js-server-w0a5.onrender.com/livros"

const FormCatalogo = () => {
    const [novoCatalogo, setnovoCatalogo] = useState("");
    const [catalogoCriado, setNovoCatalogoCriado] = useState(0);
    const [novaCestaNome, setNovaCestaNome] = useState("");
    const [novaCestaPreco, setNovaCestaPreco] = useState(0);
    const [cestaImagem, setCestaImagem] = useState();
    const [cestaCriada, setNovaCestaCriado] = useState(0);
    const [novoItem, setNovoItem] = useState("");
    const [itens, setItens] = useState([]);

    const { register, handleSubmit, reset } = useForm();
    const [aviso, setAviso] = useState("");

    const CriarCatalogo = async (novoCatalogo) => {
        let newCatalogo = await fetch("http://localhost:3001/catalogo", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ titulo: novoCatalogo })
        })
        let response = await newCatalogo.json();
        setNovoCatalogoCriado(response.id);
    }


    return (
        <div className="container">
            <h4 className="fst-italic mt-3">Novo catalogo </h4>
            <div className="form-group">
                <label style={{ fontSize: '2rem' }} htmlFor="titulo">Nome do catalogo:</label>
                <input type="text" className="form-control" id="titulo" required
                    autoFocus {...register("titulo")} />
                <input type="submit" className="btn btn-primary mt-3" value="Criar" />
                <input type="reset" className="btn btn-danger mt-3 ms-3" value="Limpar" />

            </div>
            {catalogoCriado ? <>
                <div className="form-group mt-2">
                    <label style={{ fontSize: '2rem' }} htmlFor="autor">Nome da Cesta:</label>
                    <input onChange={e => setnovoCatalogo(e.target.value)} type="text" className="form-control" id="autor" required {...register("autor")} />
                </div>
                <div className="form-group mt-2">
                    <label style={{ fontSize: '2rem' }} htmlFor="foto">URL da Foto:</label>
                    <input id='foto' className="form-control" type="file" name="foto" onChange={e => setCestaImagem(e.target.files[0])} />
                </div>
                <div className="col-sm-8">
                    <div className="form-group">
                        <label style={{ fontSize: '2rem' }} htmlFor="preco">Preço R$:</label>
                        <input type="number" className="form-control" id="preco"
                            step="0.01" required  {...register("preco")} />
                    </div>
                </div>

            </>
                : <></>}
       
            
            <div className={aviso.startsWith("OK!") ? "alert alert-success" :
                aviso.startsWith("ERRO") ? "alert alert-danger" : ""}> {aviso}
            </div>
        </div>
    )
}

export default FormCatalogo;