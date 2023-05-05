import styled from "styled-components";

export const Rodape = styled.footer`
  flex: 0;

    width: 100%;
    height: 5rem;
    overflow: hidden;
    gap: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    background-color: rgba(13,19,33,0.92);
    color: white;
    padding: 0 20px;
    text-align: center;

    >div#Social{
      display: flex;
      align-items: center;
      gap: 2.5rem;

      >svg>path{
        fill: white;
      }
    }
`

export const FooterContainer = styled.div`
  color: white;
  font-size: 1rem;
  font-style: italic;
 

`