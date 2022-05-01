import React from "react";
import Titulo from "../Titulo";


import { BoxContainer } from "./style";
import { H2 } from "./style"
import { Box } from "./style"
import { Card } from "./style";
import { Saldo } from "./style";
import { Btn } from "./style";
import { Icon, IconeTema } from "./style";
import { TextCard } from "./style";
import { SaldoUser } from "./style";
import { Reais } from "./style";


import { ImCheckmark } from "react-icons/im"
import { ImLibrary } from "react-icons/im"

export function Container() {

    return (
        <>
            <BoxContainer>
                <Titulo>Olá Fulano!</Titulo>
                <Box>
                    <Card>
                        <H2>Conta</H2>
                        <TextCard>
                            <Saldo>Saldo disponivel</Saldo>
                            <IconeTema><ImLibrary /></IconeTema>
                        </TextCard>
                        <SaldoUser><Reais>R$</Reais> 0,00</SaldoUser>

                        <Btn><ImCheckmark /></Btn>
                    </Card>
                    <Card>
                        <H2>Conta</H2>
                        <TextCard>
                            <Saldo>Saldo disponivel</Saldo>
                            <IconeTema><ImLibrary /></IconeTema>
                        </TextCard>
                        <SaldoUser><Reais>R$</Reais> 0,00</SaldoUser>

                        <Btn><ImCheckmark /></Btn>
                    </Card>
                </Box>
            </BoxContainer>
        </>
    );
};

