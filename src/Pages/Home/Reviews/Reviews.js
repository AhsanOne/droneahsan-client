import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Typography } from '@mui/material';

const products = [
    {
        name: "Lavina Wilderman",
        title: "Trustworthy and powerful",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi officiis explicabo enim laboriosam eius modi aliquid sed. Doloremque consequatur, consequuntur labore inventore sunt quaerat magni aspernatur tempore amet quibusdam eveniet.",
        img_url: "https://i.ibb.co/ZxcPsSV/doc-6.jpg",
    },
    {
        name: "Lavina Wilderman",
        title: "Trustworthy and powerful",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi officiis explicabo enim laboriosam eius modi aliquid sed. Doloremque consequatur, consequuntur labore inventore sunt quaerat magni aspernatur tempore amet quibusdam eveniet.",
        img_url: "https://i.ibb.co/ZxcPsSV/doc-6.jpg",
    },
    {
        name: "Lavina Wilderman",
        title: "Trustworthy and powerful",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi officiis explicabo enim laboriosam eius modi aliquid sed. Doloremque consequatur, consequuntur labore inventore sunt quaerat magni aspernatur tempore amet quibusdam eveniet.",
        img_url: "https://i.ibb.co/ZxcPsSV/doc-6.jpg",
    },
]

const Reviews = () => {
    return (
        <Container style={{marginTop:"81px"}}>
            <Typography sx={{mb:10}}>
                <h5>Welcome to my personal presentation</h5>
                <h2>WHAT OUR <span className="text-primary">CLIENTS SAY</span></h2>
            </Typography>
            <Carousel className="bg-light">
                <Carousel.Item className="px-md-5 px-0 py-3">
                    <img
                        style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }}
                        src={products[0].img_url}
                        alt="Third slide"
                    />
                    <div>
                        <h3 className="my-3">Trustworthy and powerful</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, consequuntur adipisci numquam doloribus velit quibusdam laborum nostrum corporis. Facere perferendis ipsa atque illum accusamus asperiores ullam animi rem excepturi ea!</p>
                        <FormatQuoteIcon />
                        <h5 className="mt-3">Lavina Wilderman</h5>
                    </div>
                </Carousel.Item>
                <Carousel.Item  className="px-md-5 px-0 py-3" >
                    <img
                        style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }}
                        src={products[0].img_url}
                        alt="Third slide"
                    />
                    <div>
                        <h3 className="my-3">Trustworthy and powerful</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, consequuntur adipisci numquam doloribus velit quibusdam laborum nostrum corporis. Facere perferendis ipsa atque illum accusamus asperiores ullam animi rem excepturi ea!</p>
                        <FormatQuoteIcon />
                        <h5 className="mt-3">Lavina Wilderman</h5>
                    </div>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Reviews
