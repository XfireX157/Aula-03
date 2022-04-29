import React from "react"
import './style'
import { Rodape } from "./style"
import Logo from '../../Assets/img/bank_logo.svg'
import { AiOutlineGooglePlus } from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { LogoBank } from "./style"
import { Icons } from './style'

export function Footer() {
    return (
        <>
            <Rodape>
                <LogoBank>
                    <img src={Logo} alt="Logo Bank" />
                </LogoBank>

                <div>
                    <a href="#"><Icons><AiOutlineGooglePlus /></Icons></a>
                    <a href="#"><Icons><AiFillFacebook /></Icons></a>
                    <a href="#"><Icons><AiFillInstagram /></Icons></a>
                </div>
            </Rodape>
        </>
    )
}