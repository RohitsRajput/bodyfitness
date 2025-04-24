import React, { useState } from "react";
import "../Style/Navbar.css";
import logo from "../Image/logo.png";
import { Link } from "react-scroll";
import { FaBarsStaggered } from "react-icons/fa6";

function Navbar() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menubar, setMenubar] = useState(false);

  return (
    <div className="Navbar">
      <img src={logo} alt="" className="logo" />

      {menubar === false && mobile === true ? (
        <div
          className="bar"
          onClick={() => {
            setMenubar(true);
          }}
        >
          <FaBarsStaggered />
        </div>
      ) : (
        <ul className="nav_list">
          <Link
            to="Hero"
            spy={true}
            smooth={true}
            duration={800}
            onClick={() => {
              setMenubar(false);
            }}
          >
            <li>home</li>
          </Link>

          <Link
            to="Program"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
            onClick={() => {
              setMenubar(false);
            }}
          >
            <li>programs</li>
          </Link>

          <Link
            to="Reasion"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
            onClick={() => {
              setMenubar(false);
            }}
          >
            <li>why us</li>
          </Link>

          <Link
            to="Plans"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
            onClick={() => {
              setMenubar(false);
            }}
          >
            <li>plans</li>
          </Link>

          <Link
            to="Testimonials"
            spy={true}
            smooth={true}
            offset={-30}
            duration={800}
            onClick={() => {
              setMenubar(false);
            }}
          >
            <li>testimonials</li>
          </Link>

          <Link
            to="join"
            spy={true}
            smooth={true}
            offset={4800}
            duration={800}
            onClick={() => {
              setMenubar(false);
            }}
          >
            <button className="Nav_btn">Join now</button>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
