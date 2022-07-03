// React package
import React from 'react'

// Modules
import { Container, Row, Col } from 'react-bootstrap' 

function Footer() {
  return (
    <Container>
      <Row>
        <Col className='text-center py-3'>Copyright &copy; ProShop</Col>
      </Row>
    </Container>
  )
}

export default Footer