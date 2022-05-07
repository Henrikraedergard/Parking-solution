import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
`

const Img = styled.img`
    width: 80%;
    margin: 0px auto;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    /* margin-top: 20px; */
    width: 80%;
    margin: 0px auto;`

const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    color: rgb(250, 50, 50);
    @media only screen and (max-width: 950px) {
        font-size: 1.3em;
    }
`

const Text = styled.p`
    font-size: 1.3em;
    text-align: center;

    @media only screen and (max-width: 950px) {
        font-size: 1em;
    }
`

function LongText() {
    return (
        <Section>
            <Img src="media/other/kart.png" alt="" />
            <Container>
                <Title>Om oss</Title>
                <Text>Vi er et relativt nyetablert selskap med fokus på smarte
                    løsninger for parkering og personheis.</Text>
                <Text>Vi kan levere parkeringsanlegg fra små prosjekter for private
                til store automatiske parkeringsanlegg uten begrensninger i størrelse og antall p-plasser.
                    Systemene kan være over og under bakkenivå , eller en kombinasjon av begge.</Text>
                <Text>Vi er også stolt leverandør av en unik og eksklusiv
                    panorama360º personheis hvor vi er eneleverandør i de nordiske landene.</Text>
                <Text>Vi har besøkt fabrikker på flere kontinenter og har nå
                    etablert samarbeid med de vi vet leverer god kvalitet for det nordiske markedet.</Text>
                <Text>Vi bistår kunder, arkitekter, eiendomsutviklere,
                    entreprenører og offentlige etater gjennom hele prosessen.</Text>
            </Container>
        </Section>
    )
}

export default LongText;