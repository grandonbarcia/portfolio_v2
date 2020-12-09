import React from 'react';
import { Container, Row, Col } from 'react-bootstrap/'
import NavBar from './Components/NavBar'
import LandingPage from './Components/LandingPage'
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div>
      <NavBar />
      <Container fluid={'xl'}>
        <LandingPage />
        <Projects />
        <Contact />
      </Container>
    </div>
  );
}

export default App;
