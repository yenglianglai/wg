import "./Slide_2.scss";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

const Slide_2 = ({ device, hover, lang }) => {
  const images =
    lang === "zh-TW"
      ? [
          "/img/slide_2_1.png",
          "/img/slide_2_2.png",
          "/img/slide_2_3.png",
          "/img/slide_2_4.png",
          "/img/slide_2_5.png",
          "/img/slide_2_6.png",
          "/img/slide_2_7.png",
          "/img/slide_2_8.png",
          "/img/slide_2_9.png",
          "/img/slide_2_10.png",
        ]
      : lang === "eng"
      ? [
          "/img/slide_2_1_en.png",
          "/img/slide_2_2_en.png",
          "/img/slide_2_3_en.png",
          "/img/slide_2_4_en.png",
          "/img/slide_2_5_en.png",
          "/img/slide_2_6_en.png",
          "/img/slide_2_7_en.png",
          "/img/slide_2_8_en.png",
          "/img/slide_2_9_en.png",
          "/img/slide_2_10_en.png",
        ]
      : [
          "/img/slide_2_1_sim.png",
          "/img/slide_2_2_sim.png",
          "/img/slide_2_3_sim.png",
          "/img/slide_2_4_sim.png",
          "/img/slide_2_5_sim.png",
          "/img/slide_2_6_sim.png",
          "/img/slide_2_7_sim.png",
          "/img/slide_2_8_sim.png",
          "/img/slide_2_9_sim.png",
          "/img/slide_2_10_sim.png",
        ];
  const [slide, setSlide] = useState(0);
  console.log(slide);
  const CustomRightArrow = ({ onClick }) => {
    function handleClick() {
      onClick();
    }
    return (
      <button
        onClick={handleClick}
        className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
        id="react-multiple-carousel__arrow--right"
        style={
          hover
            ? {}
            : device === "desktop"
            ? { display: "none" }
            : {
                width: "10vw",
                height: "10vw",
                borderRadius: "50%",
              }
        }
      />
    );
  };
  const CustomLeftArrow = ({ onClick }) => {
    function handleClick() {
      onClick();
    }
    return (
      <button
        onClick={handleClick}
        className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
        style={
          hover
            ? {}
            : device === "desktop"
            ? { display: "none" }
            : {
                width: "10vw",
                height: "10vw",
                borderRadius: "50%",
              }
        }
      />
    );
  };

  return (
    <div className="slide_2">
      <div className="container-2">
        <CustomLeftArrow
          className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
          onClick={
            slide === 0
              ? () => {}
              : () => {
                  setSlide((slide) => slide - 1);
                }
          }
        />
        <div
          className="carousel-2"
          style={
            device === "desktop"
              ? {
                  transform: `translateX(-${slide * 13}vw)`,
                }
              : {
                  transform: `translateX(-${slide * 74}vw)`,
                  fontSize: "3vw",
                  background: "none",
                  gap: "4vw",
                  padding: "0 15vw",
                }
          }
        >
          {images.map((image, i) => (
            <div className="carousel-item" key={i}>
              <img
                src={image}
                id={`slide_${i}`}
                style={
                  device === "desktop"
                    ? { width: "11vw" }
                    : {
                        width: "70vw",
                      }
                }
              />
            </div>
          ))}
        </div>
        <CustomRightArrow
          className="react-multiple-carousel__arrow--right"
          onClick={
            device === "desktop"
              ? slide === images.length - 5
                ? () => {}
                : () => {
                    setSlide((slide) => slide + 1);
                  }
              : slide === images.length - 1
              ? () => {}
              : () => {
                  setSlide((slide) => slide + 1);
                }
          }
        />
      </div>
      <div
        className="progress"
        style={
          device === "desktop"
            ? {
                display: "none",
              }
            : {}
        }
      >
        {images.map((i, id) => (
          <div
            className="dot"
            key={id}
            style={
              id === slide
                ? {
                    backgroundColor: "#0d65ea",
                    width: "3.5vw",
                    borderRadius: "15px",
                  }
                : {}
            }
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Slide_2;
