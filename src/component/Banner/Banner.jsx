import React from "react";
import "./Banner.scss";
import { useContext } from "react";
import { RwdContext } from "../../App";

const Banner = () => {
  const { device } = useContext(RwdContext);
  return (
    <div className="image">
      <img
        src="\img\banner.png"
        alt=""
        style={device === "desktop" ? {} : { width: "190vw" }}
      />
    </div>
  );
};

export default Banner;
