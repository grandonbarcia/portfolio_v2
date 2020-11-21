import React from 'react';
import { Container, Row, Col } from 'react-bootstrap/'
import NavBar from './Components/NavBar'
import LandingPage from './Components/LandingPage'
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Container style={{ marginTop: '75px', marginBottom: '100px' }} fluid={'xl'}>
        <LandingPage />
        <AboutMe />
        <Projects />
        <Contact />
      </Container>
    </div>
  );
}

export default App;
