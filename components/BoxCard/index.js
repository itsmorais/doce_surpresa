import { Container } from "./style"
import Image from "next/image"



export default function BoxCard(){
    return(
        <>
        <Container>
        <h3>Box Você não é todo mundo!</h3>
        <div id="Container">

            <div id="Lista">
            <li>Suco Villa piva 300ml</li>
            <li>Café drip</li>
            <li>Chá</li>
            <li>Iorgute grego</li>
            <li>Geléia</li>
            <li>Doce de leite</li>
            <li>Mini Torradas</li>
            <li>Croissant</li>
            <li>Mini pão frânces</li>
            <li>Pães de queijo</li>
            <li>Frios</li>
            <li>Frutas</li>
            <li>Bolo de coração red velvet com ninho</li>
            <li>Caixa personalizado com nome</li>
            </div>

<div id="Imagem-preco-botao">
    <div id="imagem" style={{backgroundImage:'url(naoETodoMundo.jpeg)'}}></div>
    <Image src="/naoETodoMundo.jpeg" width={150} height={150} alt="Imagem da cesta"></Image>
    <p>R$130,00<span>+Frete</span></p>

</div>
        </div>

        </Container>
        </>
    )
}


module.exports = BoxCard