import { Container } from "./style"
import Image from "next/image"
import Link from "next/link"



export default function BoxCard({ maes }) {


    return (
        <>

            {maes.map(({ boxTitle, itens, imageSrc, preco }, index) => (

                <Container key={index}>
                    <h3>Box: {boxTitle}</h3>
                    <div id="Container">

                        <div id="Lista">
                            {itens.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </div>

                        <div id="Imagem-preco-botao">
                            <div id="ImageContainer">
                                <Image src={imageSrc} width={150} height={150} alt="Imagem da cesta" key={index}></Image>
                            </div>
                            {preco &&                             <p>R${preco},00 <span>+Frete</span></p>
}
                            <Link href={`https://wa.me/5512991134425?text=Olá%20,tenho%20interesse%20no%20box%20${boxTitle}%20de%20R$%20${preco || ""}`} target="_blank">
                                <button id="euQuero">Eu Quero</button>
                            </Link>


                        </div>
                    </div>

                </Container>
















            ))}


        </>
    )
}


module.exports = BoxCard