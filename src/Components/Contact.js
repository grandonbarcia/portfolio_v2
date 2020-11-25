import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import '../App.css';
const Contact = () => {
    return (
        <section>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <h2>Let's Collaborate</h2>
                        </Col>
                        <Col>
                            <h3>Say Hi</h3>
                            <Form>
                                <Form.Group>

                                    <Form.Control type="name" placeholder="name" />
                                </Form.Group>
                                <Form.Group >

                                    <Form.Control type="subject" placeholder="subject" />
                                </Form.Group>

                                <Form.Group >

                                    <Form.Control type="subject" placeholder="subject" />
                                </Form.Group>

                                <Form.Group >

                                    <Form.Control as="textarea" placeholder="Message" rows={3} />
                                </Form.Group>
                            </Form>
                            <Button primary={"variant"}>Send </Button>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xl={1} className="text-center">
                            <AiFillGithub size={32} />
                        </Col >
                        <Col xl={1} className="text-center">
                            <AiFillLinkedin size={32} />
                        </Col>
                        <Col xl={1} className="text-center">
                            <AiOutlineMail size={32} />
                        </Col>
                    </Row>
                </Col>
            </Row >
        </section>
    )
}

export default Contact
