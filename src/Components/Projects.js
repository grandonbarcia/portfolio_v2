import React from 'react'
import { Row, Col, Card, Image } from 'react-bootstrap/'
import HabitTracker from '../img/habit-tracker.JPG'
import BrainGames from '../img/brain-games.jpg'
import CovidTracker from '../img/covid19.JPG'
import InstagramClone from '../img/instagram-clone.JPG'
import TypingTest from '../img/typing-test.JPG'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { AiOutlineGithub } from 'react-icons/ai'
import '../App.css';

const Projects = () => {
    return (
        <section id='projects'>
            <Row className="justify-content-center">
                <Col lg={10} xl={12}>
                    <Row className='title'>
                        <Col className="text-center">
                            <h2>Personal Projects</h2>
                        </Col>
                    </Row>
                    <Row className='project__row'>
                        <Col lg={6} xl={5} className="my-auto">
                            <Row>
                                <Col>
                                    <h4 className="title__text">Brain Games </h4>
                                    <p className="sub__text">I had the idea to develop types of mini game that can test the users gaming basic skills. Inspired by HumanBenchmark, I built a reaction time game and a target practice game. Users are prompt with the rules and a start condition. After the game is finish, the user recieves their respective averages for each game. </p>
                                    <Row className="justify-content-end">
                                        <Col xs={2} sm={2} md={1} lg={2} xl={2}>
                                            <a href="https://github.com/grandonbarcia/mini-games" target='_blank' rel="noreferrer"><AiOutlineGithub size={32} /></a>
                                        </Col>
                                        <Col xs={2} sm={2} md={1} lg={2} xl={2} >
                                            <a href="https://focused-bassi-d58606.netlify.app/" target='_blank' rel='norefferrer'><HiOutlineDesktopComputer size={32} /> </a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='project__image__col' lg={6} xl={{ span: 6, offset: 1 }}>
                            <Image className="project__image shadow-lg " src={BrainGames} />
                        </Col >
                    </Row>
                    <Row className='project__row'>
                        <Col className='project__image__col' lg={6} xl={6}>
                            <Image className="project__image shadow-lg " src={CovidTracker} />
                        </Col >
                        <Col lg={6} xl={{ span: 5, offset: 1 }} className="my-auto">
                            <Row>
                                <Col>
                                    <h4 className="title__text">Covid-19 Tracker</h4>
                                    <p className="sub__text">I wanted to outline the current corona virus cases to see if it was getting better or not. That's why I built a simple web app that displays the latests statistics of the Covid-19 Pandemic. Take a look at the top countries that have been effected the most. Also, users can view trends of confirmed cases for the past 30 days in the United states. </p>

                                    <Row className="justify-content-end">
                                        <Col xs={2} sm={2} md={1} lg={2} xl={2}>
                                            <a href="https://github.com/grandonbarcia/covid-tracker" target='_blank' rel="noreferrer"><AiOutlineGithub size={32} /></a>
                                        </Col>
                                        <Col xs={2} sm={2} md={1} lg={2} xl={2} >
                                            <a href="https://grandonbarcia.github.io/covid-tracker/" target='_blank' rel='norefferrer'><HiOutlineDesktopComputer size={32} /> </a>
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className='project__row'>
                        <Col lg={6} xl={5} className="my-auto">
                            <Row>
                                <Col>
                                    <h4 className="title__text">Habit Tracker</h4>
                                    <p className="sub__text">I wanted to outline the current corona virus cases to see if it was getting better or not. That's why I built a simple web app that displays the latests statistics of the Covid-19 Pandemic. Take a look at the top countries that have been effected the most. Also, users can view trends of confirmed cases for the past 30 days in the United states. </p>
                                    <Row className="justify-content-end">
                                        <Col xs={2} sm={2} md={1} lg={2} xl={2}>
                                            <a href="https://github.com/grandonbarcia/habbit-tracker" target='_blank' rel="noreferrer"><AiOutlineGithub size={32} /></a>
                                        </Col>
                                        <Col xs={2} sm={2} md={1} lg={2} xl={2} >
                                            <a href="https://epic-bell-c4bb6e.netlify.app/" target='_blank' rel='norefferrer'><HiOutlineDesktopComputer size={32} /> </a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='project__image__col' lg={6} xl={{ span: 6, offset: 1 }}>
                            <Image className="project__image shadow-lg " src={HabitTracker} />
                        </Col >
                    </Row>

                    <Row className='project__row'>
                        <Col className='project__image__col' lg={6} xl={6} >
                            <Image className="project__image shadow-lg" src={TypingTest} width={'100%'} height={'100%'} />
                        </Col>
                        <Col lg={6} xl={{ span: 5, offset: 1 }} className=" my-auto">
                            <h4 className="title__text">Typing Test</h4>
                            <p className="sub__text">After receiving my new keyboard, I coudn't resist the urge to keep typing on it. That's why I made this typing test. After users hit hit the start button, they are prompted with a quote and text field. When they are finished, their WPM (words per minute) will be displayed. I challenge you to beat your best! Working on implementing a graph to display user's past scores.</p>
                            <Row className="justify-content-end">
                                <Col xs={2} sm={2} md={1} lg={2} xl={2}>
                                    <a href='https://github.com/grandonbarcia/typing-test' target='_blank' rel="noreferrer"><AiOutlineGithub size={32} /></a>
                                </Col>
                                <Col xs={2} sm={2} md={1} lg={2} xl={2} >
                                    <a href='https://vigilant-spence-6f0b27.netlify.app/' target='_blank' rel='noreferrer'><HiOutlineDesktopComputer size={32} /></a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>


        </section>
    )
}

export default Projects
{/* <Col className="card__col" md={6} lg={4} >
                            <Card className="shadow-lg mx-auto" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={CovidTracker} />
                                <Card.Body>
                                    <Card.Title>Covid 19 Tracker </Card.Title>
                                    <Card.Text>
                                        Outline of current Covid 19 climate within the United States
                                    </Card.Text>
                                    <Row className="justify-content-end text-center" noGutters={true}>
                                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <a href="https://github.com/grandonbarcia/covid-tracker" target='_blank' rel="noreferrer"><AiOutlineGithub size={24} /></a>
                                        </Col>
                                        <Col xs={2} sm={2} md={2} lg={2} xl={2} >
                                            <a href="https://grandonbarcia.github.io/covid-tracker/" target='_blank' rel='norefferrer'><HiOutlineDesktopComputer size={24} /> </a>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="card__col" md={6} lg={4} >
                            <Card className="shadow-lg mx-auto" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={InstagramClone} />
                                <Card.Body>
                                    <Card.Title>Instagram Clone</Card.Title>
                                    <Card.Text>
                                        A dummy clone of one the most popular platforms.
                                </Card.Text>

                                    <Row className="justify-content-end text-center" noGutters={true}>
                                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <a href='https://github.com/grandonbarcia/instagram-clone' target='_blank' rel="noreferrer"><AiOutlineGithub size={24} /></a>
                                        </Col>
                                        <Col xs={2} sm={2} md={2} lg={2} xl={2} >
                                            <a href='https://pedantic-cray-446016.netlify.app/login' target='_blank' rel='noreferrer'><HiOutlineDesktopComputer size={24} /></a>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="card__col" md={6} lg={4} >
                            <Card className="shadow-lg mx-auto" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={TypingTest} />
                                <Card.Body>
                                    <Card.Title>Typing Test </Card.Title>
                                    <Card.Text>
                                        Level up your typing skills with t his app.
                                </Card.Text>
                                    <Row className="justify-content-end text-center" noGutters={true}>
                                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <a href='https://github.com/grandonbarcia/typing-test' target='_blank' rel="noreferrer"><AiOutlineGithub size={24} /></a>
                                        </Col>
                                        <Col xs={2} sm={2} md={2} lg={2} xl={2} >
                                            <a href='https://vigilant-spence-6f0b27.netlify.app/' target='_blank' rel='noreferrer'><HiOutlineDesktopComputer size={24} /></a>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col> */}