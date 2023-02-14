import React, { useEffect, useState } from "react";
import "./Business.scss";

const Business = ({ lang }) => {
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(!slide);
    }, 4000);
    return () => clearInterval(interval);
  }, [slide]);
  return (
    <div className="business">
      <div
        className="container"
        style={{
          transform: `translateX(${slide ? "-100vw" : "0vw"})`,
        }}
      >
        <img
          src={
            lang === "zh-TW"
              ? "/img/banner_1.jpg"
              : lang === "zh-CN"
              ? "/img/banner_1_sim.png"
              : "/img/banner_1_eng.png"
          }
          alt=""
        />
        <img
          src={
            lang === "zh-TW"
              ? "/img/banner_2.jpg"
              : lang === "zh-CN"
              ? "/img/banner_2_sim.png"
              : "/img/banner_2_eng.png"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default Business;
