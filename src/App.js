import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import AboutMe from "./Components/AboutMe";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Container fluid className="p-0">
        <LandingPage />
        <AboutMe />
      </Container>
    </div>
  );
};

export default App;
