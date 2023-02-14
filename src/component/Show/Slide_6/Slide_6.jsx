import React from "react";

import "./Slide_6.scss";
const Slide_6 = ({ device, lang }) => {
  return (
    <div className="slide_6">
      <img
        src={
          lang === "zh-TW"
            ? "/img/duaidoo.jpg"
            : lang === "zh-CN"
            ? "/img/duaidoo_sim.png"
            : "/img/duaidoo_eng.png"
        }
        alt=""
        style={device === "desktop" ? {} : { height: "100%", width: "auto" }}
      />
    </div>
  );
};
export default Slide_6;
