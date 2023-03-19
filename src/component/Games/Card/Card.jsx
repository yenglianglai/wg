import React, { useEffect, useState } from "react";
import "./Card.scss";
import { useContext } from "react";
import { RwdContext } from "../../../App";

const Card = ({ imgUrl, iconUrl, name, size, rtp, lang }) => {
  const { device } = useContext(RwdContext);
  return (
    <div
      className="card"
      style={device === "desktop" ? {} : { width: "calc(50% - 16px)" }}
    >
      <img src={imgUrl} alt="" />
      

      
    </div>
  );
};

export default Card;
