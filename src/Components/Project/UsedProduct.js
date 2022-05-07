import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-left: 100px;
    margin-top: 50px;
    gap: 40px;

    @media only screen and (max-width: 950px) {
        margin-left: 0px;
        gap: 20px;
        justify-content: center;
    }
`

const Quantity = styled.p`
    font-size: 3em;
    display: inline;
`

const Img = styled.img`
    height: 200px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    
    

    
`

const Button = styled.button`
    font-size: 3em;
    display: flex; 
    flex-direction: column;
    text-align: center;
    transition: 100ms;

    &:hover {
        transition: 170ms;
        transform: scale(1.05);

        @media only screen and (max-width: 950px) {
            transform: scale(1);
        }
    }

    @media only screen and (max-width: 950px) {
        height: 100%;
        width: 60%;
    }
`

function UsedProduct(project) {
    let navigate = useNavigate()
    return (
        <Container>
            <Quantity>{project.project.antall} x</Quantity>
            <Button onClick={() => {
                window.scrollTo(0, 0);
                navigate(`/produkt/${project.project.systemUrl}`)
            }}><Img src={`../media/models/${project.project.systemUrl}/image-1-large.jpg`} /> {project.project.system} </Button>
        </Container>
    )
}

export default UsedProduct
