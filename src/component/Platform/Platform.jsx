import React from "react";
import PlatformCard from "../PlatformCard/PlatformCard";
import "./Platform.scss";

const Platform = () => {
  const data = [
    "/img/p1.png",
    "/img/p2.png",
    "/img/p3.png",
    "/img/p4.png",
    "/img/p5.png",
    "/img/p6.png",
    "/img/p7.png",
    "/img/p8.png",
    "/img/p9.png",
    "/img/p10.png",
    "/img/p11.png",
    "/img/p12.png",
  ];
  return (
    <div className="platform">
      {data.map((platform, i) => (
        <PlatformCard imgUrl={platform} key={i} />
      ))}
    </div>
  );
};

export default Platform;
