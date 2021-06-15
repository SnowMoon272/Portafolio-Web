import React from "react";
import styled from "styled-components";

const CertificatesStyle = styled.div`
  background-color: rgb(10, 10, 35);
  border: 3px solid rgb(208, 208, 213);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  width: 90%;
  height: fit-content;
  padding: 3rem;
  color: white;
  overflow: auto;

  > h2 {
    font-size: 4rem;
    color: rgb(208, 208, 213);
  }

  > button {
    width: 20rem;
    padding: 0.8rem;
    border: 3px solid rgb(208, 208, 213);
    background-color: rgb(10, 10, 35);
    border-radius: 6px;
    cursor: pointer;
    color: rgb(208, 208, 213);
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    :hover {
      color: rgb(10, 10, 35);
      background-color: rgb(208, 208, 213);
    }
  }

  .pdf {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    height: fit-content;
    padding: 5rem;
    a {
      border: 2px solid rgb(208, 208, 213);
      border-radius: 4px;
      font-weight: bold;
      text-transform: uppercase;
      padding: 0.5rem 4rem;
      margin: 0.5rem;
      color: rgb(208, 208, 213);
      font-size: 1.5rem;
      text-decoration: none;
      :hover {
        color: rgb(10, 10, 35);
        background-color: rgb(208, 208, 213);
      }
    }
  }

  @media (max-width: 450px) {
    overflow: auto;
    width: 100vw;
    height: 100%;
    top: 0%;
    border: none;
    position: fixed;
    padding: 0;

    h2 {
      font-size: 3rem;
    }

    button {
      width: 15rem;
      padding: 0.6rem;
      font-size: 1.5rem;
    }

    .pdf {
      padding: 6rem 2rem;
    }
    .pdf a {
      padding: 0.5rem 1.5rem;
      font-size: 1.2rem;
    }
  }
`;

const Certificates = ({ data, SwitchSTATE, setSwitchSTATE }) => {
  return (
    <CertificatesStyle>
      <h2>Certificados</h2>

      <div className="pdf">
        {data.cert.map((certi) => {
          return (
            <a href={certi.document} target="_blanck">
              {certi.text}
            </a>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => {
          setSwitchSTATE(!SwitchSTATE);
        }}
      >
        Cerrar
      </button>
    </CertificatesStyle>
  );
};

export default Certificates;
