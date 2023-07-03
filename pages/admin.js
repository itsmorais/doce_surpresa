import Header from '../components/Header'
import Footer from '@/components/Footer'
import Botao from '@/components/Botao'


export default function Home() {
    return (
        <>
            <Header />
            <h1 style={{ fontSize: '31px', textAlign: 'center' }}>Bem vinda, Selma Fernanda</h1>

            <Botao text={"Adicionar Catalogo"} link={'novo'}></Botao>
            <Botao text={"Editar Catalogo"} link={'editarCatalogo'}></Botao>
            <Botao text={"Excluir Catalogo"} link={'excluir'}></Botao>
            <Footer></Footer>
        </>
    )
}
