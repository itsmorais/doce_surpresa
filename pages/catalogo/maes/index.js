import Header from  '../../../components/Header'
import CatalogoNome from '../../../components/CatalogoNome'
import BoxCard from '../../../components/BoxCard'
import Head from 'next/head'


export default function Catalogo({data}) {
  const {maes} = data.cestas
  return (
    <>

      <Head>
    <title>Doce Surpresa Cestaria</title>
        <meta name="description" content="Por Selma Fernanda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    
        <link rel="icon" href="/logo.svg" />
    </Head>
      <Header isActive={true} />
      <CatalogoNome nome={"Especial dia das mães!"}></CatalogoNome>
      <BoxCard maes={maes}></BoxCard>
      

    </>
  )
}

export async function getServerSideProps(){
  const cestas = await fetch("https://www.docesurpresacestaria.com.br/api/hello")
  const data = await cestas.json()

  return{
    props: {data},
  }


}