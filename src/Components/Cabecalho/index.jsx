import React from "react";
import logoBank from '../../Assets/img/bank_logo.svg'
import { BtnFirst } from './style';
import { BtnSecond } from './style'
import { Headers } from './style'
import { LogoImg } from './style'

export function Cabecalho() {
    return (
        <>
            <Headers>
                <LogoImg>
                    <img src={logoBank} alt="Logo marca bank"></img>
                </LogoImg  >

                <div>
                    <BtnFirst>Ajuda</BtnFirst>
                    <BtnSecond>Sair</BtnSecond>
                </div>
            </Headers>
        </>
    )
}
