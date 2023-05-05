import Header from  '../../../components/Header'
import CatalogoNome from '../../../components/CatalogoNome'
import BoxCard from '../../../components/BoxCard'
import Head from 'next/head'


export default function Catalogo() {
  return (
    <>
      <Head>
    <title>Doce Surpresa Cestaria</title>
        <meta name="description" content="Por Selma Fernanda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    
        <link rel="icon" href="/logo.svg" />
    </Head>
      <Header/>
      <CatalogoNome nome={"Especial dia das mães"}></CatalogoNome>
      <BoxCard></BoxCard>
      

    </>
  )
}

module.exports = Catalogo
