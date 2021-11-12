import React from 'react'
import { Button } from '@mui/material';
import { Row, Container, Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import Navigation from '../Shared/Navigation/Navigation';


const AllProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div >
            <Navigation></Navigation>
            <Container style={{marginTop:"110px"}}>
                <Row xs={1} md={3} className="g-4">
                    {
                        products.map(product => <Col key={product.id}>
                            <Card className="h-100">
                                <Card.Img style={{ height: "203px", padding: "10px" }} variant="top" src={product.img_url} />
                                <Card.Body className="text-start">
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text className="text-main">
                                        {product.description.slice(0, 51)}
                                    </Card.Text>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0">${product.price}</h5>
                                        <Link to={`/placeorder/${product._id}`}><Button variant="outlined" color="error">
                                            Buy Now
                                        </Button></Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div >
    )
}

export default AllProduct
