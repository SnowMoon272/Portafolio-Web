import React from "react"
import { BasicLayout } from "../layouts/BasicLayout"
import Profile from "../components/Profile"
import "./index.scss"

const IndexPage = () => (
  <BasicLayout /* menuColor="#000" */>
    <>
      <Profile />
      <h2 className="title">Estamos en la Home</h2>
    </>
  </BasicLayout>
)

export default IndexPage
