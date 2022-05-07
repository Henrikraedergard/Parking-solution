import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin: 50px 100px 10px 100px; 

    @media only screen and (max-width: 950px) {
        margin: 10px 10px 10px 20px;
    }
`

const Title = styled.h2`
    font-size: 2em;
    color: rgb(250, 50, 50);
    background-color: white;
    display: inline;

    @media only screen and (max-width: 950px) {
        font-size: 1em;
    }
`
const Span = styled.span`
    color: rgb(75, 75, 75);
`

const System = styled.p`
    font-size: 1.6em;
`

const Text = styled.p`
    margin-top: 50px;
    font-size: 1.3em;

    @media only screen and (max-width: 950px) {
        font-size: 1em;
    }
`

function LongText(project) {
    

    return (
        <Container>
            <Title> {project.project.address}<Span>, {project.project.state} </Span></Title>
            <System> {project.project.system} </System>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laudantium cum harum? Hic voluptates necessitatibus sit eum! Odit tempora autem nemo ullam repudiandae tenetur accusantium dicta incidunt sapiente voluptas distinctio odio, quod ea illo alias tempore quaerat modi sed commodi aspernatur? Itaque reiciendis eum architecto sequi, nisi at officia modi.</Text>
        </Container>
    )
}

export default LongText
