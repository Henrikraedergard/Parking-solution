import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Section = styled.section`
    position: relative;
    top: 20px;
    margin-bottom: 170px;
`

const Img = styled.img`
    position: relative;
    display: block;
    top: -10px;
    left: 50px;
    width: 80%;

    @media only screen and (max-width: 950px) {
        margin: 30px auto;
        left: 0px;
        width: 100%;
    }
`

const Container = styled.div`
    position: absolute;
    font-size: 1.2em;
    top: 430px;
    left: 60vw;
    padding: 10px;
    background: linear-gradient(to right,rgb(251, 251, 251), white);

    @media only screen and (max-width: 950px) {
        position: static;
        text-align: center;
        margin-top: 0px;
        background: none;
    }
`

const Button = styled.button`
    display: inline;
    position: relative;
    cursor: pointer;
    color: rgb(255, 85, 85);
`

function Landing() {
    let navigate = useNavigate()
    return (
        <Section>
            <Img src="./media/other/landing1.png" alt="Bilde av bilheis" />
            <Container>
                <h1>Fremtidens parkering</h1>
                <Button onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/produkter")
                }}>Se våre løsninger</Button>
            </Container>
        </Section>
    )
}

export default Landing;