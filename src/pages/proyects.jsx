import React from "react";
import { BasicLayout } from "../layouts/BasicLayout";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../pages/proyects.scss";

const Proyects = () => {
  return (
    <BasicLayout menuColor="rgb(10, 10, 35)">
      <Container className="projects">
        <h1>Proyectos</h1>

        <Row>
          <Col xs={12} sm={4} className="project">
            <Card>
              <div className="image">Imagen</div>
              <Card.Body>
                <Card.Title>Google</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium nisi tenetur
                  eius, id non incidunt dolor reiciendis veritatis quibusdam vel neque, expedita eos
                  ab a, culpa quisquam accusantium ad asperiores.
                </Card.Text>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">Ver Projecto</Button>
                  <Button variant="primary">Ver Codigo</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </BasicLayout>
  );
};

export default Proyects;
