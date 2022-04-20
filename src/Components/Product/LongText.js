import React from 'react'

function LongText(product) {
    return (
        <div>
            <div>
                <h2>Teknisk spesifikasjon</h2>
                <ul>
                    {
                        product.product.technicSpecification.map(sentence => (
                        <li key={sentence[0] + sentence[8]}> 
                            { sentence } 
                        </li> 
                        ))
                    }
                </ul>
            </div>
            <div>
                <h2>Standar utstyr</h2>
                <ul></ul>
            </div>
            <div>
                <h2>Tilleggs utstyr</h2>
                <ul></ul>
            </div>
        </div>
    )
}

export default LongText
