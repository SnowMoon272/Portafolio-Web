import React from "react";
import { BasicLayout } from "../layouts/BasicLayout";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const StyleContainer = styled("section")`
  margin-top: 5rem;

  & .skills__block {
    margin-top: 5rem;

    > h2 {
      color: #7510f7;
      font-size: 4rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }
  }
`;

const skills = () => {
  return (
    <BasicLayout menuColor="#7510f7">
      <Container>
        <StyleContainer>
          <div className="skills__block">
            <h2>Frontend</h2>
          </div>
        </StyleContainer>
      </Container>
    </BasicLayout>
  );
};

export default skills;
