import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import AllProducts from "../../AllProducts.json"

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    top: 150px;
    justify-content: center;
    gap: 25px;
    width: 90%;
    margin: 0px auto;
    padding-bottom: 200px;
`

const Li = styled.li`
    position: relative;
    display: block;
    height: 400px;
    width: 400px;
    cursor: pointer;
    /* box-shadow: 0px 0px 3px 0.6px rgb(139, 139, 139); */
    border-radius: 5px;
    transition: 100ms;
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

function List() {
    let navigate = useNavigate()

    return (
        <Ul>
            {AllProducts.map(product => <Li onClick={() => navigate("/product/" + product.url)}>
                <Img src={`media/models/${product.url}/image-1-large.jpg`} />
                <Name>{product.name}</Name>
                <p>{product.size}</p>
                <p>{product.parkingSpaces}</p>
                <p>{product.avhengig}</p>
            </Li>)}
        </Ul>
    )
}

export default List;
