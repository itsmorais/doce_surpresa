import Header from '../components/Header'
import HomePage from '../components/HomePage'
import Catalogo from '../components/Catalogo'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <>

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
