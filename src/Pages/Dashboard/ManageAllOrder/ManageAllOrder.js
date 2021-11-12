import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth'

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([])
    const [updateOrder, setUpdateOrder] = useState({})
    const { user } = useAuth()

    useEffect(() => {
        fetch('http://localhost:5000/allorders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleUpdateStatus = order => {
        const updateOrder = order
        updateOrder.status = "approve"
        setUpdateOrder(updateOrder)
        fetch(`http://localhost:5000/orders/${order._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateOrder)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Approve Successfull!')
                    setUpdateOrder({})
                }
            })
    }

    return (
        <div>
            <Container className="my-order">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>email</th>
                            <th>Product</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="border-0 border-white">
                        {
                            orders.map(order => <tr key={order._id}>
                                <td className="d-flex justify-content-center align-items-center">
                                    <div>
                                        <img style={{ borderRadius: "50%" }} src={user.photoURL} alt="" />
                                    </div>
                                    <div className="ms-2">
                                        <h6 className="mb-0">{order.name}</h6>
                                    </div>
                                </td>
                                <td>{order.email}</td>
                                <td><img style={{ width: "100px", height: "100px" }} src={order.product.img_url} alt="" /></td>
                                <td>
                                    {
                                        order.status === 'Pending' ? <Button disabled sx={{ height: "fit-content" }} variant="outlined" color="error">{order.status}</Button> : <Button sx={{ height: "fit-content" }} variant="outlined" color="error">{order.status}</Button>
                                    }
                                </td>
                                <td>${order.product.price}</td>
                                <td>
                                    {
                                        order.status === 'Pending' ? <Button onClick={() => handleUpdateStatus(order)} sx={{ height: "fit-content" }} variant="outlined" color="error">approve</Button> : <Button disabled sx={{ height: "fit-content" }} variant="outlined" color="error">approve</Button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default ManageAllOrder
