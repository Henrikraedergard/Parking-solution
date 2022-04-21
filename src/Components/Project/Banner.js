import React from 'react'
import styled from 'styled-components'
import Image from '../../media/projects/bernt-knudsen-vei-57/IMG_2812.jpg'
// const images = importAll(require.context('../../media/projects/bueveien-5/', false, /\.(png|jpe?g|svg)$/));

const Img = styled.img`

`

const Container = styled.div`
`

const Title = styled.h1`

`
const Text = styled.p`

`

function Banner(project) {
    return (
        <>
            <Container>
                <Img src={'../media/models/projects/bernt-knudsen-vei-57/IMG_2812.jpg'} alt={'Hei'}/>
                <Title> {project.project.address} </Title>
                <Text> {project.project.system} </Text>
            </Container>
        </>
    )
}

// function importAll(r) {
//     return r.keys().map(r);
// }


export default Banner
