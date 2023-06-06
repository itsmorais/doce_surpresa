import { CatalogoButton } from "./style"
import Link from "next/link"

export default function Catalogo({ text, link, disable }) {
  return (
    disable ? (
      <CatalogoButton href={link} style={{ opacity: "0.25", cursor:'not-allowed'}}>
        <Link href={'/'}>{text}</Link>
      </CatalogoButton>
    ) : (
      <Link href={link} style={{textDecoration:'none'}}>
      <CatalogoButton >
        {text}
      </CatalogoButton>
      </Link>
    )
  )
}

module.exports = Catalogo
