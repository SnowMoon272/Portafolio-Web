import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { data } from "../../Data/Data";

const ContainerSty = styled.section`
  /* border: 3px solid red; */
  padding: 2rem;
  background-color: white;
  width: 100%;
  max-width: 90vw;
  height: fit-content;
  display: flex;
  align-self: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 990px) {
    justify-content: center;
  }
`;

const SkillsCard = () => {
  return (
    <ContainerSty>
      {data.map((card) => {
        return <Card data={card} />;
      })}
    </ContainerSty>
  );
};

export default SkillsCard;
