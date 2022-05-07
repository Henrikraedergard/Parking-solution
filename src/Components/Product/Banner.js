import React from 'react'
import styled from 'styled-components'


const Img = styled.img`
    display: block;
    border-radius: 6px;
    height: 600px;
    margin: 20px auto;
    gap: 10px;

    @media only screen and (max-width: 950px) {
        height: 100%;
        width: 95%;
    }
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
    display: block;
    text-align: center;

    @media only screen and (max-width: 950px) {
        font-size: 3em;
    }
`

const Text = styled.p`
    display: inline;
    font-size: 1.5em;
`

function Banner({product}) {
    return (
        <>
            <Img src={`../media/models/${product.url}/image-1-large.jpg`} alt={'Bilde av systemet'}/>
            {/* <Container> */}
                <Title> {product.name} </Title>
                {/* <Text> {product.product.shortText} </Text> */}
            {/* </Container> */}
        </>
    )
}

export default Banner
