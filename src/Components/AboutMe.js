import React from 'react'
import { Row, Col } from 'react-bootstrap/'
import { Browser } from 'react-kawaii'
import '../App.css';
const AboutMe = () => {
    return (
        <section id='about'>
            <Row className='title'>
                <Col className='text-center' xl={{ span: 2, offset: 2 }} >
                    <h3>About Me</h3>
                </Col>
            </Row>
            <Row className='justify-content-md-center'>
                <Col className='text-center' xl={3}>
                    <Row>
                        <Col>
                            <Browser size={150} mood="happy" color="#61DDBC" />
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Row className="sub--text">
                        <Col>
                            Creating web apps has always fascinated me, that's why I decided to turn this interest into a career. Despite acquiring considerable knowledge, I do not take it for granted. I constantly try to develop, which allows me to level up my code and create more dynamic projects.
                         </Col>
                    </Row>
                    <Row className="sub--text">
                        <Col>
                            Here are some technologies I’ve been working with recently:
                        <Row>
                                <Col>
                                    Front-end:
                                <ul>
                                        <li>
                                            React
                                    </li>
                                        <li>
                                            Bootstrap
                                    </li>
                                    </ul>
                                </Col>
                                <Col>
                                    Back-end
                                <ul>
                                        <li>
                                            Node.js
                                    </li>
                                        <li>
                                            Express.js
                                    </li>
                                        <li>
                                            MongoDB
                                    </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}

export default AboutMe
