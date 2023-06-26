import Header from '../components/Header'
import HomePage from '../components/HomePage'
import Catalogo from '../components/Catalogo'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>

      <Header />
      <HomePage></HomePage>
      <Catalogo text={"Especial dia dos namorados"} link={'/catalogo/Especial_Dia_Dos_Namorados'}></Catalogo>
      <Catalogo text={"Café da manhã"} link={'/catalogo/Café_da_manhã'}></Catalogo>
      <Catalogo text={"Entre em contato"} link={"https://wa.me/5512991134425"}></Catalogo>

      <Footer></Footer>
    </>
  )
}
