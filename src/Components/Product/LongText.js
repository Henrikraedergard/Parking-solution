import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    border-radius: 5px;
    width: 1000px;
    margin: 75px 50px;
`

const Title = styled.h2`
    font-size: 1.6em;
    color: rgb(250, 50, 50);
`

const Ul = styled.ul`
    padding-left: 25px;
    font-size: 1.3em;
`

const Li = styled.li`
list-style: outside "-    ";
    font-size: 1em;
`

function LongText(product) {
    return (
        <Container>
            <div>
                <Title>Teknisk spesifikasjon</Title>
                <Ul>
                    {
                        product.product.technicSpecification.map(sentence => (
                            <Li key={sentence[0] + sentence[8]}>
                                { sentence}
                            </Li>
                        ))
                    }
                </Ul>
            </div>
            <div>
                <Title>Standar utstyr</Title>
                <Ul>
                    {
                        product.product.standardEquipment.map(sentence => (
                            <Li key={sentence[0] + sentence[8]}>
                                { sentence}
                            </Li>
                        ))
                    }
                </Ul>
            </div>
            <div>
                <Title>Tilleggs utstyr</Title>
                <Ul>
                    {
                        product.product.extra.map(sentence => (
                            <Li key={sentence[0] + sentence[8]}>
                                { sentence}
                            </Li>
                        ))
                    }
                </Ul>
            </div>
        </Container>
    )
}

export default LongText
