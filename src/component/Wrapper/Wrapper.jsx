import React from "react";
import "./Wrapper.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Header from "../Header/Header";
import { useContext } from "react";
import { RwdContext } from "../../App";

const Wrapper = ({ title, subTitle, id, content, lang, url }) => {
  const { device } = useContext(RwdContext);
  return (
    <div className="wrapper" id={id}>
      <div
        className="top"
        style={device === "desktop" ? {} : { marginBottom: "1vw" }}
      >
        <div
          className="left"
          style={device === "desktop" ? {} : { gap: "1.5vw" }}
        >
          <h1 style={device === "desktop" ? {} : { fontSize: "3vw" }}>
            {title}
          </h1>
          <p> | </p>
          {subTitle?.type === "header" ? (
            <Header lang={lang} />
          ) : (
            <div className="function">
              <a
                href={url} 
                target="_blank"
                style={
                  device === "desktop"
                    ? subTitle?.type === "link"
                      ? { 
                        color: "#0b64ea",
                        fontSize: "2vw",
                      }
                      : {
                          color: "#9A9B9D",
                          "&:hover": "none",
                        }
                    : subTitle?.type === "link"
                    ? {
                        color: "#0b64ea",
                        fontSize: "3vw",
                      }
                    : {
                        color: "#9A9B9D",
                        fontSize: "2vw",
                        "&:hover": "none",
                      }
                }
              >
                {subTitle?.text}
              </a>
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
        
      </div>
      <div className="bottom">{content && content}</div>
    </div>
  );
};

export default Wrapper;
