import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { BasicLayout } from "../layouts/BasicLayout.tsx";
import proyects from "../Data/Proyects";
import "./proyects.scss";

const Proyects = () => {
  return (
    <BasicLayout menuColor="rgb(10, 10, 35)">
      <section className="proyect__container">
        <h1>Proyectos</h1>
        <div className="ctner">
          {proyects.map((proyect, index) => {
            return (
              <Col key={index} xs={12} sm={4} className="project">
                <Card>
                  <div className="image" style={{ backgroundImage: `url("${proyect.image}")` }} />
                  <Card.Body>
                    <Card.Title>{proyect.title}</Card.Title>
                    <Card.Text>{proyect.description}</Card.Text>
                    <a href={proyect.urla} target="_blank" rel="noopener noreferrer">
                      <Button variant="primary">Ver Projecto</Button>
                    </a>
                    <a href={proyect.urlb} target="_blank" rel="noopener noreferrer">
                      <Button variant="primary">Ver Codigo</Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </div>
      </section>
      <footer>Creado por SnowMonn</footer>
    </BasicLayout>
  );
};

export default Proyects;
