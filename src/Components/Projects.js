import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap/'
import blank_pic from '../img/blank_profile.png'
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
                            <Card className="mx-auto" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={blank_pic} />
                                <Card.Body>
                                    <Card.Title>Covid 19 Tracker </Card.Title>
                                    <Card.Text>
                                        Outline of current Covid 19 climate within the United States
                                    </Card.Text>

                                    <Row className="justify-content-end text-center" noGutters={true}>
                                        <Col xl={2}>
                                            <AiOutlineGithub size={24} />
                                        </Col>
                                        <Col xl={2} >
                                            <HiOutlineDesktopComputer size={24} />
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col >
                            <Card className="mx-auto" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={blank_pic} />
                                <Card.Body>
                                    <Card.Title>Instagram Clone</Card.Title>
                                    <Card.Text>
                                        A dummy clone of one the most popular platforms
                                </Card.Text>

                                    <Row className="justify-content-end text-center" noGutters={true}>
                                        <Col xl={2}>
                                            <AiOutlineGithub size={24} />
                                        </Col>
                                        <Col xl={2} >
                                            <HiOutlineDesktopComputer size={24} />
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="mx-auto" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={blank_pic} />
                                <Card.Body>
                                    <Card.Title>Typing Test </Card.Title>
                                    <Card.Text>
                                        Level up your typing skills with this app.
                                </Card.Text>
                                    <Row className="justify-content-end text-center" noGutters={true}>
                                        <Col xl={2}>
                                            <AiOutlineGithub size={24} />
                                        </Col>
                                        <Col xl={2} >
                                            <HiOutlineDesktopComputer size={24} />
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
