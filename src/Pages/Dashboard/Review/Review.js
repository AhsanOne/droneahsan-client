import React from 'react'
import { useState } from 'react'
import { Col, Form } from 'react-bootstrap'
import useAuth from '../../../hooks/useAuth'

const Review = () => {
    const {user} = useAuth()
    const [review, setReview] = useState({})
    const handleonChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newReview = {...review}
        newReview[field] = value
        setReview(newReview)
    }
    
    const handleSendReview = e => {
        review['img_url'] = user.photoURL
        review['name'] = user.displayName
        e.preventDefault()
        
        fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Congratulation!')
                e.target.reset()
            }
        })
    }
    return (
        <div>
            <Form onSubmit={handleSendReview} autocomplete="off" style={{ width: "90%", boxShadow: "none" }} className="login-form">
                <Form.Group className="mb-3" as={Col} controlId="formGridTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control required onChange={handleonChange} name="title" type="text" placeholder="Write title here" />
                </Form.Group>
                <Form.Group className="mb-3" as={Col} controlId="formGridRating">
                    <Form.Label>Rating Star Mark</Form.Label>
                    <Form.Control required onChange={handleonChange} name="rating" min="0" max="5" type="number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Review</Form.Label>
                    <Form.Control required  onChange={handleonChange} name="review" placeholder="Write review..." as="textarea" rows={3} />
                </Form.Group>
                <input type="submit" value="SEND" />
            </Form>
        </div>
    )
}

export default Review
