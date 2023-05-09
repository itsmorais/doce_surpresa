import Header from '../components/Header'
import HomePage from '../components/HomePage'
import Catalogo from '../components/Catalogo'
import Head from 'next/head'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
    <Head>
    <title>Doce Surpresa Cestaria</title>
        <meta name="description" content="Por Selma Fernanda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
    
    </Head>
      <Header />
      <HomePage></HomePage>
      <Catalogo text={"Especial Dia das mães"} link={'/catalogo/Especial_Dia_Das_Mães'}></Catalogo>
      <Catalogo text={"Café da manhã"} link={'/catalogo/Café_da_manhã'}></Catalogo>
      <Catalogo text={"Bolos"} link={'/catalogo/Bolos'} disable={true}></Catalogo>
      <Catalogo text={"Chocolates"} link={'/catalogo/Chocolates'} disable={true}></Catalogo>
      <Catalogo text={"Petiscos e frios"} link={'/catalogo/Frios'} disable={true}></Catalogo>
      <Catalogo text={"Entre em contato"} link={"https://wa.me/5512991134425"}></Catalogo>

      <Footer></Footer>
    </>
  )
}
