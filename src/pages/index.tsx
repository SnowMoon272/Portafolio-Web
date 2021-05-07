import * as React from "react"
import { Button } from "react-bootstrap"
import "../sass/index.scss"

import Seo from "../components/seo"
import { BasicLayout } from "../layouts/BasicLayout"

const IndexPage = () => (
  <BasicLayout>
    <Seo title="Home" />
    <h2 className="title">Hi people</h2>
    <Button variant="primary">Click me</Button>
    <Button variant="success">Click me</Button>
  </BasicLayout>
)

export default IndexPage
