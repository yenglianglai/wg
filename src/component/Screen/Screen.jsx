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

const Screen = ({ lang }) => {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const { device } = useContext(RwdContext);

  const data = [
    {
      id: 0,
      text:
        lang === "zh-TW"
          ? "支持全球多幣種 同時經營多個國家"
          : lang === "zh-CN"
          ? "支持全球多币种 同时经营多个国家"
          : lang === "eng" &&
            "Support multi-currency site helps manage global player in one site",
    },
    {
      id: 1,
      text:
        lang === "zh-TW"
          ? "2K高清畫質 原生穩定流暢"
          : lang === "zh-CN"
          ? "2K高清画质 原生稳定流畅"
          : lang === "eng" && "2K HD quality native games stable and smooth",
    },
    {
      id: 2,
      text:
        lang === "zh-TW"
          ? "活動任務全自動 網游式一鍵領取"
          : lang === "zh-CN"
          ? "活动任务全自动 网游式一键领取"
          : lang === "eng" && "Automation event and mission just in one-click",
    },
    {
      id: 3,
      text:
        lang === "zh-TW"
          ? "支持20多種語言 覆蓋全球95%人群"
          : lang === "zh-CN"
          ? "支持20多种语言 覆盖全球95%人群"
          : lang === "eng" &&
            "Support more than 20 languages, covering 95% of the world's population",
    },
    {
      id: 4,
      text:
        lang === "zh-TW"
          ? "收費低廉合理 服務真誠用心"
          : lang === "zh-CN"
          ? "收费低廉合理 服务真诚用心"
          : lang === "eng" && "Transparent and reasonable pricing",
    },
    {
      id: 5,
      text:
        lang === "zh-TW"
          ? "對賭互刷監測 出款自動校驗"
          : lang === "zh-CN"
          ? "对赌互刷监测 出款自动校验"
          : lang === "eng" &&
            "Gaming monitoring automatic payment verification",
    },
    {
      id: 6,
      text:
        lang === "zh-TW"
          ? "房間局自動引流 俱樂部直接躺賺"
          : lang === "zh-CN"
          ? "房间局自动引流 俱乐部直接躺赚"
          : lang === "eng" && "Friend invite room and Clubhouse mode",
    },
    {
      id: 7,
      text:
        lang === "zh-TW"
          ? "全方位抗攻擊 數據不可破解"
          : lang === "zh-CN"
          ? "全方位抗攻击 数据不可破解"
          : lang === "eng" && "Stable system, secure data",
    },
  ];

  const show = [
    <Slide_1 device={device} hover={hover} lang={lang} />,
    <Slide_2 device={device} hover={hover} />,
    <Slide_3 device={device} hover={hover} />,
    <Slide_4 device={device} hover={hover} lang={lang} />,
    <Slide_5 device={device} hover={hover} lang={lang} />,
    <Slide_6 device={device} hover={hover} lang={lang} />,
    <Slide_7 device={device} hover={hover} />,
    <Slide_8 device={device} hover={hover} lang={lang} />,
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
                        fontSize: "1.1vw",
                      }
                    : { color: "#3576ED" }
                  : {
                      fontSize: "1.1vw",
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
