import React from "react";
import { Row, Col, Button } from "react-bootstrap/";
import { Browser } from "react-kawaii";
import Resume from "../img/Brandon_Garcia_Resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../App.css";

const LandingPage = () => {
  return (
    <section id="home">
      <div className="square1"></div>
      <div className="square2"></div>
      <Row className="justify-content-center align-items-center h-50">
        <Col xl={6}>
          <Row>
            <Col>
              <div className="title">Front End Developer</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="sub__title">
                I like solving problems one app at a time
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div class="custom-shape-divider-bottom-1634008616">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default LandingPage;
