import React, { useState } from "react";
import styled from "styled-components";
import IcNext from "../../images/icons/next.svg";
import Certificates from "./Certificates";

const CardStyle = styled.div`
  position: relative;
  background-color: rgb(208, 208, 213);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 3px solid rgb(10, 10, 35);
  width: 350px;

  > svg:first-of-type {
    margin: 0.6rem 0 0.6rem 0.6rem;
    height: 4.5rem;
    width: 4.5rem;
    fill: rgb(10, 10, 35);
  }

  > svg:last-of-type {
    margin-right: 1.8rem;
    height: 2rem;
    width: 2rem;
    fill: rgb(10, 10, 35);
  }

  p {
    color: rgb(10, 10, 35);
    position: absolute;
    left: 18%;
    margin: 0;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: left;
  }

  :hover {
    background-color: rgb(10, 10, 35);
    cursor: pointer;
    > svg:first-of-type {
      fill: #ffffff;
    }
    > svg:last-of-type {
      fill: white;
    }
    p {
      color: white;
    }
  }
`;

const Button = styled.button`
  background-color: white;
  border: none;
  margin-bottom: 1.2rem;
`;

const Card = ({ data }) => {
  const [SwitchSTATE, setSwitchSTATE] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setSwitchSTATE(!SwitchSTATE);
        }}
      >
        <CardStyle>
          {data.icon}
          <p>{data.text}</p>
          <IcNext />
        </CardStyle>
      </Button>
      {SwitchSTATE && (
        <Certificates data={data} SwitchSTATE={SwitchSTATE} setSwitchSTATE={setSwitchSTATE} />
      )}
    </>
  );
};

export default Card;
