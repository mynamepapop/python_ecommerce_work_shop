import React from 'react'
import { Row, Col } from 'react-bootstrap'

// import components
import Product from '../components/Product'

// import Product
import products from '../products'

function HomeScreens() {
  return (
    <div>
        <h1>Latest Product</h1>
        <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}/>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreens