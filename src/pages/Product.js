import React, { useState } from 'react';
import { useParams } from "react-router-dom";

// import AllProducts from '../AllProducts.json';
import AllProducts from '../newAllProducts.json';
import Error from '../pages/Error'

import Banner from '../Components/Product/Banner'
import LongText from '../Components/Product/LongTextCopy';
import Cataloge from '../Components/Product/Cataloge';
import QuickInfo from '../Components/Product/QuickInfo';
import ExtraUtils from '../Components/Product/ExtraUtils';

function Product() {
    let { id } = useParams()

    let item = AllProducts.filter(item => item.url === id)

    if (item.length === 0) {
        return <Error />
    }

    return (
        <>
            <Banner product={item[0]} />
            {/* <QuickInfo product={item[0]}/> */}
            <LongText product={item[0]} />
            <ExtraUtils product={item[0]} />
            <Cataloge product={item[0]} />
        </>
    )
}


export default Product;
