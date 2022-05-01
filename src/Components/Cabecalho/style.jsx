import styled from "styled-components";
import { CorFundo } from "../Cores/style";


export const Headers = styled.header`
    width: 100%;
    height: 100%;
    background-color: ${CorFundo};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;
    font-family: Verdana;
`

export const BtnCabecalho = styled.a`
    text-align: center;
    border-radius: 3px;
    padding: 5px 20px;
    margin: 0 10px;
    font-weight: 600;
    border: 2px solid #fff;

    background: ${(props) => props.primary ? "white" : CorFundo};
    color: ${(props) => props.primary ? CorFundo : "white"};

    &:hover {
        background-color: #ccc;
    }
`
export const Logo = styled.img`
        width: 120px;
        height: 120px;
        transition: 0.2s ease-in;
        
        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }
`

export const LogoImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`