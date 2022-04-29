import styled from "styled-components";

export const Rodape = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
    background-color: #41d3be;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 800px){
        position: relative;
    }
`

export const Icons = styled.span`
    margin-right: 50px; 
    font-size: 2rem;
    color: #fff;
    transition: 0.2s ease-in;

    &:hover {
        color: #ccc;
    }
`

export const LogoBank = styled.div`
    img{
        width: 100px;
    }
`