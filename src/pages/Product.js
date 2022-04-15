import React from 'react';
import { useParams } from "react-router-dom";

function Product() {
    let { id } = useParams()
    return (
        <main>Produkt { id }</main>
    )
}

export default Product;
