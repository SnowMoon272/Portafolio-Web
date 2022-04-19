import React from "react";
import { Container, Button } from "react-bootstrap";
import CV from "../../Data/Frontend-Developer_Curriculum.pdf";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <Container className="about-me">
      <p>En construcción...</p>
      <hr />
      <a href={CV} target="_blanck">
        <Button variant="primary">Descargar CV</Button>
      </a>
    </Container>
  );
};

export default AboutMe;
