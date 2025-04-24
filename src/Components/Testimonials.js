import React, { useState } from "react";
import "../Style/Testimonials.css";
import { testimonialsData } from "../Data/testimonialsData";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import { motion } from "framer-motion";

function Testimonials() {
  const [selected, setSelected] = useState(0);
  const tlength = testimonialsData.length;

  const transition = { type: "spring", duration: 2 };

  return (
    <div className="Testimonials" id="Testimonials">
      <div className="left_t">
        <span>testimonials</span>

        <div>
          <div className="stroke-text">what they</div>
          <div>say about us</div>
        </div>

        <motion.span
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ ...transition, type: "tween" }}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span className="t_Name_status">
          <span>{testimonialsData[selected].name}</span>
          {" - "}
          <span>{testimonialsData[selected].status}</span>
        </span>
      </div>

      <div className="right_t">
        <motion.div
          initial={{ right: "12.5rem" }}
          whileInView={{ right: " 8.5rem" }}
          transition={{ ...transition, type: "tween", duration: 2 }}
        ></motion.div>

        <motion.div
          initial={{ right: "2rem" }}
          whileInView={{ right: " 6rem" }}
          transition={{ ...transition, type: "tween", duration: 2 }}
        ></motion.div>

        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ ...transition, type: "tween" }}
          src={testimonialsData[selected].image}
          alt=""
        />

        <div className="arrow">
          <span>
            <FiArrowLeftCircle
              onClick={() => {
                selected === 0
                  ? setSelected(tlength - 1)
                  : setSelected((prev) => prev - 1);
              }}
            />
          </span>

          <span>
            <FiArrowRightCircle
              onClick={() => {
                  selected === tlength - 1
                    ? setSelected(0)
                    : setSelected((prev) => prev + 1);
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
