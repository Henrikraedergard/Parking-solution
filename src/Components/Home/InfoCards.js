import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
    width: 100%;
    margin-bottom: 150px;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 400px 400px;
    top: 10px;
    margin: 0px auto;
    width: fit-content;
    gap: 150px;

    @media only screen and (max-width: 950px) {
        grid-template-columns: 1fr;
    }
`

const Title = styled.h2`
    font-size: 1.6em;
    color: rgb(255, 85, 85) !important;
    text-align: center;
`

const Text = styled.p`
    font-size: 1.3em;
    margin-top: 10px;
    text-align: center;
`

function InfoCards() {
    return (
        <Section>
            <Container>
                <div>
                    <Title>Økonomisk løsning</Title>
                    <Text>Spar tid, energi, og drivstoff. </Text>
                </div>
                <div>
                    <Title>Teknologisk sikkerhet</Title>
                    <Text>Bilen blir automatisk parkert</Text>
                </div>
                <div>
                    <Title>Hurtig byggetid</Title>
                    <Text>Bygd og satt sammen på kort tid</Text>
                </div>
                <div>
                    <Title>Grønn parkering</Title>
                    <Text>Systemene er resirkulerbare</Text>
                </div>
                <div>
                    <Title>Bruker-vennelig</Title>
                    <Text>Enkelt å bruke</Text>
                </div>
                <div>
                    <Title>Effektiv parkering</Title>
                    <Text>Sett av mindre plass til parkering</Text>
                </div>
            </Container>
        </Section>
    )
}

export default InfoCards;