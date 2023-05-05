import styled from 'styled-components';
import {BsArrowLeft} from 'react-icons/bs'

export const Container = styled.div`
    width: 100%;
    background-color: #0D1321;
    height: 10rem;


    >h1{
        font-family: 'Dancing Script', cursive;
        font-style: normal;
        font-weight: 400;
        margin-top: 4rem;
        text-align: center;
        
        font-size: 3.4rem;
        line-height: 4.1rem;
        color: #FFFAFD;
    }
    
`
export const StyledBsArrowLeft = styled(BsArrowLeft)`
position: absolute;
top: 2.5%;
left: 5%;
width: 7%;
height: 5%;
color: white;
background-color: transparent;
`;
