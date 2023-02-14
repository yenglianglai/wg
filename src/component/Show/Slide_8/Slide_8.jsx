import React from "react";
import "./Slide_8.scss";

const Slide_8 = ({ lang }) => {
  return (
    <div className="slide_8">
      <img
        src={
          lang === "zh-TW"
            ? "/img/cdn.png"
            : lang === "zh-CN"
            ? "/img/cdn_sim.png"
            : "/img/cdn_eng.png"
        }
        alt=""
      />
    </div>
  );
};

export default Slide_8;
