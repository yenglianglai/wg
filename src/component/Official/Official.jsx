import React from "react";
import "./Official.scss";
import { useContext } from "react";
import { RwdContext } from "../../App";
import { border } from "@mui/system";

const Official = ({ lang }) => {
  const { device } = useContext(RwdContext);
  return (
    <div
      className="official"
      style={device === "desktop" ? {} : { flexDirection: "column" }}
    >
      {device === "desktop" ? (
        <>
          <div
            className="box"
            style={device === "desktop" ? {} : { width: "80%" }}
          >
            <div className="left">
              <img src="/img/official_1.gif" alt="" />
            </div>

            <div className="mid">
              <div className="link">
                <div className="social">
                  <img src="/img/telegram.png" alt="" />
                  <p>@WGUni</p>
                </div>
                <div className="social">
                  <img src="/img/skype.png" alt="" />
                  <p>Uni@wg.com</p>
                </div>

                <div className="social">
                  <img src="/img/sms.png" alt="" />
                  <p>Uni@wg.com</p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="qrcode">
                <img src="/img/qr1.gif" alt="" />
              </div>
              <div className="add">
                <p>
                  {lang === "zh-TW"
                    ? "Trc20地址："
                    : lang === "zh-CN"
                    ? "Trc20地址"
                    : lang === "eng" && "Trc20:"}
                </p>
                <p>
                  {lang === "zh-TW"
                    ? "複製："
                    : lang === "zh-CN"
                    ? "复制"
                    : lang === "eng" && "Copy"}
                </p>
              </div>
              <p className="address">TNraQpXKQxaxJtr5DJ4LwsWVDePpi4GUUK</p>
              <p className="warning">
                {lang === "zh-TW"
                  ? "認準以上地址，謹防被騙"
                  : lang === "zh-CN"
                  ? "认准以上地址，谨防被骗"
                  : lang === "eng" && "Confirm payment address, prevent scam"}
              </p>
            </div>
          </div>
          <div
            className="box"
            style={device === "desktop" ? {} : { width: "80%" }}
          >
            <div className="left">
              <img src="/img/official_2.gif" alt="" />
            </div>
            <div className="mid">
              <div className="link">
                <div className="social">
                  <img src="/img/telegram.png" alt="" />
                  <p>@WGUni</p>
                </div>
                <div className="social">
                  <img src="/img/skype.png" alt="" />
                  <p>Uni@wg.com</p>
                </div>

                <div className="social">
                  <img src="/img/sms.png" alt="" />
                  <p>Uni@wg.com</p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="qrcode">
                <img src="/img/qr1.gif" alt="" />
              </div>
              <div className="add">
                <p>
                  {lang === "zh-TW"
                    ? "Trc20地址："
                    : lang === "zh-CN"
                    ? "Trc20地址"
                    : lang === "eng" && "Trc20:"}
                </p>
                <p>
                  {lang === "zh-TW"
                    ? "複製："
                    : lang === "zh-CN"
                    ? "复制"
                    : lang === "eng" && "Copy"}
                </p>
              </div>
              <p className="address">TNraQpXKQxaxJtr5DJ4LwsWVDePpi4GUUK</p>
              <p className="warning">
                {lang === "zh-TW"
                  ? "認準以上地址，謹防被騙"
                  : lang === "zh-CN"
                  ? "认准以上地址，谨防被骗"
                  : lang === "eng" && "Confirm payment address, prevent scam"}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="box"
            style={{
              width: "80%",
              height: "55vw",
              alignItems: "center",
            }}
          >
            <div
              className="left"
              style={{
                display: "flex",
                flexDirection: "column",
                border: "none",
                width: "50%",
                alignItems: "flex-start",
              }}
            >
              <div className="imgContainer">
                <img
                  src="/img/official_1.gif"
                  alt=""
                  style={{ width: "13vw", borderRadius: "15px" }}
                />
              </div>
              <div className="mid">
                <div className="link" style={{ gap: "4vw" }}>
                  <div className="social">
                    <img
                      src="/img/telegram.png"
                      alt=""
                      style={{ width: "6vw" }}
                    />
                    <p style={{ fontSize: "2.5vw" }}>@WGUni</p>
                  </div>
                  <div className="social">
                    <img src="/img/skype.png" alt="" style={{ width: "6vw" }} />
                    <p style={{ fontSize: "2.5vw" }}>Uni@wg.com</p>
                  </div>

                  <div className="social">
                    <img src="/img/sms.png" alt="" style={{ width: "6vw" }} />
                    <p style={{ fontSize: "2.5vw" }}>Uni@wg.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="right" style={{ width: "50%", gap: "25px" }}>
              <div className="qrcode" style={{ border: "none" }}>
                <img src="/img/qr1.gif" alt="" style={{ width: "17vw" }} />
              </div>
              <div className="add" style={{ marginTop: "50px" }}>
                <p style={{ fontSize: "3vw" }}>
                  {lang === "zh-TW"
                    ? "Trc20地址："
                    : lang === "zh-CN"
                    ? "Trc20地址"
                    : lang === "eng" && "Trc20:"}
                </p>
                <p style={{ fontSize: "3vw" }}>
                  {lang === "zh-TW"
                    ? "複製："
                    : lang === "zh-CN"
                    ? "复制"
                    : lang === "eng" && "Copy"}
                </p>
              </div>
              <p className="address" style={{ fontSize: "3vw" }}>
                TNraQpXKQxaxJtr5DJ4LwsWVDePpi4GUUK
              </p>
              <p className="warning" style={{ fontSize: "3vw" }}>
                {lang === "zh-TW"
                  ? "認準以上地址，謹防被騙"
                  : lang === "zh-CN"
                  ? "认准以上地址，谨防被骗"
                  : lang === "eng" && "Confirm payment address, prevent scam"}
              </p>
            </div>
          </div>
          <div
            className="box"
            style={{ width: "80%", height: "55vw", alignItems: "center" }}
          >
            <div
              className="left"
              style={{
                display: "flex",
                flexDirection: "column",
                border: "none",
                width: "50%",
                alignItems: "flex-start",
              }}
            >
              <img
                src="/img/official_2.gif"
                alt=""
                style={{ width: "13vw", borderRadius: "15px" }}
              />
              <div className="mid">
                <div className="link" style={{ gap: "4vw" }}>
                  <div className="social">
                    <img
                      src="/img/telegram.png"
                      alt=""
                      style={{ width: "6vw" }}
                    />
                    <p style={{ fontSize: "2.5vw" }}>@WGUni</p>
                  </div>
                  <div className="social">
                    <img src="/img/skype.png" alt="" style={{ width: "6vw" }} />
                    <p style={{ fontSize: "2.5vw" }}>Uni@wg.com</p>
                  </div>

                  <div className="social">
                    <img src="/img/sms.png" alt="" style={{ width: "6vw" }} />
                    <p style={{ fontSize: "2.5vw" }}>Uni@wg.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="right" style={{ width: "50%", gap: "25px" }}>
              <div className="qrcode" style={{ border: "none" }}>
                <img src="/img/qr2.gif" alt="" style={{ width: "17vw" }} />
              </div>
              <div className="add" style={{ marginTop: "50px" }}>
                <p style={{ fontSize: "3vw" }}>
                  {lang === "zh-TW"
                    ? "Trc20地址："
                    : lang === "zh-CN"
                    ? "Trc20地址"
                    : lang === "eng" && "Trc20:"}
                </p>
                <p style={{ fontSize: "3vw" }}>
                  {lang === "zh-TW"
                    ? "複製："
                    : lang === "zh-CN"
                    ? "复制"
                    : lang === "eng" && "Copy"}
                </p>
              </div>
              <p className="address" style={{ fontSize: "3vw" }}>
                TNraQpXKQxaxJtr5DJ4LwsWVDePpi4GUUK
              </p>
              <p className="warning" style={{ fontSize: "3vw" }}>
                {lang === "zh-TW"
                  ? "認準以上地址，謹防被騙"
                  : lang === "zh-CN"
                  ? "认准以上地址，谨防被骗"
                  : lang === "eng" && "Confirm payment address, prevent scam"}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Official;
