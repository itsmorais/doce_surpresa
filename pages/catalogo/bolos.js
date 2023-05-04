import Head from 'next/head'
import Header from '../../components/Header'
import CatalogoNome from '../../components/CatalogoNome'
import Footer from '../../components/Footer'


export default function Catalogo({ nome }) {
    return (
        <>

            <Header />
            <CatalogoNome nome={"Bolos"}></CatalogoNome>


        </>
    )
}
