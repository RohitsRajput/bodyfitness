import React from "react";
import "../Style/Reasion.css";
import image1 from "../Image/image1.png";
import image2 from "../Image/image2.png";
import image3 from "../Image/image3.png";
import image4 from "../Image/image4.png";
import adidas from "../Image/adidas.png";
import nb from "../Image/nb.png";
import nike from "../Image/nike.png";
import tick from "../Image/tick.png";

function Reasion() {
  return (
    <div className="Reasion" id="Reasion">
      <div className="left-rea">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>

      <div className="right-rea">

        <span> some reasion</span>
        
        <div className="reasion-tital">
          <span className="stroke-text">why </span>
          <span>choose us?</span>
        </div>


        <div className="reasion-detail">
          <div>
            <img src={tick} alt="" />
            <span>over 140+ expert coachs</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>train smarter and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>reliable partners</span>
          </div>
        </div>

        <span>our partners</span>

        <div className="partner_img">
          <img src={nb} alt="" />
          <img src={nike} alt="" />
          <img src={adidas} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Reasion;
