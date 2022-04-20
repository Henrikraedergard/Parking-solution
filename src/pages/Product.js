import React from 'react';
import { useParams } from "react-router-dom";

import AllProducts from '../AllProducts.json';
import Error from '../pages/Error'

import Banner from '../Components/Product/Banner'
import LongText from '../Components/Product/LongText';

function Product() {
    let { id } = useParams()
    let showProduct = false

    for (let i = 0; i < AllProducts.length; i++) {
        if (id === AllProducts[i].url) {
            showProduct = true
            return (
                <>
                    <Banner product={AllProducts[i]}/>
                    <LongText product={AllProducts[i]} />
                </>
            )
        }
    }
    if (!showProduct) {
        return <Error />
    }
}

export default Product;
