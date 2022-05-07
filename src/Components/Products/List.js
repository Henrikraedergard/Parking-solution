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
        transform: scale(1.06);

        @media only screen and (max-width: 950px) {
            transform: scale(1);
        }
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
    margin-left: 20px;
    margin-top: 10px;
`

const Size = styled.p`
    font-size: 1.8em;
    text-align: end;
    padding-right: 20px;
`

const Biler = styled.p`
    font-size: 1.3em;
    margin-top: 10px;
    text-align: end;
`

const Avhengig = styled.p`
    text-align: end;
    padding-right: 20px;
    font-size: 1.3em;
    margin-top: 10px;
`

const Div = styled.div`
    // display: grid;
    // grid-template-columns: 1fr 1fr;
`

function List() {
    let navigate = useNavigate()
    return (
        <Ul id="list">
            {AllProducts.map(product =>
                <Li onClick={() => { 
                    window.scrollTo(0, 0);
                    navigate("/produkt/" + product.url)}
                    } key={product.ID}>
                    <Img src={`media/models/${product.url}/image-1-small.jpg`} />
                    <Div>
                        <Name>{product.name}</Name>
                        {/* <Size>{product.size}</Size> */}
                        {/* <Biler>Fra {product.parkingSpaces} biler og opp</Biler> */}
                        {/* <Avhengig>{product.avhengig ? "Avhengig" : "Uavhengig"}</Avhengig> */}
                    </Div>
                </Li>
            )}
        </Ul>
    )

}

export default List;
