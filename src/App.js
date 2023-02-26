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
import Window from "./component/window/Window";

export const RwdContext = createContext(null);

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [device, setDevice] = useState("desktop");
  const [activeGame, setActiveGame] = useState(0);
  const [lang, setLang] = useState("zh-TW");
  const [containerRender, setContainerRender] = useState(false);
  const [paymentRender, setPaymentRender] = useState(false);
  const [businessRender, setBusinessRender] = useState(false);
  const [platformRender, setPlatformRender] = useState(false);
  const [officialRender, setOfficialRender] = useState(false);
  const [open, setModalOpen] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const superEle = document.getElementById(2);
      const gameEle = document.getElementById(3);
      const paymentEle = document.getElementById(4);
      const businessEle = document.getElementById(5);
      const PlatformEle = document.getElementById(6);
      const OfficialEle = document.getElementById(7);
      const yOffset = document.getElementById("navbar").offsetHeight;

      const superOffset = superEle.offsetTop;
      const gameOffset = gameEle.offsetTop;
      const paymentOffset = paymentEle.offsetTop + yOffset;
      const businessOffset =
        yOffset +
        superEle.offsetTop +
        businessEle.offsetTop +
        businessEle.clientHeight +
        paymentEle.clientHeight;
      const PlatformOffset =
        yOffset +
        superEle.clientHeight +
        PlatformEle.offsetTop +
        PlatformEle.clientHeight +
        businessEle.clientHeight +
        paymentEle.clientHeight;

      window.addEventListener("scroll", () => {
        if (window.pageYOffset < superOffset) {
          setActiveSection(1);
        }

        if (
          window.pageYOffset > superOffset &&
          window.pageYOffset < gameOffset
        ) {
          setActiveSection(2);
        }

        if (
          window.pageYOffset > gameOffset &&
          window.pageYOffset < paymentOffset
        ) {
          setContainerRender(true);
          setActiveSection(3);
        } else {
          setContainerRender(false);
        }
        if (window.pageYOffset > paymentOffset) {
          setPaymentRender(true);
          setActiveSection(4);
        } else {
          setPaymentRender(false);
        }

        if (window.pageYOffset > businessOffset) {
          setBusinessRender(true);
          setActiveSection(5);
        } else {
          setBusinessRender(false);
        }

        if (window.pageYOffset > PlatformOffset) {
          setPlatformRender(true);
          setOfficialRender(true);
          setActiveSection(6);
        } else {
          setPlatformRender(false);
          setOfficialRender(false);
        }

        if (
          window.pageYOffset + window.innerHeight - yOffset >
          document.body.scrollHeight
        ) {
          setActiveSection(7);
        }
      });
    }
  }, []);

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
      <div className="App">
        <Window
          lang={lang}
          open={open}
          setModalOpen={setModalOpen}
          device={device}
        />
        <div
          className="appWrapper"
          style={
            open
              ? {
                  backgroundColor: "rgba(18, 17, 17, 0.525)",
                  filter: "brightness(50%)",
                }
              : {}
          }
        >
          <Navbar
            setLang={setLang}
            lang={lang}
            setModalOpen={setModalOpen}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <Banner lang={lang} id={1} />

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
              content={<Screen lang={lang} />}
              lang={lang}
            />
          ) : (
            [
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
                lang={lang}
              />,
              <div className="slideContainer" style={{ height: "70vw" }}>
                <h1 className="title">
                  {lang === "zh-TW"
                    ? "支持全球多幣種 同時經營多個國家"
                    : lang === "zh-CN"
                    ? "支持全球多币种 同时经营多个国家"
                    : lang === "eng" &&
                      "Support multi-currency site helps manage global player in one site"}
                </h1>
                <Slide_1
                  device={device}
                  style={{ width: "60vw" }}
                  lang={lang}
                />
              </div>,
              <div className="slideContainer" style={{ height: "180vw" }}>
                <h1 className="title">
                  {lang === "zh-TW"
                    ? "2K高清畫質 原生穩定流暢"
                    : lang === "zh-CN"
                    ? "2K高清画质 原生稳定流畅"
                    : lang === "eng" &&
                      "2K HD quality native games stable and smooth"}
                </h1>
                <Slide_2 device={device} />
              </div>,
              <div className="slideContainer" style={{ height: "180vw" }}>
                <h1 className="title">
                  {lang === "zh-TW"
                    ? "活動任務全自動 網游式一鍵領取"
                    : lang === "zh-CN"
                    ? "活动任务全自动 网游式一键领取"
                    : lang === "eng" &&
                      "Automation event and mission just in one-click"}
                </h1>
                <Slide_3 device={device} />
              </div>,
              <div className="slideContainer">
                <h1 className="title">
                  {lang === "zh-TW"
                    ? "支持20多種語言 覆蓋全球95%人群"
                    : lang === "zh-CN"
                    ? "支持20多种语言 覆盖全球95%人群"
                    : lang === "eng" &&
                      "Support more than 20 languages, covering 95% of the world's population"}
                </h1>
                <Slide_4 device={device} lang={lang} />
              </div>,
              <div className="slideContainer">
                <h1 className="title">
                  {lang === "zh-TW"
                    ? "收費低廉合理 服務真誠用心"
                    : lang === "zh-CN"
                    ? "收费低廉合理 服务真诚用心"
                    : lang === "eng" && "Transparent and reasonable pricing"}
                </h1>
                <Slide_5 device={device} />
              </div>,
              <div className="slideContainer" style={{ height: "85vw" }}>
                <h1 className="title">
                  {lang === "zh-TW"
                    ? "對賭互刷監測 出款自動校驗"
                    : lang === "zh-CN"
                    ? "对赌互刷监测 出款自动校验"
                    : lang === "eng" &&
                      "Gaming monitoring automatic payment verification"}
                </h1>
                <Slide_6 device={device} lang={lang} />
              </div>,
              <div className="slideContainer" style={{ height: "180vw" }}>
                <h1 className="title">
                  {lang === "zh-TW"
                    ? "房間局自動引流 俱樂部直接躺賺"
                    : lang === "zh-CN"
                    ? "房间局自动引流 俱乐部直接躺赚"
                    : lang === "eng" && "Friend invite room and Clubhouse mode"}
                </h1>
                <Slide_7 device={device} />
              </div>,
              <div
                className="slideContainer"
                style={{ height: "60vw", width: "100%" }}
              >
                <h1 className="title">
                  {lang === "zh-TW"
                    ? "全方位抗攻擊 數據不可破解"
                    : lang === "zh-CN"
                    ? "全方位抗攻击 数据不可破解"
                    : lang === "eng" && "Stable system, secure data"}
                </h1>
                <Slide_8 device={device} lang={lang} />
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
            content={
              <Container lang={lang} containerRender={containerRender} />
            }
            lang={lang}
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
            content={<Payment lang={lang} paymentRender={paymentRender} />}
            lang={lang}
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
            content={<Business lang={lang} businessRender={businessRender} />}
            lang={lang}
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
            content={<Platform platformRender={platformRender} />}
            lang={lang}
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
            content={<Official lang={lang} officialRender={officialRender} />}
            lang={lang}
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
