import React from "react";
import "../Style/Join.css";

function Join() {
  return (
    <div className="Join" id="Join">
      <div className="l_join">
        <hr />
        <div>
          <span className="stroke-text">ready to</span>
          <span>level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>
      <div className="R_join">
        <form className="Email_container">
          <input type="email" placeholder="Enter Your Email Here" />
          <button className="j_btn">join now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
