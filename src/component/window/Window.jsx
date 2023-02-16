import React from "react";
import "./Window.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Window = ({ lang, open, setModalOpen, device }) => {
  return (
    <div
      className="window"
      style={
        open
          ? {
              display: "flex",
            }
          : {}
      }
    >
      <CloseIcon
        color="info"
        fontSize="large"
        style={
          device === "desktop"
            ? {
                cursor: "pointer",
                position: "absolute",
                top: "10px",
                right: "10px",
              }
            : {
                cursor: "pointer",
                position: "absolute",
                top: "10px",
                right: "10px",
              }
        }
        onClick={() => {
          setModalOpen(false);
        }}
      />
      <h1>
        {lang === "zh-TW"
          ? "全新3.1：支持全球幣種，同時經營多個國家"
          : lang === "eng"
          ? "Brand new 3.1: supports global currency at the same time"
          : lang === "zh-CN" && "全新3.1：支持全球币种，同时经营多个国家"}
      </h1>
      <h2>
        {lang === "zh-TW"
          ? "10分鐘自助開站，遷移免6000U開站費（僅限2月28日前)"
          : lang === "eng"
          ? "Transfer site free 6000U construction fee, Only 10 mins build up site(Before 28 Feb)"
          : lang === "zh-CN" && "全新3.1：支持全球币种，同时经营多个国家"}
      </h2>
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
            <p>Multi-currency site</p>
          ) : (
            lang === "zh-CN" && <p>多币种站点（同时支持全球货币）</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Window;
