import { Container } from "./style";

export function InputBox({ onChange, onClick, catalogoNome }) {
    return (
        <Container>

            <input
                type="text"
                placeholder={"Nome da cesta"}
                onChange={onChange}
            />
          
            <input
                type="number"
                placeholder={"Preço"}
                onChange={onChange}
            />

            <button onClick={onClick}>Adicionar Cesta ao catalogo {catalogoNome}?</button>
        </Container>
    )
}