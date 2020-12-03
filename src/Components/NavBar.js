import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navi = () => {
    return (
        <Navbar bg="light" expand="lg" fixed='top'>
            <Container fluid={'xl'} >
                <Navbar.Brand>Brandon Garcia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link as={AnchorLink} offset='100' href="#about" >About Me</Nav.Link>
                        <Nav.Link as={AnchorLink} offset='150' href="#projects" >Projects</Nav.Link>
                        <Nav.Link as={AnchorLink} offset='100' href="#contact" >Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navi
