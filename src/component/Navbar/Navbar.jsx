import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Navbar.scss";
import { useContext } from "react";
import { RwdContext } from "../../App";
const Navbar = ({ lang, setLang }) => {
  const [active, setActive] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const { device } = useContext(RwdContext);

  const items = [
    {
      id: 1,
      title:
        lang === "zh-TW"
          ? "關於WG"
          : lang === "zh-CN"
          ? "关于WG"
          : lang === "eng" && "About WG",
    },
    {
      id: 2,
      title:
        lang === "zh-TW"
          ? "超級包網"
          : lang === "zh-CN"
          ? "超级包网"
          : lang === "eng" && "Saas Super System",
    },
    {
      id: 3,
      title:
        lang === "zh-TW"
          ? "遊戲API"
          : lang === "zh-CN"
          ? "游戏API"
          : lang === "eng" && "Game API",
    },
    {
      id: 4,
      title:
        lang === "zh-TW"
          ? "支付內循環"
          : lang === "zh-CN"
          ? "支付内循环"
          : lang === "eng" && "Pay system Inner Loop",
    },
    {
      id: 5,
      title:
        lang === "zh-TW"
          ? "超級引流"
          : lang === "zh-CN"
          ? "超级引流"
          : lang === "eng" && "Super Promotion System",
    },
    {
      id: 6,
      title:
        lang === "zh-TW"
          ? "合作平台"
          : lang === "zh-CN"
          ? "合作平台"
          : lang === "eng" && "Cooperater",
    },
    {
      id: 7,
      title:
        lang === "zh-TW"
          ? "官方商務"
          : lang === "zh-CN"
          ? "官方商务"
          : lang === "eng" && "Official Sales",
    },
  ];
  return (
    <div
      className="navbar"
      id="navbar"
      style={device === "desktop" ? {} : { height: "12vw" }}
    >
      <div className="top">
        <div className="left">
          <img
            src={
              lang === "zh-TW"
                ? "/img/LOGO.jpg"
                : lang === "zh-CN"
                ? "/img/LOGO_sim.png"
                : "/img/LOGO_eng.png"
            }
            alt=""
            style={
              device === "desktop"
                ? {}
                : { width: "45vw", marginLeft: "20px", marginTop: "10px" }
            }
          />
        </div>
        <div
          className="mid"
          style={device === "desktop" ? {} : { display: "none" }}
        >
          {items.map((item, i) => (
            <div
              className="item"
              key={i}
              style={
                active === item.id
                  ? { color: "white", backgroundColor: "#0D65EA" }
                  : {}
              }
              onClick={
                item.id !== 1
                  ? () => {
                      setActive(item.id);
                      const yOffset =
                        document.getElementById("navbar").offsetHeight;

                      // console.log(yOffset);
                      const element = document.getElementById(item.id);
                      const y =
                        element.getBoundingClientRect().top +
                        window.pageYOffset -
                        yOffset;

                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  : () => {
                      setActive(item.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
              }
            >
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div
          className="right"
          style={device === "desktop" ? { marginRight: 0 } : {}}
        >
          <button
            onClick={() => setToggle(!toggle)}
            style={device === "desktop" ? {} : { width: "25vw" }}
          >
            <img
              src={
                lang === "zh-TW"
                  ? "/img/chinese.gif"
                  : lang === "zh-CN"
                  ? "/img/chinese.gif"
                  : lang === "eng" && "/img/english.gif"
              }
              alt=""
              style={
                device === "desktop"
                  ? {}
                  : {
                      width: "5vw",
                      height: "5vw",
                    }
              }
            />
            <p
              style={
                device === "desktop"
                  ? {}
                  : {
                      fontSize: "3vw",
                    }
              }
            >
              {lang === "zh-TW"
                ? "繁體中文"
                : lang === "zh-CN"
                ? "简体中文"
                : lang === "eng" && "English"}
            </p>
            <KeyboardArrowDownIcon
              fontSize="small"
              color="info"
              style={
                toggle
                  ? { transform: "rotate(-180deg)", transition: "all 0.3s" }
                  : {}
              }
            />
          </button>

          <div
            className="toggle"
            id="toggle"
            style={
              toggle
                ? device === "desktop"
                  ? { visibility: "visible" }
                  : {
                      bottom: "calc(-20vw - 20px)",
                      height: "20vw",
                      visibility: "visible",
                    }
                : {}
            }
          >
            <div
              className="language"
              onClick={() => {
                setLang("zh-CN");
                setToggle(!toggle);
              }}
            >
              <img
                src="/img/chinese.gif"
                alt=""
                style={
                  device === "desktop"
                    ? {}
                    : {
                        width: "5vw",
                        height: "5vw",
                      }
                }
              />
              <p
                style={
                  device === "desktop"
                    ? {}
                    : {
                        fontSize: "2.4vw",
                      }
                }
              >
                简体中文
              </p>
            </div>
            <div
              className="language"
              onClick={() => {
                setLang("zh-TW");
                setToggle(!toggle);
              }}
            >
              <img
                src="/img/chinese.gif"
                alt=""
                style={
                  device === "desktop"
                    ? {}
                    : {
                        width: "5vw",
                        height: "5vw",
                      }
                }
              />
              <p
                style={
                  device === "desktop"
                    ? {}
                    : {
                        fontSize: "2.5vw",
                      }
                }
              >
                繁体中文
              </p>
            </div>
            <div
              className="language"
              onClick={() => {
                setLang("eng");
                setToggle(!toggle);
              }}
            >
              <img
                src="/img/english.gif"
                alt=""
                style={
                  device === "desktop"
                    ? {}
                    : {
                        width: "5vw",
                        height: "5vw",
                      }
                }
              />
              <p
                style={
                  device === "desktop"
                    ? {}
                    : {
                        fontSize: "2.5vw",
                      }
                }
              >
                English
              </p>
            </div>
          </div>

          <div
            className="toggleNav"
            style={
              device === "desktop"
                ? {}
                : {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }
            }
          >
            <img
              src="img/toggleNav.png"
              alt=""
              onClick={() => {
                setOpen(!open);
              }}
            />
            <div
              className="mid"
              style={
                device === "desktop"
                  ? { display: "none" }
                  : open
                  ? {
                      width: "50vw",
                      // height: "80vw",
                      flexDirection: "column",
                      alignItems: "center",
                      position: "absolute",
                      bottom: "-80vw",
                      right: "-30px",
                      backgroundColor: "white",
                    }
                  : { display: "none" }
              }
            >
              {items.map((item, i) => (
                <div
                  className="item"
                  key={i}
                  style={
                    active === item.id
                      ? {
                          color: "white",
                          backgroundColor: "#0D65EA",
                          width: "100%",
                        }
                      : { width: "100%" }
                  }
                  onClick={
                    item.id !== 1
                      ? () => {
                          setActive(item.id);
                          const yOffset =
                            document.getElementById("navbar").offsetHeight;
                          const element = document.getElementById(item.id);
                          const y =
                            element.getBoundingClientRect().top +
                            window.pageYOffset -
                            yOffset;

                          window.scrollTo({ top: y, behavior: "smooth" });
                          setOpen(false);
                        }
                      : () => {
                          setActive(item.id);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          setOpen(false);
                        }
                  }
                >
                  <p style={{ fontSize: "3vw" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
