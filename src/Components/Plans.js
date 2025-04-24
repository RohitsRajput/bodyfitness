import React from "react";
import "../Style/Plans.css";
import { plansData } from "../Data/plansData";
import white_tick from "../Image/whiteTick.png";
import { LuMoveRight } from "react-icons/lu";

function Plans() {
  return (
    <div className="Plans" id="Plans">
      <div className="blur Plans_blur1"></div>
      <div className="blur Plans_blur2"></div>

      {/* PLANS TITALS */}

      <div className="plans_titals">
        <span className="stroke-text">ready to start </span>
        <span>your journey </span>
        <span className="stroke-text">now withus</span>
      </div>

      {/* PLANS CATEGORY */}

      <div className="plan_category">
        {plansData.map((item) => {
          return (
            <div className="item_list">
              {item.icon}
              <span>{item.name}</span>
              <span>$ {item.price} </span>

              {/* PLANS FEATURES */}

              <div className="features">
                {item.features.map((feature) => {
                  return (
                    <div className="feature_list">
                      <img src={white_tick} alt="" />
                      {feature}
                    </div>
                  );
                })}
              </div>
              
              <div>
                <span>See more benefits </span>
                <LuMoveRight />
              </div>
              <button className="plan_btn">join now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Plans;
