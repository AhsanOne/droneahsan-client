import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { Button } from '@mui/material'
import {Link} from 'react-router-dom'

const Product = (props) => {
    const { name, price, description, img_url, _id } = props.product
    return (
        <Col>
            <Card className="h-100">
                <Card.Img style={{height:"203px", padding:"10px"}} variant="top" src={img_url} />
                <Card.Body className="text-start">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-main">
                        {description.slice(0, 51)}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">${price}</h5>
                        <Link to={`/placeorder/${_id}`}><Button color="error" variant="outlined">buy now</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Product
