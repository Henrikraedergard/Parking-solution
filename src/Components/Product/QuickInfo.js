import React from 'react'
import styled from 'styled-components'
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css'

const Container = styled.div`
    margin: 140px 0px;
    display: flex;
    justify-content: center;
    gap: 50px;
`

const Stat = styled.div`
    text-align: center;
`

const Title = styled.h1`

`

const Value = styled.p`
    color: rgb(250, 50, 50);
    font-size: 3em;
`

function QuickInfo() {
    return (
        <Container>
            <Stat>
                <Tooltip title="Minimum antall biler">
                    <Title>Antall biler</Title>
                </Tooltip>
                <Value>2 - 4</Value>
            </Stat>
            <Stat>
                <Tooltip title={"Avhengig vil si at en bil må flyttes for å få ut en annen"}>
                    <Title>Avhengig</Title>
                </Tooltip>
                <Value>Ja</Value>
            </Stat>
            <Stat>
                <Tooltip title={"Estimert størrelse på systemet (Small, Medium, Large)"}>
                    <Title>Størrelse</Title>
                </Tooltip>
                <Value>S</Value>
            </Stat>
            <Stat>
                <Tooltip title={"Estimert byggetid"}>
                    <Title>Installasjon</Title>
                </Tooltip>
                <Value>72h</Value>
            </Stat>
        </Container>
    )
}

export default QuickInfo
