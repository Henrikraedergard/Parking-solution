import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 150px;
    border-radius: 5px;
    margin: 100px 0px;
    place-items: center;
`

const Textbox = styled.div`
    text-align: center;
    width: 600px;

    @media only screen and (max-width: 950px) {
        width: 90%;
    }
`

const Title = styled.h2`
    font-size: 2.3em;
    color: rgb(250, 50, 50);
    margin-bottom: 20px;
    @media only screen and (max-width: 950px) {
        font-size: 1.9em;
    }
`

const Text = styled.p`
    font-size: 1.4em;
    @media only screen and (max-width: 950px) {
        font-size: 1em;
    }
`

const Placeholder = styled.img`
    width: 500px;
    // background-color: grey;
    border-radius: 5px;
    @media only screen and (max-width: 950px) {
        width: 90%;
    }
`

const Section = styled.div`
    display: flex;
    gap: 100px;
    align-items: center;

    @media only screen and (max-width: 950px) {
        flex-direction: column;
        gap: 50px;
    }
`

const Video = styled.video`
    @media only screen and (max-width: 950px) {
        width: 90%;
    }
`

function LongText(product) {

    return (
        <Container>
            <Section>
                <Placeholder src="../media/majorlift1.jpeg" />
                <Textbox>
                    <Title>Doble parkeringsplassen</Title>
                    <Text>Majorlift lar deg doble parkeringsplassen ved å kunne parkere to biler over hverandre. Dette er en perfekt løsning dersom du ikke har mye plass i gårdsplassen til å parkere bilene dine. Med denne kompakte løsningen blir det også lettere for dine gjester å kunne parkere.</Text>
                </Textbox>
            </Section>
            <Section>
                <Textbox>
                    <Title>Mer plass til bolig</Title>
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, doloribus. Tempore rem iste consectetur sit officia nisi adipisci corrupti enim molestiae quaerat. Rerum iste nostrum vitae, tempore beatae eos.</Text>
                </Textbox>
                <Placeholder src="../media/majorlift2.jpeg" />
            </Section>
            <Section>
                <Placeholder src="../media/majorlift3.jpeg" />
                <Textbox>
                    <Title>Adaptivt installasjon</Title>
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, doloribus. Tempore rem iste consectetur sit officia nisi adipisci corrupti enim molestiae quaerat. Rerum iste nostrum vitae, tempore beatae eos.</Text>
                </Textbox>
            </Section>
            <Video id={"video"} onLoadStart={setVolume} controls src={`../media/models/${product.product.url}/animation.mp4`}>Nettleseren din støtter ikke HTML5 video</Video>
        </Container>
    )
}

function setVolume() {
    let video = document.getElementById("video");
    video.volume = 0.1;
}
export default LongText
