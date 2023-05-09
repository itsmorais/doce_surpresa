import Header from '@/components/Header'
import CatalogoNome from '../../components/CatalogoNome'
import BoxCard from '../../components/BoxCard'
import Head from 'next/head'
import  Rodape  from '../../components/Footer'
import { useRouter } from 'next/router'


export default function Catalogo({data}) {
  const router = useRouter();
  const {productType} = router.query
  const nome = productType.replace(/_/g, ' ');
  const cesta = data.cestas[productType]
  return (
    <>

      <Head>
    <title>Doce Surpresa Cestaria</title>
        <meta name="description" content="Por Selma Fernanda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    
        <link rel="icon" href="/logo.svg" />
    </Head>
      <Header isActive={true} />
      <CatalogoNome nome={nome}></CatalogoNome>
      <BoxCard maes={cesta}></BoxCard>
      <Rodape></Rodape>
      

    </>
  )
}


export async function getServerSideProps({ params }) {
  const cestas = await fetch("https://www.docesurpresacestaria.com.br/api/hello")
  const data = await cestas.json()

  const productType = params.productType;
  const nome = productType.replace(/_/g, ' ');
  const cesta = data.cestas[productType];

  return {
    props: { cesta},
  };
}