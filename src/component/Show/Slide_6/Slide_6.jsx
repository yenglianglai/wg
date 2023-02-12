import React from "react";

import "./Slide_6.scss";
const Slide_6 = ({ device }) => {
  return (
    <div className="slide_6">
      <img
        src="/img/duaidoo.jpg"
        alt=""
        style={device === "desktop" ? {} : { height: "100%", width: "auto" }}
      />
    </div>
  );
};
export default Slide_6;
