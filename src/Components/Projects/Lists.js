import React from 'react'
import styled from 'styled-components';

import ListItem from './ListItem'

const Div = styled.div`
    margin-top: 70px
`

const Container = styled.ul`
    margin-left: 20px;
`

const Title = styled.h2`
    font-size: 2em;
`

const Ul = styled.ul`
    display: flex;
    gap: 20px;
    overflow-x: scroll;
    align-items: center;
    padding: 20px;
    font-size: 1.2em;
`

function Lists() {
    return (
        <Div>
            <Container>
                <Title>2022</Title>
                <Ul>
                    <ListItem yearFilter={2022} /> 
                </Ul>
            </Container>
            <Container>
                <Title>2021</Title>
                <Ul>
                    <ListItem yearFilter={2021} /> 
                </Ul>
            </Container>
            <Container>
                <Title>2020</Title>
                <Ul>
                    <ListItem yearFilter={2020} /> 
                </Ul>
            </Container>
            <Container>
                <Title>2019</Title>
                <Ul>
                    <ListItem yearFilter={2019} /> 
                </Ul>
            </Container>
        </Div>
    )
}

export default Lists
