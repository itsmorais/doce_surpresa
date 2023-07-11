import Header from '../components/Header'
import { useState } from 'react'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import FormEditaCatalogo from '@/components/FormEditaCatalogo';
import FormEditaCestas from '@/components/FormEditaCesta';
import FormNovaCesta from '@/components/FormNovaCesta';



export default function Home({ data }) {

  const [catalogosState, setCatalogoState] = useState(data);
  const [catalogoEscolido, setCatalogoEscolido] = useState();



  return (
    <>
      <title>Doce Surpresa Cestaria</title>


      <Header />

      <div className='container'>
        <h2 style={{ textAlign: 'center' }} className="fst-bold mt-5">Selecione o catalogo que deseja adicionar a cesta! </h2>
      </div>


      {catalogosState.map((catalogo, index) => (
        <div key={index} className='d-flex p-2' style={{ textAlign: 'center', margin: 'auto', width: '25%' }}>
          <button
            key={index}
            className="btn btn-primary btn-lg"
            onClick={() => setCatalogoEscolido(catalogo)}
            style={{ textAlign: 'center', margin: 'auto', width: '100%' }}
          >
            {catalogo.titulo}
          </button>
        </div>

      ))}



      {catalogoEscolido && (
        <>
          <FormNovaCesta catalogos={catalogoEscolido} />

        </>
      )}



    </>



  )

}


export async function getServerSideProps() {

  const data = await prisma.catalogo.findMany()

  return {
    props: {
      data
    }
  }
}