import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';

const Myorder = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    const handleCancelOrder = (id) => {
        const procced = window.confirm('Are you sure, You want to delete?')
        if (procced) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully deleted!')
                        const remeiningOrders = orders.filter(orders => orders._id !== id)
                        setOrders(remeiningOrders)
                    }
                })
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    orders.map(order => <Grid className="text-start bg-white p-5" item xs={4} sm={4} md={6} key={order._id}>
                        <div className="d-flex justify-content-between">
                            <img style={{ width: "100px" }} src={order.product.img_url} alt="" />
                            {
                                order.status === 'Pending' ? <Button disabled sx={{ height: "fit-content" }} variant="outlined" color="error">{order.status}</Button> : <Button disabled sx={{ height: "fit-content" }} variant="outlined" color="error">{order.status}</Button>
                            }
                        </div>
                        <h5 className="my-3">{order.product.name}</h5>
                        <p>{order.product.description}</p>
                        <Button onClick={() => handleCancelOrder(order._id)} sx={{ height: "fit-content", width: "100%" }} variant="outlined" color="error">cancel order</Button>
                    </Grid>)
                }
            </Grid>
        </Box>
    )
}

export default Myorder
