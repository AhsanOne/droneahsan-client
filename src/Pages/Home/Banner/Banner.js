import { Button } from '@mui/material'
import React from 'react'
import { Container, Carousel, Col, Row } from 'react-bootstrap'
import './Banner.css'
import slide1 from '../../../images/slide-1.png'
import slide2 from '../../../images/slide-2.png'

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item style={{ backgroundColor: "#69a6ed", padding:"150px 0px"}}>
                <Container>
                    <Row xs={1} md={2} className="align-items-center justify-content-between">
                        <Col>
                            <div style={{ textAlign: "left" }}>
                                <h1 style={{fontSize:"81px"}} className="text-white">Elomus F18 Drone 3 Auto</h1>
                                <p className="text-white">Elomus F18 Drone 3 Auto Quadcopter UFO With 2Mp Wifi Camera</p>
                                <Button sx={{color:"white", border:"1px solid #ddd"}} variant="outlined">Explore</Button>
                            </div>
                        </Col>
                        <Col>
                            <img
                                className="w-100"
                                src={slide1}
                                alt="First slide"
                            />
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item style={{ backgroundColor: "#69a6ed", padding:"150px 0px" }}>
                <Container>
                    <Row xs={1} md={2} className="align-items-center justify-content-between">
                        <Col>
                            <div style={{ textAlign: "left" }}>
                                <h1 style={{fontSize:"81px"}} className="text-white">Elomus F18 Drone 3 Auto</h1>
                                <p className="text-white">Elomus F18 Drone 3 Auto Quadcopter UFO With 2Mp Wifi Camera</p>
                                <Button sx={{color:"white", border:"1px solid #ddd"}} variant="outlined">Explore</Button>
                            </div>
                        </Col>
                        <Col>
                            <img
                                className="w-100"
                                src={slide2}
                                alt="First slide"
                            />
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner
