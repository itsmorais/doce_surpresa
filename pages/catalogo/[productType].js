import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import Header from '@/components/Header'
import CatalogoNome from '../../components/CatalogoNome'
import BoxCard from '../../components/BoxCard'
import Head from 'next/head'
import Rodape from '../../components/Footer'
import { useRouter } from 'next/router'


export default function Catalogo({ cestas, data }) {

  const router = useRouter();
  const { productType } = router.query
  console.log(data)

  return (
    <>

      <Head>
        <title>Doce Surpresa Cestaria</title>
        <meta name="description" content="Por Selma Fernanda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header isActive={true} />
      <CatalogoNome nome={data.titulo}></CatalogoNome>
      <BoxCard key={data.id} cestas={cestas}></BoxCard>
      <Rodape></Rodape>
    </>
  )
}


export async function getStaticPaths() {
  const catalogos = await prisma.catalogo.findMany();

  const paths = catalogos.map((catalogo) => ({
    params: { productType: String(catalogo.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params }) {
  const productType = params.productType;
  const cestas = await prisma.box.findMany({
    where: {
      catalogo_id: parseInt(productType)
    },
    include: {
      item: true
    }
  });

  const data = await prisma.catalogo.findUnique({
    where: {
      id: parseInt(productType)
    }
  });


  return {
    props: {
      cestas,
      data
    }
  }

}
