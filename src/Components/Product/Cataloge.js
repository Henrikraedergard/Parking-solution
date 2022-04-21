import React from 'react'
import styled from 'styled-components'
import Product from '../../pages/Product'

const Container = styled.div`
    padding: 15px;
    border-radius: 5px;
    margin: 75px 50px;
    overflow: hidden;
`

const Title = styled.h2`
    font-size: 2em;
`

const A = styled.p`
    cursor: pointer;
    border: 2px solid rgb(250, 50, 50);
    padding: 10px;
    border-radius: 3px;
    font-size: 1.2em;
    display: inline-block;
    color: rgb(250, 50, 50);
`

const Download = styled.a`
    cursor: pointer;
    border: 2px solid rgb(250, 50, 50);
    padding: 10px;
    border-radius: 3px;
    font-size: 1.2em;
    display: inline-block;
    color: rgb(250, 50, 50);
`

function Cataloge(product) {
    console.log(product.product.url);
    return (
        <Container>
            <Title>Tekniske illustrasjoner</Title>
            <A onClick={() => openInNewTab(`../../media/models/${product.product.url}/data-sheet.pdf`)}>Åpne katalog for {product.product.name}</A>
            <Download href={`../../media/models/${product.product.url}/data-sheet.pdf`} download={`${product.product.name}.pdf`}>Last ned katalog for {product.product.name}</Download>
        </Container>
    )
}

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

export default Cataloge
