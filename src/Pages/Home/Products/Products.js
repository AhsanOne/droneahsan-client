import React from 'react'
import Product from '../Product/Product';
import { Typography } from '@mui/material';
import { Row, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://whispering-woodland-67196.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div style={{ padding: "81px 0", backgroundColor: "#f8f8f8" }}>
            <Container>
                <Typography sx={{ mb: 10 }}>
                    <h5>Featured products</h5>
                    <h2>DRONE <span style={{ color: "#f16232" }}>PRODUCTS</span></h2>
                </Typography>
                <Row xs={1} md={3} className="g-4 mt-5">
                    {
                        products.slice(4, 10).map(product => <Product
                            key={product.name}
                            product={product}
                        ></Product>)
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Products
