import React from "react";
import { Container, Button } from "react-bootstrap";
import CV from "../../Data/Frontend-Developer_Curriculum.pdf";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <Container className="about-me">
      <p>Cuento con una gran facilidad de palabra y experiencia trabajando bajo presión.
Me considero una persona autodidacta, pero capaz de pedir ayuda cuando es
necesario, he aprendido desarrollo web y me he preparado como desarrollador
Front-end durante 3 años, por mis propios medios.
Confío plenamente en mi capacidad para producir ideas innovadoras para resolver
desafíos profesionales</p>
      <hr />
      <a href={CV} target="_blanck">
        <Button variant="primary">Descargar CV</Button>
      </a>
    </Container>
  );
};

export default AboutMe;
