import { CatalogoButton } from "./style"
import Link from "next/link"

export default function Catalogo({ text, link, disable }) {
  return (
    disable ? (
      <CatalogoButton href={link} style={{ opacity: "0.25", cursor:'not-allowed'}}>
        <Link href={'/'}>{text}</Link>
      </CatalogoButton>
    ) : (
      <CatalogoButton href={link}>
        <Link href={link}>{text}</Link>
      </CatalogoButton>
    )
  )
}

module.exports = Catalogo
