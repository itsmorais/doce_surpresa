import { BotaoEstilo } from "./style";
import Link from "next/link"



export default function Botao({ text, link }) {


    return (
        <>
                <Link style={{textDecoration:'none'}} href={`${link}`}>
            <BotaoEstilo>
                    {text}
            </BotaoEstilo>
                </Link>
        </>


    )
}

module.exports = Botao