import React from "react"
import Menu from "../components/Menu"

export const BasicLayout = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
    </>
  )
}
