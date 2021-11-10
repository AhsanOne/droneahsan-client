import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row xs={1} md={2} lg={3}>
                    <Col className="mt-4">
                        <h5 className="logo text-white" href="#home">Droneahsan</h5>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link className="ps-0" href="/home">Terms and condition</Nav.Link>
                            <Nav.Link className="ps-0" eventKey="link-1">Privacy policy</Nav.Link>
                            <Nav.Link className="ps-0" eventKey="link-2">About</Nav.Link>
                        </Nav>
                    </Col>
                    <Col className="mt-4">
                        <h5 className="text-white">HELP</h5>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link className="ps-0" href="/home">Help center?</Nav.Link>
                            <Nav.Link className="ps-0" eventKey="link-1">Authors</Nav.Link>
                        </Nav>
                    </Col>
                    <Col className="mt-4 social-icon">
                        <h5 className="text-white">FOLLOW US ON</h5>
                        <Nav defaultActiveKey="/home" as="ul">
                        <Nav.Link className="ps-0" href="/home"><FacebookIcon /></Nav.Link>
                            <Nav.Link className="ps-0" eventKey="link-1"><TwitterIcon/></Nav.Link>
                            <Nav.Link className="ps-0" eventKey="link-2"><InstagramIcon/></Nav.Link>
                        </Nav>
                    </Col>
                </Row>
                <p className="text-white mt-4">Copyright &copy; 2021 All rights reserved</p>
            </Container>
        </div>
    )
}

export default Footer
