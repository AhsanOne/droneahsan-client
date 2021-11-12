import { Button, Container } from '@mui/material'
import React from 'react'
import paralaxxBg from '../../../images/paralaxxBg.jpg'
import {Link} from 'react-router-dom'

const ShopStoreBanner = () => {
    return (
        <div style={{
            height: "400px",
            backgroundImage: `url(${paralaxxBg})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundAttachment:"fixed"
}}>
    <Container className="d-flex align-items-center h-100">
        <div className="text-start text-white">
            <h1>SHOP OUR STORE</h1>
            <h2 className="mb-4">Camera Drone Usa SellsTop Name Brand Drones</h2>
            <Link to="/allproducts"><Button size="large" variant="outlined" color="error" >shop now</Button></Link>
        </div>
    </Container>
        </div >
    )
}

export default ShopStoreBanner
