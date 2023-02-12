import React from "react";
import "./PlatformCard.scss";
import { useContext } from "react";
import { RwdContext } from "../../App";

const PlatformCard = ({ imgUrl }) => {
  const { device } = useContext(RwdContext);
  return (
    <div
      className="platformCard"
      style={device === "desktop" ? {} : { width: "31%", height: "11vw" }}
    >
      <img src={imgUrl} alt="" />
    </div>
  );
};

export default PlatformCard;
