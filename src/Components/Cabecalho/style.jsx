import styled from "styled-components";

export const Headers = styled.header`
    width: 100%;
    height: 100%;
    background-color: #41d3be;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;
    font-family: Verdana;
`

export const BtnFirst = styled.a`
    background-color: #fff;
    padding: 10px 45px;
    margin-right: 35px;
    color: black;
    cursor: pointer;
    border-radius: 9px;
    transition: 0.2s ease-in;

    &:hover {
        background-color: #ccc;
    }
`

export const BtnSecond = styled.a`
    border-radius: 3px;
    border: 3px solid #fff;
    padding: 7px 45px;
    color: #fff;
    cursor: pointer;
    border-radius: 9px;
    transition: 0.2s ease-in;

    &:hover {
        color: #ccc;
      }
`

export const LogoImg = styled.div`
 
    box-sizing: border-box;

    img{
        width: 120px;
        height: 120px;
        transition: 0.2s ease-in;
        
        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }
    }
   
`