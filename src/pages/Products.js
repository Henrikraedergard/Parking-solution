import React from 'react'
import { useNavigate } from 'react-router-dom';

import Banner from '../Components/Products/Banner'
import List from '../Components/Products/List'

function Products() {
    let navigate = useNavigate()
    return (
        <main>
            <Banner />
            <List />
        </main>
    )
}

export default Products;
