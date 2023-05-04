import { CatalogoButton } from "./style"
import Link from "next/link"


export default function Catalogo({text,link}){
    return(
     
        <CatalogoButton  href={link}>
        <Link href={link}> 
        {text}
        </Link>
        </CatalogoButton>
        
    )
}

module.exports = Catalogo