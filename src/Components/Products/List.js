import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import AllProducts from "../../AllProducts.json"

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    width: 90%;
    margin: 0px auto;
    padding-bottom: 200px;
    margin-top: 70px;
`

const Li = styled.li`
    position: relative;
    display: block;
    height: 400px;
    width: 400px;
    cursor: pointer;
    border-radius: 5px;
    transition: 120ms;

    &:hover {
        transform: scale(1.06)
    }
`

const Img = styled.img`
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

const Name = styled.h3`
    color: rgb(250, 50, 50);
    font-size: 1.8em;
`

const Text = styled.p`
    font-size: 1.3em
`

function List() {
    let navigate = useNavigate()

    return (
        <Ul>
            {AllProducts.map(product =>
                <Li onClick={() => navigate("/product/" + product.url)}>
                    <Img src={`media/models/${product.url}/image-1-large.jpg`} />
                    <Name>{product.name}</Name>
                    <Text>{product.size}</Text>
                    <Text>{product.parkingSpaces}</Text>
                    <Text>{product.avhengig}</Text>
                </Li>
            )}
        </Ul>
    )
}

export default List;
