import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import '../App.css';
const Contact = () => {
    return (
        <section>
            <Row>
                <Col>
                    <Row className="text-center title">
                        <Col>
                            <h2>Contact</h2>
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
