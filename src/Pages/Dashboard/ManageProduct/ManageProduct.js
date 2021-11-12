import React from 'react'
import { Button } from '@mui/material';
import { Row, Container, Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

const ManageProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://whispering-woodland-67196.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDeleteProduct = id => {
        const procced = window.confirm('Are you sure, You want to delete?')
        if (procced) {
            fetch(`https://whispering-woodland-67196.herokuapp.com/product/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully deleted!')
                        const remainingProducts = products.filter(product => product._id !== id)
                        setProducts(remainingProducts)
                    }
                })
        }
    }
    return (
        <div style={{ padding: "20px 0", backgroundColor: "#f8f8f8" }}>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        products.map(product => <Col key={product.id}>
                            <Card className="border-0">
                                <Card.Img style={{ height: "203px", padding: "10px" }} variant="top" src={product.img_url} />
                                <Card.Body className="text-start">
                                    <Card.Title>{product.name}</Card.Title>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0">${product.price}</h5>
                                        <Button onClick={() => handleDeleteProduct(product._id)} variant="outlined" color="error">
                                            delete
                                        </Button>
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

export default ManageProduct
