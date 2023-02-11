import React from "react";
import "./PlatformCard.scss";
import { useContext } from "react";
import { RwdContext } from "../../App";

const PlatformCard = ({ imgUrl }) => {
  const { device } = useContext(RwdContext);
  return (
    <div
      className="platformCard"
      style={device === "desktop" ? {} : { width: "30%", height: "10vw" }}
    >
      <img src={imgUrl} alt="" />
    </div>
  );
};

export default PlatformCard;
