import React, { useEffect, useState } from "react";
import "./Business.scss";

const Business = () => {
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
        <img src="/img/banner_1.jpg" alt="" />
        <img src="/img/banner_2.jpg" alt="" />
      </div>
    </div>
  );
};

export default Business;
