import React from 'react'

function Banner(product) {
    return (
        <>
            <img src={`../media/models/${product.product.url}/image-1-large.jpg`} alt={'Bilde av systemet'}/>
            <div>
                <h1> {product.product.name} </h1>
                <p> {product.product.shortText} </p>
            </div>
        </>
    )
}

export default Banner
