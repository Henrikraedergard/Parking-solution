import React from 'react'
import styled from 'styled-components'


const Img = styled.img`
    display: block;
    border-radius: 6px;
    height: 550px;
    margin: 20px auto;
    gap: 10px;
`

const Container = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin-left: 100px; 
`

const Title = styled.h1`
    font-size: 5em;
    color: rgb(250, 50, 50);
    background-color: white;
    display: inline;
`

const Text = styled.p`
    display: inline;
    font-size: 1.3em;`

function Banner(product) {
    return (
        <>
            <Img src={`../media/models/${product.product.url}/image-1-large.jpg`} alt={'Bilde av systemet'}/>
            <Container>
                <Title> {product.product.name} </Title>
                <Text> {product.product.shortText} </Text>
            </Container>
        </>
    )
}

export default Banner
