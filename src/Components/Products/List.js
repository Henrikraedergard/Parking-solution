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
    margin-top: 180px;
`

const Li = styled.li`
    position: relative;
    display: block;
    width: 400px;
    cursor: pointer;
    border-radius: 5px;
    transition: 120ms;
    padding-bottom: 30px;

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

const Size = styled.p`
    font-size: 1.8em;
    text-align: end;
    padding-right: 20px;
`

const Biler = styled.p`
    font-size: 1.3em;
    margin-top: 10px;
`

const Avhengig = styled.p`
    text-align: end;
    padding-right: 20px;
    font-size: 1.3em;
    margin-top: 10px;
`

const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

function List(filter) {

    let navigate = useNavigate()
    if (filter.filter === "") {
        return (
            <Ul id="list">
                {AllProducts.map(product =>
                    <Li onClick={() => navigate("/product/" + product.url)} key={product.ID}>
                        <Img src={`media/models/${product.url}/image-1-large.jpg`} />
                        <Div>
                            <Name>{product.name}</Name>
                            <Size>{product.size}</Size>
                            <Biler>{product.parkingSpaces} biler</Biler>
                            <Avhengig>{product.avhengig ? "Avhengig" : "Uavhengig"}</Avhengig>
                        </Div>
                    </Li>
                )}
            </Ul>
        )
    } else {
        let filterdList = AllProducts.filter(e => e.size === filter.filter)
        return (
            <Ul id="list">
                {filterdList.map(product =>
                    <Li onClick={() => navigate("/product/" + product.url)} key={product.ID}>
                        <Img src={`media/models/${product.url}/image-1-large.jpg`} />
                        <Name>{product.name}</Name>
                        <Size>{product.size}</Size>
                        <Biler>{product.parkingSpaces} biler</Biler>
                        <Avhengig>{product.avhengig ? "Ja" : "nei"}</Avhengig>
                    </Li>
                )}
            </Ul>
        )
    }
}

export default List;
