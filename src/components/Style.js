import styled, {css,createGlobalStyle} from 'styled-components'


export const GlobalStyle =createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        vertical-align: baseline;
    }
    
    html{
        font-size: 62.5%;
    }

    body {
        background-color: red;
`;

export const Form = styled.div`
    display: flex;
    flex-wrap:flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.2);
    padding: 2rem;
    width:90%;
    margin-left:auto;
    margin-right:auto;
    margin-top:1rem;
    margin-bottom:1rem;
    background: #E7E7E7;
    border-radius: 3rem;
    ${props=>props.modal && css`
        width: 75%;
    `};
`;

export const Button = styled.button`
    line-height: 1;
    background-color: transparent;
    border: none;
    outline: none;
`;

export const I=styled.i`
    color: Black;
    font-size: 2rem;
    ${props=>props.modal && css`
        font-size: 15rem;
        margin-left:20%;
        margin-right:auto;
        opacity:0.5;
        width: 15rem;
        margin-bottom:3rem;
    `};
`;

export const Input = styled.input`
    font-size: 1.7rem;
    font-family: Inter;
    line-height: 2.1rem;
    background-color: transparent;
    width: 100%;
    margin-left:1rem;
    border: none;
    color: #9A9A9D;
    &:focus,
    &:active {
    outline: none;
    }
    &::placeholder {
    color: #9A9A9D;
    }
`;

export const ContenedorModal = styled.div`
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    background: #fff;
    position: absolute;
    top:0rem;
    left:0rem;
    z-index: 10;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left:auto;
    margin-right:auto;
`;

export const CierreBotonModal = styled.button`
    cursor: pointer;
    padding: 0;
    line-height: 1;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.7rem;
    font-family: Inter;
    line-height: 2.1rem;
`;

export const ContenedorBotones=styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    margin-left:auto;
    margin-right:auto;
`;

export const Div=styled.div`
    width: auto;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-left:auto;
    margin-right:auto;
`;

export const Mensaje=styled.div`
    width: 25rem;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-left:auto;
    margin-right:auto;
    margin-top:20rem;
    font-size: 1.7rem;
    font-family: Inter;
    line-height: 2.1rem;
`;