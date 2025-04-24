import React from "react";
import "../Style/Hero.css";
import Navbar from "../Components/Navbar";
import Heroimg from "../Image/hero_image.png";
import Heroimgback from "../Image/hero_image_back.png";
import heartimg from "../Image/heart.png";
import calories from "../Image/calories.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function Hero() {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="Hero" id="Hero">
      <div className="blur Hero_blur"></div>

      {/* LEFT SIDE */}

      <div className="left-Hero">
        <Navbar />

        {/* THE BEST ADD */}

        <div className="the_best_add">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best body fitness in the town</span>
        </div>

        {/* HERO TEST */}

        <div className="hero_text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>

          <div>
            <span>ideal </span>
            <span className="stroke-text">body</span>
          </div>

          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              life up your life to fullest
            </span>
          </div>
        </div>

        {/* FIGURES */}

        <div className="figures">
          <div>
            <span>
              <CountUp end={140} start={100} duration={2.75} prefix="+" />
            </span>
            <span>expert coaches</span>
          </div>

          <div>
            <span>
              <CountUp end={978} start={800} duration={2.75} prefix="+" />
            </span>
            <span>members joined</span>
          </div>

          <div>
            <span>
              <CountUp end={50} start={0} duration={2.75} prefix="+" />
            </span>
            <span>programs</span>
          </div>
        </div>

        {/* HERO BUTTON */}

        <div className="hero_button">
          <button>get started</button>
          <button> learn more</button>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="right-Hero">
        {/* HEART RATE */}

        <motion.div
          initial={{ right: "1rem" }}
          whileInView={{ right: "6rem" }}
          transition={{ ...transition, type: "tween", duration: 2 }}
          className="heart"
        >
          <img src={heartimg} alt="" />

          <div className="heart_rate">
            <span>heart rate</span>
            <span>116 bpm</span>
          </div>
        </motion.div>

        {/* HOME PAGE RIGHT SIDE IMAGE */}

        <img src={Heroimg} alt="" className="Heroimg" />
        <motion.img
          src={Heroimgback}
          alt=""
          className="Heroimgback"
          initial={{ right: "15rem" }}
          whileInView={{ right: "20rem" }}
          transition={{ ...transition, type: "tween" }}
        />

        {/* CALORIES */}

        <motion.div
          initial={{ right: "45rem" }}
          whileInView={{ right: "35rem" }}
          transition={{ ...transition, type: "tween" }}
          className="calories"
        >
          <img src={calories} alt="" />

          <div className="calories_rate">
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
