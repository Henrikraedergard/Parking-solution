import React from 'react'
import { useParams } from "react-router-dom";

function Project() {
    let { id } = useParams()
    return (
        <div>
            Prosjekt { id }
        </div>
    )
}

export default Project
