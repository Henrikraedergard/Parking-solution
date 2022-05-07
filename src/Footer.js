import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 200px;
    background-color: rgb(100, 100, 100);
    color: white;
    padding-top: 100px;
    margin-top: 100px;
`

const Text = styled.p`
    display: block;
    align-items: center;
    text-align: center;
    font-size: 1.3em;

    @media only screen and (max-width: 950px) {
        font-size: 1em;
    }

`

const Img = styled.img`

`


function Footer() {
    return (
        <Container>
            <Img />
            <Text>Adresse: Brevigveien 99, 1912 Enebakk</Text>
            <Text>Parking Solution AS - 2019- org no: 921 431 139 </Text>
        </Container>
    )
}

export default Footer
