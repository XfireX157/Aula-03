import { CorFundo } from '../Cores/style'

import styled from "styled-components";

export const BoxContainer = styled.main`
    width: 100%;
    height: 100%;
    margin-bottom: 11px;
`
export const Box = styled.section`
    width: 80%; 
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 800px){
        flex-direction: column;
       
    }
`

export const Card = styled.article`
    width: 40%;
    padding: 15px;
    box-shadow: 3px 2px 15px 4px #ccc;
    background-color: #fff;
    border-radius: 4px;
    margin: 20px;

    @media screen and (max-width: 800px){
        width: 70%
    }

`

export const H2 = styled.h2`
    font-family: Montserrat;
    color: grey;
    font-weight: 700;
    margin-bottom: 12px;
    font-size: 20px;
`

export const TextCard = styled.div`
    margin: auto;
    margin-top: 20px;
`

export const Saldo = styled.span`
    font-family: Montserrat;
    color: grey;
    font-size: 1.5rem;
`

export const Icon = styled.span`
    font-size: 1.3rem;
    margin-left: 10px;
    color: grey;
`

export const Btn = styled.button`
    width: 20%;
    margin: auto;
    display: flex;
    justify-content: center;
    margin-top: 45px;
    border-radius: 20px;
    padding: 19px 10px;
    cursor: pointer;

    &:hover{
        background-color: green;
        color: #fff;
    }

    &:active{
        width: 15%;
        height: 50px;
    }
`

export const SaldoUser = styled.p`
    padding-top: 20px;
    font-size: 1.8rem;
    font-family: Montserrat;
    font-weight: 600;
    color: grey;
`

export const Reais = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${CorFundo};
    font-family: Montserrat;
`

