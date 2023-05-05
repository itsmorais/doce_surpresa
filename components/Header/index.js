import { Container ,StyledBsArrowLeft} from "./style";
import { useRouter } from "next/router";





export default function Header({isActive}){
    const router = useRouter();
    const handleClick = () => {
        router.back()
    }

    return(
        <Container>
            {isActive && <StyledBsArrowLeft onClick={handleClick} />
}
            <h1>Doce Surpresa</h1>
        </Container>
    )
}

module.exports = Header