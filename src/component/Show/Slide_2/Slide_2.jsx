import "./Slide_2.scss";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

const images = [
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
  "/img/slide_2_11.png",
  "/img/slide_2_12.png",
  "/img/slide_2_13.png",
  "/img/slide_2_14.png",
];

const Slide_2 = ({ device, hover }) => {
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
                transform: `translateX(-${slide * 80}vw)`,
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
export default Slide_2;
