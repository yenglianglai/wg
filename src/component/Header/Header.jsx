import React from "react";
import { useContext } from "react";
import { RwdContext } from "../../App";
import "./Header.scss";

const Header = () => {
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
        全部
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
        棋牌
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
        電子
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
        捕魚
      </h2>
    </div>
  );
};

export default Header;
