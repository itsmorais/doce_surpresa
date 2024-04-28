import styled from "styled-components";

export const Container = styled.div`

@media (min-width:600px){
            width: 40vw !important;
            
            
        #ImageContainer{
                position: relative;
                width: 20vw !important; 
                height: 200px;
                overflow: hidden;
                transition: transform 0.3s ease-in-out;

                &:hover{
                    transform: scale(1.2);
                }
            }

        :nth-child(n){
            width: 100%;
        }
    }



    width: 98%;
    height: fit-content;
    padding: 5%;

    background: rgba(13, 19, 33, 0.92);
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 
              0 6px 20px 0 rgba(0, 0, 0, 0.19);

    margin: 0 auto 7rem auto;



    h3{
        font-family: var(--font-poppins);
    font-style: normal;
    font-weight: 700;
    font-size: 2.1rem;
    line-height: 2.7rem;
    text-align: center;

    /* background */

    color: #FFFAFD;

    }

    >div{
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        margin-top: 1rem;
        gap: 2rem;

        p#preco{
            font-family: var(--font-poppins);
                font-style: normal;
                font-weight: 700;
                font-size: 2.1rem;
                line-height: 2.7rem;
                text-align: center;
                margin-top: 0rem;

                color: #FFFFFF;
            }
            span#frete{
                font-weight: 300;
                font-size: 1.3rem;
            }
            button#euQuero{
                
                width: 11.5rem;
                height: 3.0rem;
                background: #FFFAFD;
                border-radius: 4px;
                border: none;
                margin-top: 0.1rem;
                cursor: pointer;


                font-family: var(--font-poppins);
                font-style: bold;
                font-weight: 700;
                font-size: 14px;
                text-transform: uppercase;
                line-height: 18px;
                color: #000000;

                &:hover{
                    background-color: #000000;
                    color: #FFFAFD;
                }
            }
        
        >div#Lista{
            display: flex;
            align-items: flex-start;
            gap: 0.2rem;

        >li{
            font-family: var(--font-poppins);
            font-weight: 500;
            font-size: 1.8rem;
            line-height: 2rem;

            /* background */

            color: #FFFAFD;}
                    }
        >div{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            div#ImageContainer {
                position: relative;
                width: 90vw;
                height: 200px;
                overflow: hidden;
                transition: transform 0.3s ease-in-out;

                &:hover{
                    transform: scale(1.2);
                }

                >img{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    object-fit: fill;
                    border-radius: 15px;
                }
            }
           
        }
        
        
      
}
    

`