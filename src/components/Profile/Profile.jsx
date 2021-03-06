import React from "react";
import "./Profile.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import Social from "./Social";
import profileImage from "../../images/avatar.jpeg";

const Profile = () => {
  const data = [
    {
      title: "e-mail",
      info: "MR_Serrano27@outlook.com",
    },
    {
      title: "e-mail alterno",
      info: "CastielAltair0027@outlook.com",
    },
    {
      title: "Nickname en Redes",
      info: "SnowMoon",
    },
    {
      title: "Edad",
      info: "27 años",
    },
    {
      title: "Telefono",
      info: "55-8933-5171",
    },
    {
      title: "Celular",
      info: "55-6192-2596",
    },
    {
      title: "Nacionalidad",
      info: "Méxicana",
    },
  ];

  return (
    <div className="profile">
      <div className="wallpaper" />
      <div className="dark" />
      <Container className="box">
        <Row className="info">
          <Col xs={12} md={4}>
            <Image src={profileImage} fluid rounded />
          </Col>
          <Col xs={12} md={8} className="info__data">
            <span>¡ Hola !</span>
            <p>Manuel Roberto Serrano Torres</p>
            <p>Fontend Developer</p>
            <hr />
            <div className="more-info">
              {data.map((item, index) => {
                return (
                  <div key={index} className="item">
                    <p>{item.title}:</p>
                    <p>{item.info}</p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <Social />
      </Container>
    </div>
  );
};

export default Profile;
