import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navi = () => {
    return (
        <Navbar className="navBar" variant="dark" bg="dark" expand="sm" fixed='top'>
            <Container fluid={'md'}>
                <Navbar.Brand className="name">Brandon Garcia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link as={AnchorLink} offset='100' className="link" href="#about" >About Me</Nav.Link>
                        <Nav.Link as={AnchorLink} offset='150' className="link" href="#projects" >Projects</Nav.Link>
                        <Nav.Link as={AnchorLink} offset='100' className="link" href="#contact" >Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navi
