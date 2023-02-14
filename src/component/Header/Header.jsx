import React from "react";
import { useContext } from "react";
import { RwdContext } from "../../App";
import "./Header.scss";

const Header = ({ lang }) => {
  const { activeGame, setActiveGame, device } = useContext(RwdContext);

  return (
    <div
      className="header"
      style={
        device === "desktop"
          ? {}
          : {
              gap: "1.8vw",
            }
      }
    >
      <h2
        onClick={() => {
          setActiveGame(0);
        }}
        style={
          activeGame === 0
            ? {
                color: "#3764EA",
                borderBottom: "3px solid #3764EA",
                paddingBottom: "3px",
                borderRadius: "2px",
              }
            : {}
        }
      >
        {lang === "zh-TW"
          ? "全部"
          : lang === "zh-CN"
          ? "全部"
          : lang === "eng" && "All"}
      </h2>
      <h2
        onClick={() => {
          setActiveGame(1);
        }}
        style={
          activeGame === 1
            ? {
                color: "#3764EA",
                borderBottom: "3px solid #3764EA",
                paddingBottom: "3px",
                borderRadius: "2px",
              }
            : {}
        }
      >
        {lang === "zh-TW"
          ? "棋牌"
          : lang === "zh-CN"
          ? "棋牌"
          : lang === "eng" && "Cards"}
      </h2>
      <h2
        onClick={() => {
          setActiveGame(2);
        }}
        style={
          activeGame === 2
            ? {
                color: "#3764EA",
                borderBottom: "3px solid #3764EA",
                paddingBottom: "3px",
                borderRadius: "2px",
              }
            : {}
        }
      >
        {lang === "zh-TW"
          ? "電子"
          : lang === "zh-CN"
          ? "电子"
          : lang === "eng" && "Slot"}
      </h2>
      <h2
        onClick={() => {
          setActiveGame(3);
        }}
        style={
          activeGame === 3
            ? {
                color: "#3764EA",
                borderBottom: "3px solid #3764EA",
                paddingBottom: "3px",
                borderRadius: "2px",
              }
            : {}
        }
      >
        {lang === "zh-TW"
          ? "捕魚"
          : lang === "zh-CN"
          ? "捕鱼"
          : lang === "eng" && "Fishing"}
      </h2>
    </div>
  );
};

export default Header;
