import React from 'react'
import { Card } from 'react-bootstrap'

 const Product = ({product}) => {
    return (
        <Card className="my-3 p-3 rounded">
            <a>
                <Card.Img src={product.image} variant="top" />
            </a>

        </Card>
    )
}

export default Product