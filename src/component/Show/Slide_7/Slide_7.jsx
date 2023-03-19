import { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import "./Slide_7.scss";

const Slide_7 = ({ device, hover, lang }) => {
  const images =
    lang === "zh-TW"
      ? [
          "/img/slide_7_1.png",
          "/img/slide_7_2.png",
          "/img/slide_7_3.png",
          "/img/slide_7_4.png",
          "/img/slide_7_5.png",
          "/img/slide_7_6.png",
          "/img/slide_7_7.png",
          "/img/slide_7_8.png",
          "/img/slide_7_9.png",
        ]
      : lang === "eng"
      ? [
          "/img/slide_7_1_en.png",
          "/img/slide_7_2_en.png",
          "/img/slide_7_3_en.png",
          "/img/slide_7_4_en.png",
          "/img/slide_7_5_en.png",
          "/img/slide_7_6_en.png",
          "/img/slide_7_7_en.png",
          "/img/slide_7_8_en.png",
          "/img/slide_7_9_en.png",
        ]
      : [
          "/img/slide_7_1_sim.png",
          "/img/slide_7_2_sim.png",
          "/img/slide_7_3_sim.png",
          "/img/slide_7_4_sim.png",
          "/img/slide_7_5_sim.png",
          "/img/slide_7_6_sim.png",
          "/img/slide_7_7_sim.png",
          "/img/slide_7_8_sim.png",
          "/img/slide_7_9_sim.png",
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
    <div className="container-7">
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
        className="carousel-7"
        style={
          device === "desktop"
            ? { transform: `translateX(-${slide * 13}vw)` }
            : {
                transform: `translateX(-${slide * 74}vw)`,
                fontSize: "3vw",
                background: "none",
                gap: "4vw",
                padding: "0 20vw",
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
  );
};
export default Slide_7;
