import Header from '../components/Header'
import { useState } from 'react'
import FormEditaCatalogo from '@/components/FormEditaCatalogo';
import FormEditaCestas from '@/components/FormEditaCesta';


export default function Home({ catalogos }) {
  const baseUrl = "https://docesurpresa-backend.onrender.com";

  const [catalogosState, setCatalogoState] = useState(catalogos);
  const [catalogoEscolido,setCatalogoEscolido] = useState();



  return (
    <>

      <Header />
      <div className='container'>
        <h2 style={{ textAlign: 'center' }} className="fst-bold mt-5">Clique sobre um catalogo para Edita-lo! </h2>
      </div>


      {catalogosState.map((catalogo, index) => (
        <div key={index} className='d-flex p-2' style={{ textAlign: 'center', margin: 'auto', width: '25%' }}>
          <button
            key={index}
            className="btn btn-primary btn-lg btn-block"
            onClick={() => setCatalogoEscolido(catalogo)}
            style={{ textAlign: 'center', margin: 'auto', width: '100%' }}
          >
            {catalogo.titulo}
          </button>
        </div>

      ))}


  
        {catalogoEscolido && (
          <>
          <FormEditaCatalogo catalogo={catalogoEscolido} ></FormEditaCatalogo>
          <FormEditaCestas catalogos={catalogoEscolido}></FormEditaCestas>
          </>
        )}
        
       

    </>

    

  )

}


export async function getServerSideProps() {
  const baseUrl = "https://docesurpresa-backend.onrender.com";

  const data = await fetch(`${baseUrl}/catalogo`)
  const catalogos = await data.json()

  return {
    props: {
      catalogos
    }
  }
}