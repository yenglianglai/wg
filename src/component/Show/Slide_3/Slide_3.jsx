import "./Slide_3.scss";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

const images = [
  "/img/slide_3_1.png",
  "/img/slide_3_2.png",
  "/img/slide_3_3.png",
  "/img/slide_3_4.png",
  "/img/slide_3_5.png",
  "/img/slide_3_6.png",
  "/img/slide_3_7.png",
  "/img/slide_3_8.png",
  "/img/slide_3_9.png",
  "/img/slide_3_10.png",
  "/img/slide_3_11.png",
  "/img/slide_3_12.png",
];

const Slide_3 = ({ device, hover }) => {
  const [slide, setSlide] = useState(3);
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
          slide === 3
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
                transform: `translateX(-${slide * 74}vw)`,
                fontSize: "3vw",
                background: "none",
                gap: "10vw",
                padding: "0 100vw",
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
export default Slide_3;
