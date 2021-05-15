import React from "react";
import styled from "styled-components";

const CertificatesStyle = styled.div`
  background-color: rgb(10, 10, 35);
  border: 3px solid rgb(208, 208, 213);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 90%;
  height: fit-content;
  top: 33%;
  padding: 3rem;
  color: white;
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
