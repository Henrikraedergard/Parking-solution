import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    background-color: white;
    position: relative;
    width: 700px;
    margin: 0px auto;
    border-radius: 6px;
    padding: 40px;
    box-shadow: 1px 1px 10px 5px rgb(200, 200, 200);
    margin-top: 100px;

    @media only screen and (max-width: 950px) {
        font-size: 0.7em;
        width: 400px;
    }
`

const Label = styled.label`
    color: rgb(250, 50, 50);
    font-size: 1.6em;
`

const Input = styled.input`
    font-size: 1.5em;
    padding: 5px;
    margin: 5px;
    border: none;
    // box-shadow: 0px 0px 3px 0.6px rgb(139, 139, 139);
    border: 1px solid rgba(139, 139, 139, 0.5);
`

const FileInput = styled.input`
    font-size: 1.5em;
    padding: 5px;
    margin: 5px;
    display: flex;
    align-items: center;
`

const FlexContainer = styled.div`
    display: flex;
    width: 100%;
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;
`

const Optional = styled.span`
    color: rgb(75, 75, 75);
    font-size: 0.7em;
`

const Button = styled.button`
    text-align: center;
    align-items: center;
    border: 2px solid rgb(250, 50, 50);
    padding: 8px;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 20px;
    color:rgb(250, 50, 50);
    display: block;
    width: calc(100% - 25px);
    transition: 200ms;
    font-size: 1.6em;

    &:hover {
        background-color: rgb(250, 50, 50);
        color: white;
        transition: 200ms;
    }
`

const Textarea = styled.textarea`
    max-width: 97%;
    height: 120px;
    font-size: 1.5em;
    padding: 5px;
    margin: 5px;
    border: none;
    // box-shadow: 0px 0px 3px 0.6px rgb(139, 139, 139);
    border: 1px solid rgba(139, 139, 139, 0.5);
`

function Contact() {
    return (
        <>
            <Form action="https://formsubmit.co/post@parkingsolution.no" enctype="multipart/form-data" method="POST">
                <FlexContainer>
                    <Div>
                        <Label htmlFor="firstname">Fornavn</Label>
                        <Input required placeholder="Skriv her..." type="text" name="Fornavn" id="firstname" />
                    </Div>
                    <Div>
                        <Label htmlFor="lastname">Etternavn</Label>
                        <Input required placeholder="Skriv her..." type="text" name="Etternavn" id="lastname" />
                    </Div>
                </FlexContainer>
                <Div>
                    <Label htmlFor="email">Epost</Label>
                    <Input required placeholder="Skriv her..." type="email" id="email" name="Epost" />
                </Div>
                {/* <Div>
                    <Label htmlFor="address">Prosjekt adresse</Label>
                    <Input required placeholder="Skriv her..." type="text" name="Prosjekt adresse" id="address" />
                </Div>
                <Div>
                    <Label htmlFor="parking-spaces">Ønsket antall parkeringsplasser <Optional>(Valgfritt)</Optional></Label>
                    <Input placeholder="Skriv her..." type="number" name="Antall parkeringsplasser"
                        id="parking-spaces" />
                </Div> */}
                <Div>
                    <Label htmlFor="message">Melding</Label>
                    {/* <Input placeholder="legg til en melding..." type="text" id="message" name="Kommentar" /> */}
                    <Textarea placeholder="legg til en melding her..." name="message" cols="40" rows="5"></Textarea>
                </Div>

                {/* <Div>
                    <Label htmlFor="attachment">Legg ved vedlegg <Optional>(Valgfritt)</Optional></Label>
                    <FileInput type="file" id="attachment" name="Vedlegg" />
                </Div> */}
                <input type="hidden" name="_subject" value="Ny kunde! (Gjennom nettsiden)" />
                <input type="hidden" name="_next" value="../thanks" />
                <Button id="send-contact" type="submit">Send inn</Button>
            </Form>
        </>
    )
}

export default Contact
