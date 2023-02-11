import React from "react";
import "./Wrapper.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Header from "../Header/Header";
import { useContext } from "react";
import { RwdContext } from "../../App";

const Wrapper = ({ title, subTitle, id, content }) => {
  const { device } = useContext(RwdContext);
  return (
    <div className="wrapper" id={id}>
      <div className="top">
        <div className="left">
          <h1 style={device === "desktop" ? {} : { fontSize: "3vw" }}>
            {title}
          </h1>
          <p> | </p>
          {subTitle?.type === "header" ? (
            <Header />
          ) : (
            <div className="function">
              <p
                style={
                  device === "desktop"
                    ? subTitle?.type === "link"
                      ? { color: "#0b64ea" }
                      : { color: "#9A9B9D" }
                    : subTitle?.type === "link"
                    ? {
                        color: "#0b64ea",
                        fontSize: "3vw",
                      }
                    : {
                        color: "#9A9B9D",
                        fontSize: "2vw",
                      }
                }
              >
                {subTitle?.text}
              </p>
              {subTitle?.type === "link" && (
                <KeyboardArrowRightIcon
                  color="info"
                  fontSize="large"
                  style={{ marginLeft: "-10px" }}
                />
              )}
            </div>
          )}
        </div>
        <div className="right">
          {subTitle?.type === "link" && (
            <img
              src="/img/discount.png"
              alt=""
              style={device === "desktop" ? {} : { width: "30vw" }}
            />
          )}
        </div>
      </div>
      <div className="bottom">{content && content}</div>
    </div>
  );
};

export default Wrapper;
