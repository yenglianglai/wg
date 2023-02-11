import React from "react";
import "./Slide_1.scss";

const Slide_1 = () => {
  return (
    <div className="slide_1">
      <h1>
        <strong>"不進則退"</strong> 淘汰法則，唯全球站才能長久
      </h1>
      <div className="images">
        <div className="image">
          <img src="/img/dan.png" />
          <p>單幣種站點</p>
        </div>
        <div className="image">
          <img src="/img/duo.png" />
          <p>多幣種站點（同時支持全球貨幣）</p>
        </div>
      </div>
    </div>
  );
};

export default Slide_1;
