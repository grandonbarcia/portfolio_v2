import React from 'react'
import { Row, Col } from 'react-bootstrap/'
import { Browser } from 'react-kawaii'
import '../App.css';

const LandingPage = () => {
    return (
        <section id="home" >
            <Row>
                <Col className='text-center'>
                    <h1>Hi, I'm Brandon</h1>
                    <h1>Software Developer </h1>
                    <h3 style={{ color: 'gray' }}>I like solving problems one app at a time. </h3>
                </Col>
            </Row>
        </section>
    )
}

export default LandingPage
