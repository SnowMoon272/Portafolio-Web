/* eslint-disable max-len */
import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { BasicLayout } from "../layouts/BasicLayout.tsx";
import avataLi from "../images/SOFTWARE-DEVELOPMENT.png";
import Down from "../images/icons/down-arrow.svg";
import SkillsCard from "../components/Skills/SkillsCard";

const StyleContainer = styled.div`
  margin-top: 5rem;
  height: calc(100vh - 84px);

  & .skills__block {
    padding-bottom: 5rem;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    > h2 {
      text-align: center;
      color: rgb(10, 10, 35);
      font-size: 4rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }
    > a svg {
      width: 10rem;
      height: 10rem;
    }
    > p {
      font-size: 1.8rem;
      text-align: center;
    }
    > img {
      padding: 8rem 0;
      @media (max-width: 990px) {
        width: 50%;
        padding: 6rem 0;
      }
    }
  }
`;

const SkillsContainer = styled.div`
  position: relative;
  z-index: 10;
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  .skills {
    display: flex;
    justify-content: center;
  }
`;

const skills = () => {
  return (
    <BasicLayout menuColor="rgb(10, 10, 35)">
      <Container>
        <StyleContainer>
          <div className="skills__block">
            <h2>Desarrollador Web Front-end</h2>
            <p>Codifico cosas maravillosamente simples, y me encanta lo que hago.</p>
            <img src={avataLi} alt="Avatar" />
            <a href="#skills">
              <Down />
            </a>
          </div>
        </StyleContainer>
      </Container>

      <SkillsContainer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill=" rgb(10, 10, 35)"
            fillOpacity="1"
            d="M0,64L0,64L36.9,64L36.9,96L73.8,96L73.8,32L110.8,32L110.8,224L147.7,224L147.7,256L184.6,256L184.6,288L221.5,288L221.5,128L258.5,128L258.5,96L295.4,96L295.4,96L332.3,96L332.3,160L369.2,160L369.2,64L406.2,64L406.2,32L443.1,32L443.1,288L480,288L480,288L516.9,288L516.9,224L553.8,224L553.8,288L590.8,288L590.8,288L627.7,288L627.7,192L664.6,192L664.6,96L701.5,96L701.5,160L738.5,160L738.5,96L775.4,96L775.4,32L812.3,32L812.3,256L849.2,256L849.2,224L886.2,224L886.2,32L923.1,32L923.1,128L960,128L960,224L996.9,224L996.9,64L1033.8,64L1033.8,288L1070.8,288L1070.8,96L1107.7,96L1107.7,96L1144.6,96L1144.6,160L1181.5,160L1181.5,32L1218.5,32L1218.5,64L1255.4,64L1255.4,32L1292.3,32L1292.3,288L1329.2,288L1329.2,224L1366.2,224L1366.2,0L1403.1,0L1403.1,160L1440,160L1440,0L1403.1,0L1403.1,0L1366.2,0L1366.2,0L1329.2,0L1329.2,0L1292.3,0L1292.3,0L1255.4,0L1255.4,0L1218.5,0L1218.5,0L1181.5,0L1181.5,0L1144.6,0L1144.6,0L1107.7,0L1107.7,0L1070.8,0L1070.8,0L1033.8,0L1033.8,0L996.9,0L996.9,0L960,0L960,0L923.1,0L923.1,0L886.2,0L886.2,0L849.2,0L849.2,0L812.3,0L812.3,0L775.4,0L775.4,0L738.5,0L738.5,0L701.5,0L701.5,0L664.6,0L664.6,0L627.7,0L627.7,0L590.8,0L590.8,0L553.8,0L553.8,0L516.9,0L516.9,0L480,0L480,0L443.1,0L443.1,0L406.2,0L406.2,0L369.2,0L369.2,0L332.3,0L332.3,0L295.4,0L295.4,0L258.5,0L258.5,0L221.5,0L221.5,0L184.6,0L184.6,0L147.7,0L147.7,0L110.8,0L110.8,0L73.8,0L73.8,0L36.9,0L36.9,0L0,0L0,0Z"
          />
        </svg>

        <Container>
          <div className="skills" id="skills">
            <SkillsCard />
          </div>
        </Container>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill=" rgb(10, 10, 35)"
            fillOpacity="1"
            d="M0,64L0,64L36.9,64L36.9,96L73.8,96L73.8,32L110.8,32L110.8,224L147.7,224L147.7,256L184.6,256L184.6,288L221.5,288L221.5,128L258.5,128L258.5,96L295.4,96L295.4,96L332.3,96L332.3,160L369.2,160L369.2,64L406.2,64L406.2,32L443.1,32L443.1,288L480,288L480,288L516.9,288L516.9,224L553.8,224L553.8,288L590.8,288L590.8,288L627.7,288L627.7,192L664.6,192L664.6,96L701.5,96L701.5,160L738.5,160L738.5,96L775.4,96L775.4,32L812.3,32L812.3,256L849.2,256L849.2,224L886.2,224L886.2,32L923.1,32L923.1,128L960,128L960,224L996.9,224L996.9,64L1033.8,64L1033.8,288L1070.8,288L1070.8,96L1107.7,96L1107.7,96L1144.6,96L1144.6,160L1181.5,160L1181.5,32L1218.5,32L1218.5,64L1255.4,64L1255.4,32L1292.3,32L1292.3,288L1329.2,288L1329.2,224L1366.2,224L1366.2,0L1403.1,0L1403.1,160L1440,160L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"
          />
        </svg>
      </SkillsContainer>
    </BasicLayout>
  );
};

export default skills;
