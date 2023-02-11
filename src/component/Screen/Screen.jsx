import React from "react";
import "./Screen.scss";
import { useState } from "react";
import Slide_1 from "../Show/Slide_1/Slide_1";
import Slide_2 from "../Show/Slide_2/Slide_2";
import Slide_3 from "../Show/Slide_3/Slide_3";
import Slide_4 from "../Show/Slide_4/Slide_4";
import Slide_5 from "../Show/Slide_5/Slide_5";
import Slide_6 from "../Show/Slide_6/Slide_6";
import Slide_7 from "../Show/Slide_7/Slide_7";
import Slide_8 from "../Show/Slide_8/Slide_8";
import { useContext } from "react";
import { RwdContext } from "../../App";

const Screen = () => {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const { device } = useContext(RwdContext);

  const data = [
    { id: 0, text: "支持全球多幣種 同時經營多個國家" },
    { id: 1, text: "2K高清畫質 原生穩定流暢" },
    { id: 2, text: "活動任務全自動 網游式一鍵領取" },
    { id: 3, text: "支持20多種語言 覆蓋全球95%人群" },
    { id: 4, text: "收費低廉合理 服務真誠用心" },
    { id: 5, text: "對賭互刷監測 出款自動校驗" },
    { id: 6, text: "房間局自動引流 俱樂部直接躺賺" },
    { id: 7, text: "全方位抗攻擊 數據不可破解" },
  ];

  const show = [
    <Slide_1 device={device} hover={hover} />,
    <Slide_2 device={device} hover={hover} />,
    <Slide_3 device={device} hover={hover} />,
    <Slide_4 device={device} hover={hover} />,
    <Slide_5 device={device} hover={hover} />,
    <Slide_6 device={device} hover={hover} />,
    <Slide_7 device={device} hover={hover} />,
    <Slide_8 device={device} hover={hover} />,
  ];

  return (
    <div className="screen">
      <div
        className="left"
        style={device === "desktop" ? {} : { display: "none" }}
      >
        <ul className="items">
          {data.map((item, i) => (
            <li
              onClick={() => setActive(item.id)}
              key={i}
              style={
                active === item.id
                  ? device === "desktop"
                    ? {
                        color: "#3576ED",
                        fontSize: "1.3vw",
                      }
                    : { color: "#3576ED" }
                  : {
                      fontSize: "1.3vw",
                    }
              }
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="right"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {show[active]}
      </div>
    </div>
  );
};

export default Screen;
