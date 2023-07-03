import Header from '@/components/Header'
import CatalogoNome from '../../components/CatalogoNome'
import BoxCard from '../../components/BoxCard'
import Head from 'next/head'
import  Rodape  from '../../components/Footer'
import { useRouter } from 'next/router'

const baseUrl = "https://docesurpresa-backend.onrender.com";

export default function Catalogo({nome,data}) {


  return (
    <>

      <Head>
        <title>Doce Surpresa Cestaria</title>
        <meta name="description" content="Por Selma Fernanda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header isActive={true} />
        <CatalogoNome nome={nome.titulo}></CatalogoNome>
       <BoxCard dados={data}></BoxCard> 
      <Rodape></Rodape>
    </>
  )
}

export async function getServerSideProps({query}){
  const {productType} = query

  const dados = await fetch(`${baseUrl}/box/${productType}`)
  const catalogos = await dados.json();

  const nomeCatalogo = await fetch(`${baseUrl}/catalogo`);
  let nomeJson = await nomeCatalogo.json();

  nomeJson = nomeJson.filter((titulos) => titulos.id == productType);

  


  return{
    props:{
      nome:nomeJson[0],
      data:catalogos
    }
  }

}
