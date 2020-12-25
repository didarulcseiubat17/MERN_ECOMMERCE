import React from 'react'
import { Col, Row } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'

function Homescreen() {
    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {
                    products.map( (product)=>(
                        <Col sm={12} md={6} lg={4} xl={3}>
                            
                            <Product product={product} />
                            
                        </Col>

                    )

                    )
                }
            </Row>
        </div>
    )
}

export default Homescreen
