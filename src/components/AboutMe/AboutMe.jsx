import React from "react"
import { Container, Button } from "react-bootstrap"
import CV from "../../images/Curriculum Manuel.pdf"
import "./AboutMe.scss"

const AboutMe = () => {
  return (
    <Container className="about-me">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        eos maxime voluptate iure culpa nihil, similique voluptatem, quam velit
        sequi, error iusto? Veniam aperiam soluta hic repudiandae, expedita
        voluptas nisi. Fugiat eveniet, doloremque omnis aliquid ut aliquam, modi
        assumenda nam ratione et vitae at iure nulla. Ipsam, natus officiis
        fugit ad non molestias, dignissimos quo aut nesciunt tempore corrupti
        nihil. Doloremque fugit, tempore facilis doloribus dignissimos qui nam
        et eaque quaerat aspernatur voluptatum esse deleniti quae rerum iure
        perferendis unde natus consequatur est eius corporis. Temporibus earum
        nulla quidem debitis! Culpa asperiores quos eum iure, quo ducimus
        tenetur, hic commodi magnam officiis ea esse eaque nesciunt facere
        mollitia optio, doloribus pariatur labore porro ratione voluptatibus
        officia consequuntur quia. Repellendus, sed? Quaerat, ab placeat quis
        laboriosam consequatur ullam molestiae est repudiandae recusandae optio
        ducimus cum dolorem ipsa, voluptates at perspiciatis sunt repellendus.
        Atque doloribus, laborum adipisci sapiente laboriosam pariatur
        voluptatibus ut!
      </p>
      <hr />
      <a href={CV} target="_blanck">
        <Button variant="primary">Descargar CV</Button>
      </a>
    </Container>
  )
}

export default AboutMe
