import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 5%;

    background: rgba(13, 19, 33, 0.92);
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 
              0 6px 20px 0 rgba(0, 0, 0, 0.19);

    margin: 2rem auto;

    >h3{
    font-family: 'DM Sans';
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
        margin-top: 1.3rem;
        gap: 4rem;
        
        >div#Lista{
            display: flex;
            align-items: flex-start;

        >li{
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 1.4rem;
            line-height: 1.8rem;

            /* background */

            color: #FFFAFD;}
                    }
        >div{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            >div#ImageContainer {
                position: relative;
                width: 200px;
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
                    object-fit: cover;
                    border-radius: 5px;
                }
            }
            >p{
                font-family: 'DM Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 2.1rem;
                line-height: 2.7rem;
                text-align: center;
                margin-top: 1rem;

                color: #FFFFFF;
            }
            >span{
                font-weight: 300;
                font-size: 1.3rem;
            }
            button#euQuero{
                
                width: 11.5rem;
                height: 3.0rem;
                background: #FFFAFD;
                border-radius: 4px;
                border: none;
                margin-top: 1rem;
                cursor: pointer;


                font-family: 'DM Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 14px;
                line-height: 18px;
                color: #000000;

                &:hover{
                    background-color: #000000;
                    color: #FFFAFD;
                }
            }
        }
        
        }


`