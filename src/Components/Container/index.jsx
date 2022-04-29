import React from "react";
import Titulo from "../Titulo";
import { BoxContainer } from "./style";
import { H2 } from "./style"
import { Box } from "./style"
import { Card } from "./style";
import { Saldo } from "./style";
import { Btn } from "./style";
import { Icon } from "./style";
import { ImLibrary } from "react-icons/im"
import { TextCard } from "./style";
import { ImCheckmark } from "react-icons/im"

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
                            <Icon><ImLibrary /></Icon>
                        </TextCard>

                        <Btn><ImCheckmark /></Btn>
                    </Card>
                    <Card>
                        <H2>Conta</H2>
                        <TextCard>
                            <Saldo>Saldo disponivel</Saldo>
                            <Icon><ImLibrary /></Icon>
                        </TextCard>

                        <Btn><ImCheckmark /></Btn>
                    </Card>
                </Box>
            </BoxContainer>
        </>
    );
};

