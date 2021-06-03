import React from "react";
import IcTwitter from "../../../images/icons/twitter.svg";
import IcFacebook from "../../../images/icons/facebook.svg";
import IcHub from "../../../images/icons/web.svg";
import IcLinked from "../../../images/icons/linkedin.svg";
// import IcInsta from "../../../images/icons/instagram.svg";
import "./Social.scss";

const Social = () => {
  const socialMedia = [
    {
      icon: <IcTwitter />,
      link: "https://twitter.com/SnowMoon272",
    },
    {
      icon: <IcFacebook />,
      link: "https://www.facebook.com/SnowMoon272",
    },
    {
      icon: <IcHub />,
      link: "https://github.com/SnowMoon272",
    },
    {
      icon: <IcLinked />,
      link: "https://www.linkedin.com/in/manuel-roberto-serrano-torres-436033214/",
    },
    // {
    //   icon: <IcInsta />,
    //   link: "https://www.instagram.com/snowmoon272/",
    // },
  ];

  return (
    <div className="social">
      {socialMedia.map((social, index) => {
        return (
          <a key={index} href={social.link} target="_blanck" rel="noreferer noopener">
            {social.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
