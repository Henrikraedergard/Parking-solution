import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Container = styled.main`
    text-align: center;
    margin: 280px 0px;
`

const Title = styled.h1`
    color: rgb(250, 50, 50);
    font-size: 3em;
`

const Text = styled.p`
    font-size: 1.5em;
`

const Button = styled.button`
    color: rgb(250, 50, 50);
    font-size: 2em;
    margin-top: 50px;
`



function Error() {
    let navigate = useNavigate()
    return (
        <Container>
            <Title>404 - Denne siden finnes ikke</Title>
            <Text>Vi beklager, men denne siden finnes ikke. Sjekk at du skrev inn riktig nett-addresse i nettleseren din.</Text>
            <Button onClick={() => navigate("/")}>Gå til hjem-siden</Button>
        </Container>
    )
}

export default Error
