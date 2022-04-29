import styled from "styled-components";

export const BoxContainer = styled.main`
    width: 100%;
    height: 100%;
`
export const Box = styled.section`
    width: 80%; 
    margin: auto;
`

export const Card = styled.article`
    width: 40%;
    padding: 15px;
    box-shadow: 3px 2px 15px 4px #ccc;
    background-color: #fff;
    border-radius: 4px;
`

export const H2 = styled.h2`
    font-family: Montserrat;
    color: grey;
    font-weight: 700;
    margin-bottom: 12px;
    font-size: 20px;
`

export const TextCard = styled.div`
    display: flex;
    aling-intens: center;
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
    margin-left: 20px;
    color: grey;
`

export const Btn = styled.button`
    width: 20%;
    margin: auto;
    display: flex;
    justify-content: center;
    margin-top: 80px;
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


