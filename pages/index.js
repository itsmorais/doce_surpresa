import Header from '../components/Header'
import HomePage from '../components/HomePage'
import Catalogo from '../components/Catalogo'
import Footer from '@/components/Footer'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function Home({ catalogos }) {
  return (
    <>
      <title>Doce Surpresa Cestaria</title>

      <Header />
      <HomePage></HomePage>

      {catalogos.map((catalogo) => (
        <Catalogo key={catalogo.id} text={catalogo.titulo} link={`/catalogo/${catalogo.id}`}></Catalogo>


      ))}
      <Catalogo text={"Entre em contato"} link={"https://wa.me/5512991134425"}></Catalogo>
      <Footer></Footer>
    </>
  )
}

export async function getServerSideProps() {
  const catalogos = await  prisma.catalogo.findMany();

  return {
    props: {
      catalogos
    }
  }
}