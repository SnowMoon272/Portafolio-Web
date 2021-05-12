import React from "react";
import Card from "./Card";
import styled from "styled-components";

const ContainerSty = styled.section`
  /* border: 3px solid red; */
  padding: 2rem;
  /* position: relative; */
  background-color: white;
  width: 100%;
  max-width: 90vw;
  height: fit-content;
  display: flex;
  align-self: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 990px) {
    justify-content: center;
  }
`;

const SkillsCard = () => {
  const data = [
    {
      icon: "IcHtml",
      text: "HTML, BEM, Camel Case",
    },
    {
      icon: "IcNext",
      text: "JavaScript, POO ",
    },
  ];
  // arreglo de cards y su info
  return (
    <ContainerSty>
      <a href="">
        <Card />
      </a>
      <a href="">
        <Card />
      </a>
      <a href="">
        <Card />
      </a>
      <a href="">
        <Card />
      </a>
      <a href="">
        <Card />
      </a>
      <a href="">
        <Card />
      </a>
      <a href="">
        <Card />
      </a>
      <a href="">
        <Card />
      </a>
      <a href="">
        <Card />
      </a>
    </ContainerSty>
  );
};

export default SkillsCard;
