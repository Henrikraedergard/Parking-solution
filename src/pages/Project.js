import React from 'react'
import { useParams } from "react-router-dom";

import Banner from '../Components/Project/Banner'
import LongText from '../Components/Project/LongText'
import UsedProduct from '../Components/Project/UsedProduct'

import Error from '../pages/Error'
import AllProjects from '../AllProjects.json'

function Project() {
    let { id } = useParams()

    let item = AllProjects.filter(item => item.url === id)

    if (item.length === 0) {
        return <Error />
    }

    return (
        <>
            <Banner project={item[0]} />
            <LongText project={item[0]} />
            <UsedProduct project={item[0]} />
        </>
    )
}

export default Project
