import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>mfaisal0125470@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <a href="https://www.linkedin.com/in/m-faisal125/"><Linkedin color="white" size={"3rem"} /></a>
          <a href="https://github.com/MFaisal125"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
