import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'


const Product = (props) => {
    const { name, price, description, img_url } = props.product
    return (
        <Col>
            <Card className="border-0">
                <Card.Img style={{height:"203px", padding:"10px"}} variant="top" src={img_url} />
                <Card.Body className="text-start">
                    <Card.Title className="text-primary">{name}</Card.Title>
                    <Card.Text className="text-main">
                        {description.slice(0, 90)}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">${price}</h5>
                        <Button variant="primary">Primary</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Product
