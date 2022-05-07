import React from 'react'
import styled from 'styled-components'

import AllExtras from '../../ProductExtras.json'

const Container = styled.div`
    margin: 75px 50px;

    @media only screen and (max-width: 950px) {
        margin: 30px 5px;
    }
`

const Title = styled.h1`
    text-align: center;
    font-size: 2.2em;

    @media only screen and (max-width: 950px) {
        font-size: 1.8em;
    }
`

const Ul = styled.ul`

`

const Li = styled.li`
    margin: 30px 40px;
    padding: 5px;
    list-style: none;

    @media only screen and (max-width: 950px) {
        margin: 30px 10px;
    }
`

const Subtitle = styled.h2`
    color: rgb(250, 50, 50);
    font-size: 1.7em;
    margin-bottom: 7px;

    @media only screen and (max-width: 950px) {
        font-size: 1.3em;
    }
`

const Description = styled.p`
    font-size: 1.3em;

    @media only screen and (max-width: 950px) {
        font-size: 1em;
    }
`

function ExtraUtils({ product }) {
    return (
        <Container>
            <Title>Tilleggs produkter</Title>
            <Ul>
                {
                    product.extras.map(extraID => {
                            return (
                                <Li>
                                    <Subtitle> {AllExtras[extraID].name} </Subtitle>
                                    <Description> {AllExtras[extraID].description} </Description>
                                </Li>
                            )
                    }
                    )
                }
            </Ul>
        </Container>
    )
}

export default ExtraUtils
