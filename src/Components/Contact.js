import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { SpeechBubble } from 'react-kawaii'
import SayHi from './SayHi'
import ThankYou from './ThankYou'
import useForm from '../Hooks/useForm'
import '../App.css';

const URL = 'https://pure-tor-22612.herokuapp.com/'



const Contact = () => {

    const { handleChange, messageInput, isFilled } = useForm();
    const [isFormSending, setIsFormSending] = useState(false);
    const [formSentSuccess, setFormSentSuccess] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const [isError, showError] = useState(false)
    const handleMessage = async () => {
        setIsFormSending(true);
        console.log(messageInput);
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(messageInput),
            }
            let response = await fetch(URL, requestOptions);
            let data = await response.json();
            if (data.isValid) {
                setFormSentSuccess(true);

            } else {
                showError(true);
                setErrorMessage(data.message)
                setIsFormSending(false);
            }

        } catch (error) {
            console.log(error)
        }
    }



    return (
        <section id='contact'>
            <Row className="justify-content-md-center " >
                <Col sm={{ span: 10, offset: 1 }} md={10} lg={{ span: 10, offset: 0 }} xl={{ span: 10, offset: 0 }} >
                    <Row>
                        <Col xs={12} sm={{ span: 10, offset: 3 }} md={{ span: 9, offset: 0 }} lg={{ span: 12, offset: 0 }} xl={{ span: 12, offset: 0 }}>
                            <h2 className='section__title'>Let's Collaborate</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} lg={7} xl={7}>
                            <Row>
                                <Col xs={12} sm={{ span: 7, offset: 3 }} md={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0 }} xl={{ span: 12, offset: 0 }}>
                                    <div className='email'>grandonleebarcia@gmail.com</div>
                                </Col>
                                <Col className="my-auto" xl={12}>
                                    {/* <SpeechBubble size={150} mood="happy" color="#83D1FB" /> */}
                                </Col>
                            </Row>

                            <Row className="align-items-end contact__row">
                                <Col xs={{ span: 6, offset: 0 }} sm={{ span: 5, offset: 1 }} md={{ span: 5, offset: 0 }} lg={{ span: 6, offset: 0 }} xl={{ span: 6, offset: 0 }} >
                                    <Row>
                                        <Col className="sub__title">
                                            <h5>Find Me</h5>
                                        </Col>
                                    </Row>
                                    <Row className="contact__links">
                                        <Col xs={4} sm={3} md={3} lg={2} xl={2} className="text-center">
                                            <a href="https://github.com/grandonbarcia" target="_blank" rel="noreferrer"><AiFillGithub size={32} /></a>
                                        </Col >
                                        <Col xs={4} sm={3} md={3} lg={2} xl={2} className="text-center">
                                            <a href="https://www.linkedin.com/in/brandon-garcia-54708516b/" target="_blank" rel="noreferrer"><AiFillLinkedin size={32} /></a>
                                        </Col>
                                        <Col xs={4} sm={3} md={3} lg={2} xl={2} className="text-center">
                                            <a href="mailto:grandonleebarcia@gmail.com"><AiOutlineMail size={32} /></a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={6} sm={6} md={7} lg={6} xl={6}>
                                    <Row>
                                        <Col>
                                            <h5>San Jose, California</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="contact__number">
                                            (352) 262-7435
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        {formSentSuccess ? <ThankYou /> : <SayHi handleChange={handleChange} isFormSending={isFormSending} handleMessage={handleMessage} isError={isError} errorMessage={errorMessage} />}

                    </Row>
                </Col>
            </Row>
        </section>
    )
}

export default Contact
