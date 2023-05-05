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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/logo.svg" />
    
    </Head>
      <Header />
      <HomePage></HomePage>
      <Catalogo text={"Especial Dia das mães"} link={'/catalogo/maes'}></Catalogo>
      <Catalogo text={"Café da manhã"} link={'/catalogo/cafe'}></Catalogo>
      <Catalogo text={"Bolos"} link={'/catalogo/bolos'}></Catalogo>
      <Catalogo text={"Chocolates"} link={'/catalogo/chocolates'}></Catalogo>
      <Catalogo text={"Petiscos e frios"} link={'/catalogo/frios'}></Catalogo>
      <Footer></Footer>
    </>
  )
}
