import React from "react";
import "./Slide_1.scss";

const Slide_1 = ({ lang }) => {
  console.log(lang);
  return (
    <div className="slide_1">
      {lang === "zh-TW" ? (
        <h1>
          <strong>"不進則退"</strong>淘汰法則，唯全球站才能長久
        </h1>
      ) : lang === "eng" ? (
        <h1>
          <strong>"If you don't advance, you will retreat" </strong>It's the
          only way for sustainable development
        </h1>
      ) : (
        lang === "zh-CN" && (
          <h1>
            <strong>"不进则退" </strong> 淘汰法则，唯全球站才能长久
          </h1>
        )
      )}

      <div className="images">
        <div className="image">
          <img src="/img/dan.png" />

          {lang === "zh-TW" ? (
            <p>單幣種站點</p>
          ) : lang === "eng" ? (
            <p>Single currency site</p>
          ) : (
            lang === "zh-CN" && <p>单币种站点</p>
          )}
        </div>
        <div className="image">
          <img src="/img/duo.png" />

          {lang === "zh-TW" ? (
            <p>多幣種站點（同時支持全球貨幣）</p>
          ) : lang === "eng" ? (
            <p>
              Multi-currency site (supports global currencies simultaneously)
            </p>
          ) : (
            lang === "zh-CN" && <p>多币种站点（同时支持全球货币）</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slide_1;
