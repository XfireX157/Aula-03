import styled from 'styled-components';
import { CorFundo } from './style';

import {
    FundoClaro, TextoFundoClaro, ConteudoClaro,
    FundoEscuro, TextoFundoEscuro, ConteudoEscuro
} from './style'

export const TemaClaro = {
    body: FundoClaro,
    inside: ConteudoClaro,
    text: TextoFundoClaro,
    filter: "",
};

export const TemaEscuro = {
    body: FundoEscuro,
    inside: ConteudoEscuro,
    Text: TextoFundoEscuro,
    filter: "invert(100%)",
};

export const BtnTema = styled.button`
    position: absolute;
    top: 5.80vh;
    right: 15px;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    background-color: #F1F1F1;
    color: ${CorFundo};

    z-index 10;
`;