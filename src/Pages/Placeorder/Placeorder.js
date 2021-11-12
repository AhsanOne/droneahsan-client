import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';


const Placeorder = () => {
    const {user} = useAuth()
    const { id } = useParams()
    const [orderData, setOrderData] = useState()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleonChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newOrderData = { ...orderData }
        newOrderData[field] = value
        setOrderData(newOrderData)
    }

    const handleOnSelect = e => {
        const select = e.target
        const option = select.options[select.selectedIndex].innerText;
        orderData['state'] = option      
    }

    const handlePlaceOrder = e => {
        e.preventDefault()
        orderData['status'] = 'Pending'
        orderData['product'] = product
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(orderData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Order Successfull!')
                e.target.reset()
            }
        })
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid sx={{ p: 5 }} item xs={4} sm={8} md={6}>
                    <div>
                        <img style={{ width: "80%", maxHeight: "312px" }} src={product.img_url} alt="" />
                        <div className="text-start">
                            <h3 className="my-4">{product.name}</h3>
                            <p className="mb-3">{product.description}</p>
                        </div>
                    </div>
                </Grid>
                <Grid sx={{ backgroundColor: "#f8f8f8", py: 5 }} item xs={4} sm={8} md={6}>
                    <div className="text-start">
                        <Form onSubmit={handlePlaceOrder} autocomplete="off" style={{ width: "90%", boxShadow: "none" }} className="login-form">
                            <Form.Group className="mb-3" as={Col} controlId="formGridName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control onChange={handleonChange} name="name" type="text" placeholder="Enter full name" />
                            </Form.Group>
                            <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={handleonChange} name="email" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control onChange={handleonChange} name="address" placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control onChange={handleonChange} name="city" placeholder="Enter city" />
                            </Form.Group>
                            <Row className="mb-3">

                                <Form.Group className="mb-3" as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select onChange={handleOnSelect} defaultValue="Bangladesh">
                                        <option>Bangladesh</option>
                                        <option>United State</option>
                                        <option>India</option>
                                        <option>Pakisthan</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3" as={Col} controlId="formGridZip">
                                    <Form.Label>Postal Code</Form.Label>
                                    <Form.Control onChange={handleonChange} name="postcode" placeholder="Enter postal code" />
                                </Form.Group>
                            </Row>
                            <input type="submit" value="PLACE ORDER" />
                        </Form>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Placeorder
