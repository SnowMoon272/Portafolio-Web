import React from "react";
import Card from "./Card";
import styled from "styled-components";
// icons
import IcHtml from "../../images/icons/html-5.svg";
import IcCss from "../../images/icons/css-3.svg";
import IcJs from "../../images/icons/js.svg";
import IconReac from "../../images/icons/iconfinder_react_4691292.svg";
import IcFrame from "../../images/icons/frames.svg";
import IcSer from "../../images/icons/server.svg";
import IcGit from "../../images/icons/icons8-git.svg";
import IcTer from "../../images/icons/terminal.svg";
// //  diplomas
import CV from "../../Data/Curriculum Manuel.pdf";

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
  const data = [
    {
      icon: <IcHtml />,
      text: "HTML, BEM, Camel Case",
      cert: [
        { document: CV, text: "Html" },
        { document: CV, text: "Html5" },
      ],
    },
    {
      icon: <IcCss />,
      text: "CSS, Preprocesadores, Sass",
      cert: [
        { document: CV, text: "Html" },
        { document: CV, text: "Html5" },
      ],
    },
    {
      icon: <IcJs />,
      text: "JavaScript, POO",
      cert: [
        { document: CV, text: "Html" },
        { document: CV, text: "Html5" },
      ],
    },
    {
      icon: <IconReac />,
      text: "React, React Router, Hooks",
      cert: [
        { document: CV, text: "Html" },
        { document: CV, text: "Html5" },
      ],
    },
    {
      icon: <IcFrame />,
      text: "Gatsby, Redux, React",
      cert: [
        { document: CV, text: "Html" },
        { document: CV, text: "Html5" },
      ],
    },
    {
      icon: <IcSer />,
      text: "APIs, Firebase",
      cert: [
        { document: CV, text: "Html" },
        { document: CV, text: "Html5" },
      ],
    },
    {
      icon: <IcGit />,
      text: "Git, GitHub, GitLab",
      cert: [
        { document: CV, text: "Html" },
        { document: CV, text: "Html5" },
      ],
    },
    {
      icon: <IcTer />,
      text: "Terminal, Bash, Linux",
      cert: [
        { document: CV, text: "Html" },
        { document: CV, text: "Html5" },
      ],
    },
  ];

  return (
    <ContainerSty>
      {data.map((card) => {
        return <Card data={card} />;
      })}
    </ContainerSty>
  );
};

export default SkillsCard;
