import React from "react"
import "./Profile.scss"
import { Container, Row, Col, Image } from "react-bootstrap"
import Social from "./Social"
import profileImage from "../../images/avatar.jpg"

const Profile = () => {
  const data = [
    {
      title: "Edad",
      info: "26 años",
    },
    {
      title: "Dirección",
      info:
        "C. Aguiluchos Mz. E Lt.13 Int.19, Bulevares del Lago, Ciudad Nicolas Romero, Mex. 54473",
    },
    {
      title: "e-mail",
      info: "CastielAltair0027@outlook.com",
    },
    {
      title: "Telefono",
      info: "55-6192-2596",
    },
  ]

  return (
    <div className="profile">
      <div className="wallpaper">Componente Profile</div>
      <div className="dark" />
      <Container className="box">
        <Row className="info">
          <Col xs={12} md={4}>
            <Image src={profileImage} fluid rounded />
          </Col>
          <Col xs={12} md={8} className="info__data">
            <span>!Hola!</span>
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
                )
              })}
            </div>
          </Col>
        </Row>
        <Social />
      </Container>
    </div>
  )
}

export default Profile
