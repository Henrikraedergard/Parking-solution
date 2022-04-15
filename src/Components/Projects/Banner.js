import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 70%;
    margin: 0px auto;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
`

const Title = styled.h1`
    display: inline;
    font-size: 3em;
    color: rgb(250, 50, 50);
`

function Banner() {
    return (
        <Container>
            <Title>Alle prosjekter</Title>
        </Container>
    )
}

export default Banner
