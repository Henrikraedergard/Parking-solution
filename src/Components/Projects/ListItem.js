import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

import AllProjects from "../../AllProjects.json"

const Li = styled.li`
    position: relative;
    display: block;
    height: 400px;
    width: 400px;
    min-width: 400px;
    cursor: pointer;
    border-radius: 5px;
    transition: 120ms;
    margin-bottom: 20px;

    &:hover {
        transform: scale(1.06);

        @media only screen and (max-width: 950px) {
            transform: scale(1);
        }
    }

    @media only screen and (max-width: 950px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`

const Status = styled.p`
    position: absolute;
    right: 0px;
    color: rgb(250, 250, 250);
    background-color: grey;
    padding: 5px;
    font-size: 1.5em;
    margin: 10px;
`

const Img = styled.img`
    width: 100%;
    cursor: pointer;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    @media only screen and (max-width: 950px) {

    }
`

const Name = styled.h3`
    color: rgb(250, 50, 50);
    font-size: 1.4em;

    @media only screen and (max-width: 950px) {
        font-size: 1em;
    }
`

const Text = styled.p`
    font-size: 1.3em

    @media only screen and (max-width: 950px) {
        font-size: 0.8em;
    }
`

const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

function ListItem(yearFilter) {
    let navigate = useNavigate()
    return (
        <>
            {
                AllProjects
                    .filter(project => project.year === yearFilter.yearFilter)
                    .map(project =>
                        <Li key={project.url} onClick={() => {
                            window.scrollTo(0, 0);
                            navigate("/prosjekt/" + project.url)
                        }
                        }>
                            <Status>{project.status !== "Ferdig" ? project.status : ""} </Status>
                            <Img src={`media/projects/${project.url}/thumbnail.jpg`} />
                            <Name>{project.address}</Name>
                            <TextContainer>
                                <Text>{project.system}</Text>
                                <Text>{project.parkingSpaces} biler</Text>
                            </TextContainer>

                        </Li>
                        
                    )
            }
        </>
    )
}

export default ListItem
