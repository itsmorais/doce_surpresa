import Header from '../components/Header'
import { useState } from 'react'


export default function Home({ catalogos }) {
  const baseUrl = "https://docesurpresa-backend.onrender.com";

  const [catalogosState, setCatalogoState] = useState(catalogos)


  const handleDeleteCatalogo = async (id) => {
    const certeza = confirm(`Deseja excluir?`)

    if (certeza) {
      try {
        await fetch(`${baseUrl}/catalogo/${id}`, {
          method: 'DELETE'
        })
        alert`Catalogo excluído`
        setCatalogoState(catalogosState.filter((catalogo) => catalogo.id != id))

      } catch (error) {
        console.log(error)
      }
    }
    else { return }
  }
  return (
    <>

      <Header />
      <div className='container'>
        <h2 style={{ textAlign: 'center' }} className="fst-bold mt-5">Clique sobre um catalogo para excluir! </h2>
      </div>


      {catalogosState.map((catalogo, index) => (
        <div key={index} className='d-flex p-2' style={{ textAlign: 'center', margin: 'auto', width: '25%' }}>
          <button
            key={index}
            className="btn btn-danger btn-lg btn-block"
            onClick={() => handleDeleteCatalogo(catalogo.id)}
            style={{ textAlign: 'center', margin: 'auto', width: '100%' }}
          >
            {catalogo.titulo}
          </button>
        </div>

      ))}



    </>
  )
}


export async function getServerSideProps() {
  const baseUrl = "https://docesurpresa-backend.onrender.com";

  const data = await fetch(`${baseUrl}/catalogo`)
  const catalogos = await data.json()
  console.log(catalogos)

  return {
    props: {
      catalogos
    }
  }
}