import React from "react";
import "./Banner.scss";
import { useContext } from "react";
import { RwdContext } from "../../App";

const Banner = ({ lang }) => {
  const { device } = useContext(RwdContext);
  return (
    <div className="image">
      <img
        src={
          lang === "zh-TW"
            ? "/img/banner.png"
            : lang === "zh-CN"
            ? "/img/banner_sim.png"
            : "/img/banner_eng.png"
        }
        alt=""
        style={device === "desktop" ? {} : { width: "190vw" }}
      />
    </div>
  );
};

export default Banner;
