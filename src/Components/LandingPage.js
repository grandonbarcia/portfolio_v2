import React from 'react'
import { Row, Col, Button } from 'react-bootstrap/'
import { Browser } from 'react-kawaii'
import Resume from '../img/Brandon_Garcia_Resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../App.css';

const LandingPage = () => {
    return (
        <section id="home" >
            <Row className='justify-content-md-center' >
                <Col xs={12} md={10} lg={10} xl={12} className='main__title'>
                    <Row className="main__text">
                        <Col>
                            Hi, I'm Brandon
                        </Col>
                    </Row>
                    <Row className="main__text">
                        <Col>
                            Front-End Developer
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 style={{ color: 'gray' }}>I like solving problems one app at a time. </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="sub__text" xl={8}>
                            <p>Ambitious software developer specializing in MERN technologies. Passionate about technology, learning new things, and growing as a developer. </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={5} sm={2} md={3} lg={2} xl={2}>
                            <Button as={AnchorLink} variant={'outline-primary'} href="#contact">Let's Chat</Button>
                        </Col>
                        <Col xs={3} sm={2} md={3} lg={2} xl={2}>
                            <a href={Resume} target='_blank' rel='noopener noreferrer'><Button variant={'outline-danger'}>Resume</Button></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section >
    )
}

export default LandingPage
