import React from "react";
// Icons
import IcHtml from "../images/icons/html-5.svg";
import IcCss from "../images/icons/css-3.svg";
import IcJs from "../images/icons/js.svg";
import IconReac from "../images/icons/iconfinder_react_4691292.svg";
import IcFrame from "../images/icons/frames.svg";
import IcSer from "../images/icons/server.svg";
import IcGit from "../images/icons/icons8-git.svg";
import IcTer from "../images/icons/terminal.svg";
import IcSkills from "../images/icons/skills.svg";
// Diplomas
import Asincronismo from "./Asincronismo-Js.pdf";
import BasicoJavaScript from "./Basico-Javascript.pdf";
import CssGridLayout from "./Css-Grid-Layout.pdf";
import Ecmascript6 from "./Ecmascript-6.pdf";
import FlexboxCssGrid from "./Flexbox-Css-Grid.pdf";
import FrontendDeveloper from "./Frontend-Developer.pdf";
import FundamentosJavascript from "./Fundamentos-Javascript.pdf";
import HtmlCssDefinitivo from "./Html-Css-Definitivo.pdf";
import HtmlCss from "./Html-Css.pdf";
import HtmlPractico from "./Html-Practico.pdf";
import Html5Css3 from "./Html5-Css3.pdf";
import JavascriptNavegador from "./Javascript-Navegador.pdf";
import JqueryJs from "./Jquery-Js.pdf";
import LavarseManosCorrectamente from "./Lavarse-Manos-Correctamente.pdf";
import MobileFirst from "./Mobile-First.pdf";
import Npm from "./Npm.pdf";
import PracticoCss from "./Practico-Css.pdf";
import Preprocesadores from "./Preprocesadores.pdf";
import PreworkWindows from "./Prework-Windows.pdf";
import Prework from "./Prework.pdf";
import ReactJs from "./React-Js.pdf";
import ReactUdemy from "./React-Udemy.pdf";
import ReactT from "./React.pdf";
import ResponsiveDesign from "./Responsive-Design.pdf";
import Scope from "./Scope.pdf";
import SinglepageApp from "./Singlepage-App.pdf";
import SpaJavascript from "./Spa-Javascript.pdf";

const data = [
  {
    icon: <IcHtml />,
    text: "HTML, BEM, Pug",
    cert: [
      { document: HtmlPractico, text: "Html Practico" },
      { document: HtmlCss, text: "Html Css" },
      { document: HtmlCssDefinitivo, text: "Html Css Definitivo" },
      { document: Html5Css3, text: "Html5 & Css3" },
    ],
  },
  {
    icon: <IcCss />,
    text: "CSS, Preprocesadores, Sass",
    cert: [
      { document: CssGridLayout, text: "Css Grid Layout" },
      { document: FlexboxCssGrid, text: "Css Flexbox y Grid" },
      { document: HtmlCssDefinitivo, text: "Html Css Definitivo" },
      { document: HtmlCss, text: "Html Css" },
      { document: MobileFirst, text: "Mobile First" },
      { document: PracticoCss, text: "Practico de Css" },
      { document: Preprocesadores, text: "Preprocesadores" },
      { document: ResponsiveDesign, text: "Responsive Design" },
    ],
  },
  {
    icon: <IcJs />,
    text: "JavaScript, POO",
    cert: [
      { document: Asincronismo, text: "Asincronismo" },
      { document: BasicoJavaScript, text: "Basico Javascript" },
      { document: Ecmascript6, text: "Ecmascript 6" },
      { document: FrontendDeveloper, text: "Frontend Developer" },
      { document: FundamentosJavascript, text: "Fundamentos de Javascript" },
      { document: JavascriptNavegador, text: "Javascript Navegador" },
      { document: JqueryJs, text: "Jquery Js" },
      { document: Prework, text: "Prework y buenas practicas" },
      { document: Scope, text: "Scope" },
      { document: SinglepageApp, text: "Single Page App" },
      { document: SpaJavascript, text: "Spa con Javascript" },
    ],
  },
  {
    icon: <IconReac />,
    text: "React, React Router, Hooks",
    cert: [
      { document: ReactJs, text: "React Js" },
      { document: ReactUdemy, text: "React" },
      { document: ReactT, text: "Basico de React" },
    ],
  },
  {
    icon: <IcFrame />,
    text: "Frameworks, Gatsby, Redux",
    cert: [
      { document: null, text: "Curso en Progreso" },
      { document: null, text: "Curso en Progreso" },
    ],
  },
  {
    icon: <IcSer />,
    text: "APIs, Firebase",
    cert: [{ document: ReactUdemy, text: "Firebase" }],
  },
  {
    icon: <IcGit />,
    text: "Git, GitHub, GitLab",
    cert: [
      { document: null, text: "Curso en Progreso" },
      { document: null, text: "Curso en Progreso" },
    ],
  },
  {
    icon: <IcTer />,
    text: "Terminal, Bash, Linux",
    cert: [
      { document: Npm, text: "Npm" },
      { document: PreworkWindows, text: "Prework en Windows" },
    ],
  },
  {
    icon: <IcSkills />,
    text: "Certificados extras",
    cert: [{ document: LavarseManosCorrectamente, text: "Lavarse las Manos Correctamente" }],
  },
];

export default data;
