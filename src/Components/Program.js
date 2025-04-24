import React from "react";
import "../Style/Program.css";
import { programsData } from "../Data/programsData";
import { GoArrowRight } from "react-icons/go";

function Program() {
  return (
    <div className="Program" id="Program">
      {/* PROGRAM HEADING */}

      <div className="program_heading">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">To shape you</span>
      </div>

      {/* PROGRAM LIST */}

      <div className="program_category">
        {programsData.map((item) => {
          return (
            <div className="list_item">
              {item.image}
              <span>{item.heading}</span>
              <span>{item.details}</span>

              <div className="join">
                <span>Join now</span>
                <GoArrowRight />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Program;
