import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 70%;
    margin: 0px auto;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 950px) {
        width: 90%;
    }
`

const Title = styled.h1`
    display: inline;
    font-size: 3em;
    color: rgb(250, 50, 50);

    @media only screen and (max-width: 950px) {
    font-size: 2.2em;
    }
`

function Banner() {
    return (
        <Container>
            <Title>Alle prosjekter</Title>
        </Container>
    )
}

export default Banner
