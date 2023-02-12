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
          <Navbar />
          <Banner />

          {device === "desktop" ? (
            <Wrapper
              title={"超級包網"}
              subTitle={{ type: "link", text: "立即體驗" }}
              id={2}
              content={<Screen />}
            />
          ) : (
            [
              <Wrapper
                title={"超級包網"}
                subTitle={{ type: "link", text: "立即體驗" }}
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
            title={"遊戲API"}
            subTitle={{ type: "header" }}
            id={3}
            content={<Container />}
          />
          <Wrapper
            title={"支付內循環"}
            subTitle={{ type: "link", text: "聯繫商務" }}
            id={4}
            content={<Payment />}
          />
          <Wrapper
            title={"超級引流"}
            subTitle={{ type: "link", text: "聯繫商務" }}
            id={5}
            content={<Business />}
          />
          <Wrapper
            title={"合作平台"}
            subTitle={{ type: "text", text: "只展示部分，排名不分先後" }}
            id={6}
            content={<Platform />}
          />
          <Wrapper
            title={"官方商務"}
            subTitle={{
              type: "text",
              text: "只認準以下商務人員，其他勿信，謹防被騙",
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
