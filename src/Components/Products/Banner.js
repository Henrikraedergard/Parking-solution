import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 70%;
    margin: 0px auto;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
`

const Title = styled.h1`
    display: inline;
    font-size: 3em;
    color: rgb(250, 50, 50);
`

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    text-align: center;
    box-shadow: 0px 0px 3px 0.6px rgb(139, 139, 139);
    border-radius: 5px;
    font-size: 1.2em;
    height: 90%;
`

const Button = styled.button`
    padding: 10px;
    width: 200px;
    cursor: pointer;
    text-align: center;
    align-items: center;
`

const Option = styled.button`
    display: none;
    padding: 10px;
    width: 200px;
    cursor: pointer;
    text-align: center;
`

const OptionList = styled.ul`
    display: none;
    flex-direction: column;
`

function Banner() {
    return (
        <Container>
            <Title>Alle produkter</Title>
            <Ul>
                <Button onClick={showOptions}>Filter</Button>
                <OptionList id="option-list">
                    <Button>Alle systemer</Button>
                    <Button>Små systemer</Button>
                    <Button>Mellomstore systemer</Button>
                    <Button>Store systemer</Button>
                    <Button>Andre systemer</Button>
                </OptionList>
            </Ul>
        </Container>
    )
}


let visible = false

function showOptions() {
    let optionsList = document.getElementById("option-list");
    optionsList.style.display = visible ? "none" : "flex";

    visible = !visible
}



export default Banner;
