import { Container } from "./style";

export function InputText({ value, onChange, onClick }) {
    return (
        <Container>

            <input
                type="text"
                placeholder={value}
                onChange={onChange}
            />
            <button onClick={onClick}>Criar novo catalogo</button>
        </Container>
    )
}