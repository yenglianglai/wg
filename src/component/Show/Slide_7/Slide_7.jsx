import { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import "./Slide_7.scss";

const images = [
  "/img/slide_7_1.png",
  "/img/slide_7_2.png",
  "/img/slide_7_3.png",
  "/img/slide_7_4.png",
  "/img/slide_7_5.png",
  "/img/slide_7_6.png",
  "/img/slide_7_7.png",
  "/img/slide_7_8.png",
  "/img/slide_7_9.png",
];

const Slide_7 = ({ device, hover }) => {
  const [slide, setSlide] = useState(1);
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
    <div className="container">
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
        className="carousel"
        style={
          device === "desktop"
            ? { transform: `translateX(-${slide * 170}px)` }
            : {
                transform: `translateX(-${slide * 85}vw)`,
                fontSize: "3vw",
                background: "none",
                gap: "10vw",
                padding: "0 10vw",
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
                  ? {}
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
          slide === images.length - 5
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
