import React from 'react'
import { Row, Col, Card } from 'react-bootstrap/'
import CovidTracker from '../img/covid19.JPG'
import InstagramClone from '../img/instagram-clone.JPG'
import TypingTest from '../img/typing-test.JPG'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { AiOutlineGithub } from 'react-icons/ai'
import '../App.css';

const Projects = () => {
    return (
        <section id='projects'>
            <Row>
                <Col>
                    <Row className='title'>
                        <Col className="text-center">
                            <h2>Personal Projects</h2>
                        </Col>
                    </Row>
                    <Row className='justify-content-md-center'>
                        <Col >
                            <Card className="shadow-lg mx-auto" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={CovidTracker} />
                                <Card.Body>
                                    <Card.Title>Covid 19 Tracker </Card.Title>
                                    <Card.Text>
                                        Outline of current Covid 19 climate within the United States
                                    </Card.Text>
                                    <Row className="justify-content-end text-center" noGutters={true}>
                                        <Col xl={2}>
                                            <a href="https://github.com/grandonbarcia/covid-tracker" target='_blank' rel="noreferrer"><AiOutlineGithub size={24} /></a>
                                        </Col>
                                        <Col xl={2} >
                                            <a href="https://grandonbarcia.github.io/covid-tracker/" target='_blank' rel='norefferrer'><HiOutlineDesktopComputer size={24} /> </a>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col >
                            <Card className="shadow-lg mx-auto" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={InstagramClone} />
                                <Card.Body>
                                    <Card.Title>Instagram Clone</Card.Title>
                                    <Card.Text>
                                        A dummy clone of one the most popular platforms
                                </Card.Text>

                                    <Row className="justify-content-end text-center" noGutters={true}>
                                        <Col xl={2}>
                                            <a href='https://github.com/grandonbarcia/instagram-clone' target='_blank' rel="noreferrer"><AiOutlineGithub size={24} /></a>
                                        </Col>
                                        <Col xl={2} >
                                            <a href='https://pedantic-cray-446016.netlify.app/login' target='_blank' rel='noreferrer'><HiOutlineDesktopComputer size={24} /></a>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="shadow-lg mx-auto" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={TypingTest} />
                                <Card.Body>
                                    <Card.Title>Typing Test </Card.Title>
                                    <Card.Text>
                                        Level up your typing skills with this app.
                                </Card.Text>
                                    <Row className="justify-content-end text-center" noGutters={true}>
                                        <Col xl={2}>
                                            <a href='https://github.com/grandonbarcia/typing-test' target='_blank' rel="noreferrer"><AiOutlineGithub size={24} /></a>
                                        </Col>
                                        <Col xl={2} >
                                            <a href='https://vigilant-spence-6f0b27.netlify.app/' target='_blank' rel='noreferrer'><HiOutlineDesktopComputer size={24} /></a>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}

export default Projects
