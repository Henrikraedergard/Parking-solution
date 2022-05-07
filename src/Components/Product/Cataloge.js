import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    @media only screen and (max-width: 950px) {
        flex-direction: column;
        width: 90%;
        margin: 0px auto;
        margin-top: 90px;
        text-align: center;
    }
`

const Button = styled.a`
    cursor: pointer;
    border: 2px solid rgb(250, 50, 50);
    padding: 10px;
    border-radius: 3px;
    font-size: 1.5em;
    display: inline-block;
    color: rgb(250, 50, 50);
    transition: 150ms;

    &:hover {
        transform: translateY(-4px);
        background-color: rgb(250, 50, 50);
        color: white;
        transition: 150ms;
    }

    @media only screen and (max-width: 950px) {
        font-size: 1em;
    }
`

function Cataloge(product) {
    return (
        <Container>
            <Button onClick={() => openInNewTab(`../../media/models/${product.product.url}/data-sheet.pdf`)}>Åpne data ark for {product.product.name} i ny fane</Button>
            <Button href={`../../media/models/${product.product.url}/data-sheet.pdf`} download={`${product.product.name}.pdf`}>Last ned data ark for {product.product.name}</Button>
        </Container>
    )
}

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

export default Cataloge
