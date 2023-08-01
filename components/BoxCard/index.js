import { Container } from "./style"
import Image from "next/image"
import Link from "next/link"
import { Web } from "./style";


export default function BoxCard({ cestas }) {
    return (
        <>

            <Web>
                {cestas.map(({ cesta_nome, preco, image_src, item, id }) => (

                    <Container id="container" key={id}>
                        <h3>{cesta_nome}</h3>
                        <div id="Container">

                            <div id="Lista">
                                {item.map((itemUnidade, id) => (
                                    <li key={id}>{itemUnidade.item_nome}</li>
                                ))}
                            </div>

                            <div id="Imagem-preco-botao">
                                <div id="ImageContainer">
                                    <Image unoptimized src={image_src} width={150} height={150} alt="Imagem da cesta" key={id}></Image>
                                </div>
                                {preco && <p>R${preco} <span>+Frete</span></p>
                                }
                                <Link href={`https://wa.me/5512991134425?text=Olá%20,tenho%20interesse%20no%20box%20${cesta_nome}%20de%20R$%20${preco || ""}`} target="_blank">
                                    <button id="euQuero">Eu Quero</button>
                                </Link>


                            </div>
                        </div>

                    </Container>
















                ))}
            </Web>
        </>
    )
}


module.exports = BoxCard