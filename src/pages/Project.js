import React from 'react'
import { useParams } from "react-router-dom";

import Banner from '../Components/Project/Banner'

import Error from '../pages/Error'
import AllProjects from '../AllProjects.json'

function Project() {
    let { id } = useParams()
    let showProject = false;
    for (let i = 0; i < AllProjects.length; i++) {
        if (id === AllProjects[i].url) {
            showProject = true
            return (
                <>
                    <Banner project={AllProjects[i]}/>
                </>
            )
        }
    }
    if (!showProject) {
        return <Error />
    }
}

export default Project
