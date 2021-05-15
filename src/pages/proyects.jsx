import React from "react";
import { Card } from "react-bootstrap";
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
              <div key={index} className="project">
                <div className="image" style={{ backgroundImage: `url("${proyect.image}")` }} />
                <Card.Body className="Card-Body">
                  <h2>{proyect.title}</h2>
                  <Card.Text>{proyect.description}</Card.Text>
                  <a href={proyect.urla} target="_blank" rel="noopener noreferrer">
                    <button type="button">Ver Projecto</button>
                  </a>
                  <a href={proyect.urlb} target="_blank" rel="noopener noreferrer">
                    <button type="button">Ver Codigo</button>
                  </a>
                </Card.Body>
              </div>
            );
          })}
        </div>
      </section>
      <footer>Creado por SnowMonn</footer>
    </BasicLayout>
  );
};

export default Proyects;
