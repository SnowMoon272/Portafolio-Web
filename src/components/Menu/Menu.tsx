import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import "./Menu.scss"

export default function Menu({
  menuColor,
}: {
  menuColor: string
}): JSX.Element {
  return (
    <header
      style={{ backgroundColor: menuColor || "trasparent" }}
      className="menu"
    >
      <Container>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/proyects">Proyectos</Link>
          </li>
        </ul>
      </Container>
    </header>
  )
}
