import React, { useState } from 'react'
import { Col, Form } from 'react-bootstrap'

const AddProduct = () => {
    const [product, setProduct] = useState({})
    const handleonChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newProduct = {...product}
        newProduct[field] = value
        setProduct(newProduct)
    }

    const handleAddProduct = e => {
        e.preventDefault()
        fetch('http://localhost:5000/products',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Product Add Successfully!')
                e.target.reset()
            }
        })
    }
    return (
        <div>
            <Form onSubmit={handleAddProduct} autocomplete="off" style={{ width: "90%", boxShadow: "none" }} className="login-form">
                <Form.Group className="mb-3" as={Col} controlId="formGridName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control required onChange={handleonChange} name="name" type="text" placeholder="Enter product name" />
                </Form.Group>
                <Form.Group className="mb-3" as={Col} controlId="formGridPrice">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control required onChange={handleonChange} name="price" type="number" min="1" placeholder="Enter product price" />
                </Form.Group>
                <Form.Group className="mb-3" as={Col} controlId="formGridPhoto">
                    <Form.Label>Product Photo URL</Form.Label>
                    <Form.Control required onChange={handleonChange} name="img_url" type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control required onChange={handleonChange} name="description" placeholder="Enter Description" as="textarea" rows={3} />
                </Form.Group>
                <input type="submit" value="ADD NEW PRODUCT" />
            </Form>
        </div>
    )
}

export default AddProduct
