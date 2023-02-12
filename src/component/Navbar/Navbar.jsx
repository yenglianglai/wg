import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Navbar.scss";
import { useContext } from "react";
import { RwdContext } from "../../App";
const Navbar = () => {
  const [active, setActive] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const { device } = useContext(RwdContext);

  const items = [
    {
      id: 1,
      title: "關於WG",
    },
    {
      id: 2,
      title: "超級包網",
    },
    {
      id: 3,
      title: "遊戲API",
    },
    {
      id: 4,
      title: "支付內循環",
    },
    {
      id: 5,
      title: "超級引流",
    },
    {
      id: 6,
      title: "合作平台",
    },
    {
      id: 7,
      title: "官方商務",
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
            src="/img/LOGO.jpg"
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

                      console.log(yOffset);
                      const element = document.getElementById(item.id);
                      const y =
                        element.getBoundingClientRect().top +
                        window.pageYOffset -
                        yOffset;

                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  : () => {
                      setActive(item.id);
                      window.scrollTo({ top: 80, behavior: "smooth" });
                    }
              }
            >
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div className="right">
          <button
            onClick={() => setToggle(!toggle)}
            style={device === "desktop" ? {} : { width: "25vw" }}
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
                      fontSize: "3vw",
                    }
              }
            >
              繁体中文
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
            <div className="language">
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
            <div className="language">
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
            <div className="language">
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
                      height: "80vw",
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
                        }
                      : () => {
                          setActive(item.id);
                          window.scrollTo({ top: 80, behavior: "smooth" });
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
