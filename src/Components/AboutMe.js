import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Browser } from 'react-kawaii'
import '../App.css';
const AboutMe = () => {
    return (
        <>
            <section id='about'>

                <Row className='title justify-content-md-end'>
                    <Col sm={10} md={9} lg={6} xl={3} >
                        <h1>About Me</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="sub__text" md={4} lg={3} xl={6}>
                        Creating web apps has always fascinated me, that's why I decided to turn this interest into a career. Despite acquiring considerable knowledge, I do not take it for granted. I constantly try to develop, which allows me to level up my code and create more dynamic projects.
                    </Col>
                    <Col className="text-center" xs={4} sm={9} md={3} lg={2} xl={{ span: 4, offset: 2 }}>
                        <Browser size={250} mood="happy" color="#61DDBC" />
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default AboutMe
