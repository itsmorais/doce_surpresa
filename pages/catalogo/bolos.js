import Header from '../../components/Header'
import CatalogoNome from '../../components/CatalogoNome'
import Head from 'next/head'
import Footer from '@/components/Footer'


export default function Catalogo({ nome }) {
    return (
        <>
            <Head>
                <title>Doce Surpresa Cestaria</title>
                <meta name="description" content="Por Selma Fernanda" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
                <link rel="icon" href="/logo.svg" />

            </Head>
            <Header isActive={true} />
            <CatalogoNome nome={"Bolos"}></CatalogoNome>
            <Footer></Footer>


        </>
    )
}
