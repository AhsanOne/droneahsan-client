import React from 'react'
import Product from '../Product/Product';
import { Typography } from '@mui/material';
import { Row, Container } from 'react-bootstrap';

const products = [
    {
        name: "DJI. DJI is one of the top consumer drone",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi officiis explicabo enim laboriosam eius modi aliquid sed. Doloremque consequatur, consequuntur labore inventore sunt quaerat magni aspernatur tempore amet quibusdam eveniet.",
        img_url: "https://i.ibb.co/YhmHs5s/drone-7.png",
        price: 890,
    },
    {
        name: "Parrot is one of the top consumer drone",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi officiis explicabo enim laboriosam eius modi aliquid sed. Doloremque consequatur, consequuntur labore inventore sunt quaerat magni aspernatur tempore amet quibusdam eveniet.",
        img_url: "https://i.ibb.co/hfbFcFF/drone-8.png",
        price: 824,
    },
    {
        name: "Yuneec is one of the top consumer drone",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi officiis explicabo enim laboriosam eius modi aliquid sed. Doloremque consequatur, consequuntur labore inventore sunt quaerat magni aspernatur tempore amet quibusdam eveniet.",
        img_url: "https://i.ibb.co/0chD8xG/drone-9.png",
        price: 981,
    },
    {
        name: "Kespry is one of the top consumer drone",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi officiis explicabo enim laboriosam eius modi aliquid sed. Doloremque consequatur, consequuntur labore inventore sunt quaerat magni aspernatur tempore amet quibusdam eveniet.",
        img_url: "https://i.ibb.co/JkcZWYD/drone-1.png",
        price: 1050,
    },
    {
        name: "Autel Robotics is one of the top consumer drone",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi officiis explicabo enim laboriosam eius modi aliquid sed. Doloremque consequatur, consequuntur labore inventore sunt quaerat magni aspernatur tempore amet quibusdam eveniet.",
        img_url: "https://i.ibb.co/kKt9TZ9/drone-4.png",
        price: 870,
    },
    {
        name: "Skydio is one of the top consumer drone",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi officiis explicabo enim laboriosam eius modi aliquid sed. Doloremque consequatur, consequuntur labore inventore sunt quaerat magni aspernatur tempore amet quibusdam eveniet.",
        img_url: "https://i.ibb.co/M96KHRt/drone-2.png",
        price: 1190,
    },
]

const Products = () => {
    return (
        <div style={{ padding: "81px 0", backgroundColor:"#f8f8f8" }}>
            <Container>
                <Typography sx={{ mb: 10 }}>
                    <h5>Featured products</h5>
                    <h2>DRONE <span className="text-primary">PRODUCTS</span></h2>
                </Typography>
                <Row xs={1} md={3} className="g-4 mt-5">
                    {
                        products.map(product => <Product
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
