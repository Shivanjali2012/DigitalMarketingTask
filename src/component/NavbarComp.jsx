import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import logo from "../assets/logoNew.png"

const NavbarComp = () => {
    return (
        <Navbar expand="xl" className="  navbaComp">
            <Container fluid>
                <Navbar.Brand href="#home" className='logo'><img src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Services</Nav.Link> 
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link> 
                        <Nav.Link href="#home">Contact Us</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComp