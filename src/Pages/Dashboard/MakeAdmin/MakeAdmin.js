import React, { useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnChange = e => {
        setEmail(e.target.value);
    }
    const handleMakeAdmin = e => {
        const user = { email };
        fetch('https://whispering-woodland-67196.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Make Admin Successfully!')
                    e.target.reset()
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <Form onSubmit={handleMakeAdmin}>
                <Row className="align-items-center">
                    <Col sm={5} className="my-1">
                        <Form.Label htmlFor="inlineFormEmail" visuallyHidden>
                            Email
                        </Form.Label>
                        <Form.Control onChange={handleOnChange} id="inlineFormEmail" placeholder="Enter email" />
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Button type="submit">Make Admin</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default MakeAdmin
