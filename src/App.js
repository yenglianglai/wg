import "./App.scss";
import Banner from "./component/Banner/Banner";
import Navbar from "./component/Navbar/Navbar";
import Wrapper from "./component/Wrapper/Wrapper";
import Screen from "./component/Screen/Screen";
import Payment from "./component/Payment/Payment";
import { createContext, useEffect, useState } from "react";
import Container from "./component/Games/Container/Container";
import Business from "./component/Business/Business";
import Platform from "./component/Platform/Platform";
import Official from "./component/Official/Official";
import Slide_1 from "./component/Show/Slide_1/Slide_1";
import Slide_2 from "./component/Show/Slide_2/Slide_2";
import Slide_3 from "./component/Show/Slide_3/Slide_3";
import Slide_4 from "./component/Show/Slide_4/Slide_4";
import Slide_5 from "./component/Show/Slide_5/Slide_5";
import Slide_6 from "./component/Show/Slide_6/Slide_6";
import Slide_7 from "./component/Show/Slide_7/Slide_7";
import Slide_8 from "./component/Show/Slide_8/Slide_8";

export const RwdContext = createContext(null);

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [device, setDevice] = useState("desktop");
  const [activeGame, setActiveGame] = useState(0);
  const [lang, setLang] = useState("zh-TW");
  console.log(lang);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    switch (true) {
      case width >= 1260:
        setDevice("desktop");
        break;
      case width < 1260:
        setDevice("mobile");
        break;
      default:
        setDevice("desktop");
        break;
    }
  }, [width]);

  return (
    <RwdContext.Provider value={{ device, setActiveGame, activeGame }}>
      <div
        className="App"
        // style={device === "desktop" ? {} : { padding: "0 10px" }}
      >
        <div className="appWrapper">
          <Navbar setLang={setLang} />
          <Banner />

          {device === "desktop" ? (
            <Wrapper
              title={
                lang === "zh-TW"
                  ? "超級包網"
                  : lang === "zh-CN"
                  ? "超级包网"
                  : lang === "eng" && "Saas Super System"
              }
              subTitle={{
                type: "link",
                text:
                  lang === "zh-TW"
                    ? "立即體驗"
                    : lang === "zh-CN"
                    ? "立即体验"
                    : lang === "eng" && "Visit demo site",
              }}
              id={2}
              content={<Screen />}
            />
          ) : (
            [
              <Wrapper
                title={"超級包網"}
                subTitle={{
                  type: "link",
                  text:
                    lang === "zh-TW"
                      ? "立即體驗"
                      : lang === "zh-CN"
                      ? "立即体验"
                      : lang === "eng" && "Visit demo site",
                }}
                id={2}
              />,
              <div className="slideContainer" style={{ height: "70vw" }}>
                <h1 className="title">支持全球多幣種 同時經營多個國家</h1>
                <Slide_1 device={device} style={{ width: "60vw" }} />
              </div>,
              <div className="slideContainer" style={{ height: "180vw" }}>
                <h1 className="title">2K高清畫質 原生穩定流暢</h1>
                <Slide_2 device={device} />
              </div>,
              <div className="slideContainer" style={{ height: "180vw" }}>
                <h1 className="title">活動任務全自動 網游式一鍵領取</h1>
                <Slide_3 device={device} />
              </div>,
              <div className="slideContainer">
                <h1 className="title">支持20多種語言 覆蓋全球95%人群</h1>
                <Slide_4 device={device} />
              </div>,
              <div className="slideContainer">
                <h1 className="title">收費低廉合理 服務真誠用心</h1>
                <Slide_5 device={device} />
              </div>,
              <div className="slideContainer" style={{ height: "85vw" }}>
                <h1 className="title">對賭互刷監測 出款自動校驗</h1>
                <Slide_6 device={device} />
              </div>,
              <div className="slideContainer" style={{ height: "180vw" }}>
                <h1 className="title">房間局自動引流 俱樂部直接躺賺</h1>
                <Slide_7 device={device} />
              </div>,
              <div
                className="slideContainer"
                style={{ height: "60vw", width: "100%" }}
              >
                <h1 className="title">全方位抗攻擊 數據不可破解</h1>
                <Slide_8 device={device} />
              </div>,
            ]
          )}

          <Wrapper
            title={
              lang === "zh-TW"
                ? "遊戲API"
                : lang === "zh-CN"
                ? "游戏API"
                : lang === "eng" && "Game API"
            }
            subTitle={{ type: "header" }}
            id={3}
            content={<Container />}
          />
          <Wrapper
            title={
              lang === "zh-TW"
                ? "支付內循環"
                : lang === "zh-CN"
                ? "支付内循环"
                : lang === "eng" && "Pay system Inner Loop"
            }
            subTitle={{
              type: "link",
              text:
                lang === "zh-TW"
                  ? "聯繫商務"
                  : lang === "zh-CN"
                  ? "联系商务"
                  : lang === "eng" && "Contact WG",
            }}
            id={4}
            content={<Payment />}
          />
          <Wrapper
            title={
              lang === "zh-TW"
                ? "超級引流"
                : lang === "zh-CN"
                ? "超级引流"
                : lang === "eng" && "Super Promotion System"
            }
            subTitle={{
              type: "link",
              text:
                lang === "zh-TW"
                  ? "聯繫商務"
                  : lang === "zh-CN"
                  ? "联系商务"
                  : lang === "eng" && "Contact WG",
            }}
            id={5}
            content={<Business />}
          />
          <Wrapper
            title={
              lang === "zh-TW"
                ? "合作平台"
                : lang === "zh-CN"
                ? "支付内循环"
                : lang === "eng" && "Cooperater"
            }
            subTitle={{
              type: "text",
              text:
                lang === "zh-TW"
                  ? "只展示部分，排名不分先後"
                  : lang === "zh-CN"
                  ? "只展示部分，排名不分先后"
                  : lang === "eng" &&
                    "Just show part of our provider, no particular order",
            }}
            id={6}
            content={<Platform />}
          />
          <Wrapper
            title={
              lang === "zh-TW"
                ? "官方商務"
                : lang === "zh-CN"
                ? "官方商务"
                : lang === "eng" && "Official Sales"
            }
            subTitle={{
              type: "text",
              text:
                lang === "zh-TW"
                  ? "只認準以下商務人員，其他誤信，謹防被騙"
                  : lang === "zh-CN"
                  ? "只认准以下商务人员，其他勿信，谨防被骗"
                  : lang === "eng" && "Official contacts",
            }}
            id={7}
            content={<Official />}
          />
        </div>
        <div className="footer">
          Copyright © 2023 Win Gaming All Rights Reserved
        </div>
      </div>
    </RwdContext.Provider>
  );
}

export default App;
