import { Container ,StyledBsArrowLeft} from "./style";
import { useRouter } from "next/router";
import Link from "next/link";





export default function Header({isActive}){
    const router = useRouter();
    const handleClick = () => {
        router.push('/')
    }

    return(
        <Container>
            {isActive && <StyledBsArrowLeft onClick={handleClick} />
}           <Link style={{textDecoration:'none', cursor:'pointer'}}  href={'/'}>
            <h1>Doce Surpresa</h1>
            </Link>
        </Container>
    )
}

module.exports = Header