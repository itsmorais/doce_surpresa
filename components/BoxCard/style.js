import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    height: fit-content;
    padding: 5%;

    background: rgba(13, 19, 33, 0.92);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    margin: auto;

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
        
        >div{

        >li{
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 1.4rem;
            line-height: 1.8rem;
            text-align: center;

            /* background */

            color: #FFFAFD;}
                    }
        >div{
            width: 100%;
            >p{
                font-family: 'DM Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 2.1rem;
                line-height: 2.7rem;
                text-align: center;

                color: #FFFFFF;
            }
            >span{
                font-weight: 300;
                font-size: 1.3rem;
            }
        }
        
        }


`