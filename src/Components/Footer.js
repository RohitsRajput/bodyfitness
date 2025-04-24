import React from "react";
import "../Style/Footer.css";
import git from "../Image/github.png";
import insta from "../Image/instagram.png";
import linkdin from "../Image/linkedin.png";
import logo from "../Image/logo.png";

function Footer() {
  return (
    <div className="footer_container">
      <div className=" blur Footer_blur1"></div>
      <div className=" blur Footer_blur2"></div>
      <hr />
      <div className="Footer">
        <div className="link">
          <img src={git} alt="" />
          <img src={insta} alt="" />
          <img src={linkdin} alt="" />
        </div>
        <img className="logo" src={logo} alt="" />
      </div>
    </div>
  );
}

export default Footer;
