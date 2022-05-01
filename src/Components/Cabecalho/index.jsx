import React from "react";
import logoBank from '../../Assets/img/bank_logo.svg'
import { BtnCabecalho } from './style';
import { Headers } from './style'
import { LogoImg } from './style'
import { Logo } from "./style";

export function Cabecalho() {


    return (
        <>
            <Headers>
                <LogoImg>
                    <Logo src={logoBank} alt="Logo marca bank" />
                </LogoImg  >

                <div>
                    <BtnCabecalho primary>Ajuda</BtnCabecalho>
                    <BtnCabecalho>Sair</BtnCabecalho>
                </div>

            </Headers>
        </>
    )
}
