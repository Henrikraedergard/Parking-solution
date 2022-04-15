import React from 'react';
import { useParams } from "react-router-dom";

function Product() {
    let { id } = useParams()
    return (
        <main>Produkt</main>
    )
}

export default Product;
