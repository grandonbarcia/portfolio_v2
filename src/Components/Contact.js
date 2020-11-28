import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { SpeechBubble } from 'react-kawaii'
import '../App.css';
const Contact = () => {
    return (
        <section id='contact'>
            <Row className="justify-content-md-center" >
                <Col xl={10}>
                    <Row>
                        <Col xl={12}>
                            <h2>Let's Collaborate</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={7}>
                            <Row className="h-100">
                                <Col>
                                    grandonleebarcia@gmail.com
                                </Col>
                                <Col className="my-auto" xl={12}>
                                    {/* <SpeechBubble size={150} mood="happy" color="#83D1FB" /> */}
                                </Col>
                            </Row>

                            <Row className="align-items-end">
                                <Col>
                                    <Row>
                                        <Col>
                                            <h5>Find Me</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl={2} className="text-center">
                                            <AiFillGithub size={32} />
                                        </Col >
                                        <Col xl={2} className="text-center">
                                            <AiFillLinkedin size={32} />
                                        </Col>
                                        <Col xl={2} className="text-center">
                                            <AiOutlineMail size={32} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col>
                                            <h5>San Jose, California</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            (352) 262-7435
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={5}>
                            <Row className="h-100">
                                <Col>
                                    <h4>Say Hi</h4>
                                    <Form className="h-75">
                                        <Row>
                                            <Col>
                                                <Form.Group>
                                                    <Form.Control type="name" placeholder="Name" />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group >
                                                    <Form.Control type="subject" placeholder="Subject" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group >
                                                    <Form.Control type="company" placeholder="Company" />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group >
                                                    <Form.Control type="email" placeholder="Email" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group >
                                            <Form.Control as="textarea" placeholder="Message" rows={3} />
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button primary={"variant"}>Send </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}

export default Contact
