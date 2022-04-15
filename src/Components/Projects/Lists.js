import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import AllProjects from "../../AllProjects.json"

const Div = styled.div`
    margin-top: 70px
`

const Container = styled.ul`
    margin-left: 20px;
`

const Title = styled.h2`
    font-size: 2em;
`

const Ul = styled.ul`
    display: flex;
    gap: 20px;
    overflow-x: scroll;
    /* height: 400px; */
    align-items: center;
    padding: 20px;
    font-size: 1.2em;
`

const Li = styled.li`
    position: relative;
    display: block;
    height: 400px;
    width: 400px;
    cursor: pointer;
    border-radius: 5px;
    transition: 120ms;

    &:hover {
        transform: scale(1.06)
    }
`

const Img = styled.img`
    width: 100%;
    cursor: pointer;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

const Name = styled.h3`
    color: rgb(250, 50, 50);
    font-size: 1.4em;
`

const Text = styled.p`
    font-size: 1.3em
`

function Lists() {
    let navigate = useNavigate()
    return (
        <Div>
            <Container>
                <Title>2022</Title>
                <Ul>
                    {
                        AllProjects
                            .filter(project => project.year === 2022)
                            .map(project =>
                                <Li onClick={() => navigate("/project/" + project.url)}>
                                    <Img src="media/models/optilift/image-1-large.jpg" />
                                    <Name>{project.address}</Name>
                                    <Text>{project.system}</Text>
                                    <Text>{project.parkingSpaces}</Text>
                                </Li>
                            )
                    }
                </Ul>
            </Container>
            <Container>
                <Title>2022</Title>
                <Ul>
                    {
                        AllProjects
                            .filter(project => project.year === 2021)
                            .map(project =>
                                <Li>
                                    <Img src="media/models/optilift/image-1-large.jpg" />
                                    <Name>{project.address}</Name>
                                    <Text>{project.system}</Text>
                                    <Text>{project.parkingSpaces}</Text>
                                </Li>
                            )
                    }
                </Ul>
            </Container>
            <Container>
                <Title>2022</Title>
                <Ul>
                    {
                        AllProjects
                            .filter(project => project.year === 2020)
                            .map(project =>
                                <Li>
                                    <Img src="media/models/optilift/image-1-large.jpg" />
                                    <Name>{project.address}</Name>
                                    <Text>{project.system}</Text>
                                    <Text>{project.parkingSpaces}</Text>
                                </Li>
                            )
                    }
                </Ul>
            </Container>
            <Container>
                <Title>2022</Title>
                <Ul>
                    {
                        AllProjects
                            .filter(project => project.year === 2019)
                            .map(project =>
                                <Li>
                                    <Img src="media/models/optilift/image-1-large.jpg" />
                                    <Name>{project.address}</Name>
                                    <Text>{project.system}</Text>
                                    <Text>{project.parkingSpaces}</Text>
                                </Li>
                            )
                    }
                </Ul>
            </Container>
        </Div>
    )
}

export default Lists
