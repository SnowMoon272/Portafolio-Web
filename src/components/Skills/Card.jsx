import React from "react";
import IcHtml from "../../images/icons/html5.svg";
import IcNext from "../../images/icons/next.svg";
import styled from "styled-components";

const CardStyle = styled.div`
  position: relative;
  background-color: rgb(208 208 213);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 3px solid rgb(10 10 35);
  width: 350px;

  > svg:first-of-type {
    margin: 0.6rem 0 0.6rem 0.6rem;
    height: 5rem;
    width: 5rem;
    fill: rgb(10 10 35);
  }

  > svg:last-of-type {
    margin-right: 1.8rem;
    height: 2rem;
    width: 2rem;
    fill: rgb(10 10 35);
  }

  p {
    color: rgb(10 10 35);
    position: absolute;
    left: 18%;
    margin: 0;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: left;
  }

  :hover {
    background-color: rgb(10 10 35);
    > svg:first-of-type {
      fill: white;
    }
    > svg:last-of-type {
      fill: white;
    }
    p {
      color: white;
    }
  }
`;

const Card = () => {
  return (
    <CardStyle>
      {/* icono dinamico */}
      <IcHtml />
      {/* texto dinamico */}
      <p>HTML, BEM, Camel Case,</p>
      <IcNext />
    </CardStyle>
  );
};

export default Card;
