import React from "react";
import { Container, Button } from "react-bootstrap";
import CV from "../../Data/Curriculum Manuel.pdf";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <Container className="about-me">
      <p>
        Hola, mi nombre es Manuel tengo 26 años de edad y me formo como desarrollador desde los 18
        años, mi primer lenguaje aprendido fue c++ y HTML. He laborado como banquero y chofer
        privado, pero actualmente redirijo mi carrera a la programación, termine una carrera técnica
        y recibí un título como técnico en informática. Actualmente tengo un año formándome
        diariamente como Frontend Developer para el diseño de páginas y aplicaciones web. <br /> Mi
        formación ha sido autodidacta y continua por medio de la web, en sitios como Platzi, Udemy,
        comunidades como gitHub y GitLab que poco a poco han forjado en mí una pasión por la
        programación web. <br /> Me sigo preparando profesionalmente en mis estudios, actualmente
        domino lenguajes, librerías y algún framework, entre ellos HTML5, CSS3, JS, React, entre
        otros. Mi formación continua como Frontend y me preparó igualmente como Backend para
        futuramente poder llamarme Fullstack. <br /> Este portafolio web fue diseñado y creado por
        mí y en es incluyo certificados obtenidos y proyectos creados.
      </p>
      <hr />
      <a href={CV} target="_blanck">
        <Button variant="primary">Descargar CV</Button>
      </a>
    </Container>
  );
};

export default AboutMe;
