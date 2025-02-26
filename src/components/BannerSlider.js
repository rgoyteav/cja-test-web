import React from "react";
import "./BannerSlider.css"; // Para el estilo del banner
import logoMacro from "../assets/logo-macro-2024.png";

const BannerSlider = () => {
  const slides = Array(12).fill({
    imgSrc: logoMacro,
    altText: "Banco Macro",
    link: "https://www.macro.com.ar/home-page",
  });

  return (
    <div className="slider">
      <div className="slide-track">
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <img src={slide.imgSrc} alt={slide.altText} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;

