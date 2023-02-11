import React from "react";
import "./Official.scss";
import { useContext } from "react";
import { RwdContext } from "../../App";
import { border } from "@mui/system";

const Official = () => {
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
                <p>Trc20地址：</p>
                <p>複製</p>
              </div>
              <p className="address">TNraQpXKQxaxJtr5DJ4LwsWVDePpi4GUUK</p>
              <p className="warning">認準以上地址，謹防被騙</p>
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
                <p>Trc20地址：</p>
                <p>複製</p>
              </div>
              <p className="address">TNraQpXKQxaxJtr5DJ4LwsWVDePpi4GUUK</p>
              <p className="warning">認準以上地址，謹防被騙</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="box"
            style={{ width: "80%", height: "55vw", alignItems: "flex-start" }}
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
              <img src="/img/official_1.gif" alt="" style={{ width: "20vw" }} />
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
            </div>

            <div className="right" style={{ width: "50%" }}>
              <div className="qrcode" style={{ border: "none" }}>
                <img src="/img/qr1.gif" alt="" />
              </div>
              <div className="add">
                <p style={{ fontSize: "3vw" }}>Trc20地址：</p>
                <p style={{ fontSize: "3vw" }}>複製</p>
              </div>
              <p className="address" style={{ fontSize: "3vw" }}>
                TNraQpXKQxaxJtr5DJ4LwsWVDePpi4GUUK
              </p>
              <p className="warning" style={{ fontSize: "3vw" }}>
                認準以上地址，謹防被騙
              </p>
            </div>
          </div>
          <div
            className="box"
            style={{ width: "80%", height: "55vw", alignItems: "flex-start" }}
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
              <img src="/img/official_2.gif" alt="" style={{ width: "20vw" }} />
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
            </div>

            <div className="right" style={{ width: "50%" }}>
              <div className="qrcode" style={{ border: "none" }}>
                <img src="/img/qr2.gif" alt="" />
              </div>
              <div className="add">
                <p style={{ fontSize: "2.5vw" }}>Trc20地址：</p>
                <p style={{ fontSize: "2.5vw" }}>複製</p>
              </div>
              <p className="address" style={{ fontSize: "2.5vw" }}>
                TNraQpXKQxaxJtr5DJ4LwsWVDePpi4GUUK
              </p>
              <p className="warning" style={{ fontSize: "2.5vw" }}>
                認準以上地址，謹防被騙
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Official;
