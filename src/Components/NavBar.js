import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Navi = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid={'xl'} >
                <Navbar.Brand>Brandon Garcia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link >Home</Nav.Link>
                        <Nav.Link >About Me</Nav.Link>
                        <Nav.Link >Projects</Nav.Link>
                        <Nav.Link >Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navi
