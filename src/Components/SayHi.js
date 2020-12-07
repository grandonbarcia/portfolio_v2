import React from 'react'
import { Row, Col, Form, Button, Alert } from 'react-bootstrap'

const SayHi = ({ handleChange, handleMessage, isFormSending, errorMessage, isError }) => {

    console.log(isFormSending);

    const SendButton = () => {
        return (<Button onClick={handleMessage} variant="primary" type="button">Send</Button >)
    }

    const LoadButton = () => {

        return (<Button class="btn btn-primary" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span style={{ marginLeft: '5px' }}>Loading...</span>
        </Button>)

    }

    return (
        <Col className="SayHi" sm={{ span: 9, offset: 2 }} md={{ span: 6, offset: 0 }} lg={{ span: 5, offset: 0 }} xl={{ span: 5, offset: 0 }}>
            <Row>
                <Col>
                    <h4>Say Hi</h4>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Control onChange={handleChange} type="name" name="name" placeholder="Name" disabled={isFormSending} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group >
                                    <Form.Control onChange={handleChange} type="subject" name="subject" placeholder="Subject" disabled={isFormSending} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group >
                                    <Form.Control onChange={handleChange} type="company" name="company" placeholder="Company" disabled={isFormSending} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group >
                                    <Form.Control onChange={handleChange} type="email" name="email" placeholder="Email" disabled={isFormSending} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group >
                            <Form.Control onChange={handleChange} as="textarea" placeholder="Message" name="message" rows={3} disabled={isFormSending} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    {isError ? <Alert variant={'danger'}>{errorMessage}</Alert> : ''}
                </Col>
            </Row>
            <Row>
                <Col>
                    {isFormSending ? <LoadButton /> : <SendButton />}
                </Col>
            </Row>
        </Col>
    )
}

export default SayHi
