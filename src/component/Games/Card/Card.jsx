import { style } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./Card.scss";
import { useContext } from "react";
import { RwdContext } from "../../../App";

const Card = ({ imgUrl, iconUrl, name, size, rtp }) => {
  const [scale, setScale] = useState(true);
  const { device } = useContext(RwdContext);
  useEffect(() => {
    setInterval(() => {
      setScale(false);
    }, 200);

    return () => clearInterval();
  }, []);
  return (
    <div
      className="card"
      style={device === "desktop" ? {} : { width: "calc(50% - 16px)" }}
    >
      <img src={imgUrl} alt="" />
      <div className="desc">
        <div className="left">
          <img
            src={iconUrl}
            alt=""
            style={device === "desktop" ? {} : { width: "7vw", height: "7vw" }}
          />
        </div>

        <div className="mid">
          <p className="name">{name}</p>
          <p className="size">大小 : {size}MB</p>
        </div>

        <div className="right">
          <div className="devices">
            <img src="/img/safari.gif" alt="" />
            <img src="/img/windows.gif" alt="" />
            <img src="/img/android.gif" alt="" />
            <img src="/img/apple.gif" alt="" />
            <img src="/img/html.gif" alt="" />
          </div>

          <p className="rtp">RTP: {rtp}%</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
