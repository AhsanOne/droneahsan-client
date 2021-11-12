import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import Rating from 'react-rating'
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Container style={{ marginTop: "81px" }}>
            <Typography sx={{ mb: 10 }}>
                <h5>Welcome to my personal presentation</h5>
                <h2>WHAT OUR <span style={{color:"#f16232"}}>CLIENTS SAY</span></h2>
            </Typography>
            <Carousel className="bg-light">
                {
                    reviews.map(review => <Carousel.Item key={review._id} className="px-md-5 px-0 py-3">
                        <img
                            style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }}
                            src={review.img_url}
                            alt="Third slide"
                        />
                        <div>
                            <h3 className="my-3">{review.title}</h3>
                            <p>{review.review}</p>
                            <div>
                                <Rating
                                    initialRating={review.rating}
                                    emptySymbol="fa fa-star-o fa-2x ratings"
                                    fullSymbol="fa fa-star fa-2x ratings"
                                    fractions={2}
                                    readonly
                                />
                            </div>
                            <FormatQuoteIcon />
                            <h5 className="mt-3">{review.name}</h5>
                        </div>
                    </Carousel.Item>)
                }
            </Carousel>
        </Container>
    )
}

export default Reviews
