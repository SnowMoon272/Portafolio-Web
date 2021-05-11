import React from "react"
import Menu from "../components/Menu"

export const BasicLayout = ({
  children,
  menuColor,
}: {
  children: JSX.Element
  menuColor?: string
}) => {
  return (
    <>
      <Menu menuColor={menuColor} />
      {children}
    </>
  )
}
