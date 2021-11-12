import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useHistory, useLocation } from "react-router-dom"
import useAuth from '../../../hooks/useAuth'

const Register = () => {
    const [registerData, setregisterData] = useState({})
    const { registerUser, signInWithGoogle } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newregisterData = { ...registerData }
        newregisterData[field] = value
        setregisterData(newregisterData)
    }
    const handleRegister = e => {
        e.preventDefault()
        registerUser(registerData.email, registerData.password, registerData.name, history)
        e.target.reset()
    }
    return (
        <div>
            <h1 className="login-page-logo">Droneahsan</h1>
            <h3 className="login-page-title">Register to use Droneahsan for <strong style={{ color: "#69a6ed" }}>free</strong></h3>
            <div className="login-form">
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control onBlur={handleOnBlur} name="name" type="text" placeholder="Enter full name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onBlur={handleOnBlur} name="email" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handleOnBlur} name="password" type="password" placeholder="Enter password" />
                    </Form.Group>
                    <input type="submit" value="REGISTER" />
                    <Form.Group className="mb-3 seperator" controlId="formBasicPassword">
                        <div className="devider-1"></div>
                        <span>OR</span>
                        <div className="devider-1"></div>
                    </Form.Group>
                </Form>
                <button onClick={() => signInWithGoogle(location, history)} className="google-login-btn">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fillRule="evenodd"><path d="M22.1 12.227c0-.709-.064-1.39-.182-2.045H12.5v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4" /><path d="M12.5 22c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H3.564v2.59A9.996 9.996 0 0012.5 22z" fill="#34A853" /><path d="M6.905 13.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V7.51H3.564A9.996 9.996 0 002.5 12c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05" /><path d="M12.5 5.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C17.459 2.99 15.195 2 12.5 2 8.59 2 5.21 4.24 3.564 7.51l3.34 2.59c.787-2.364 2.991-4.123 5.596-4.123z" fill="#EA4335" /></g></svg></div>
                    <span>Continue with Google</span>
                </button>
            </div>
            <p className="my-3">Already have an account? <Link to="/login">Log in</Link></p>
        </div>
    )
}

export default Register
