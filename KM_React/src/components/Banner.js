import React, { useState, useEffect } from "react";
import "../styles/Banner.css";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/images/slide4.jpg",
  "/images/slide5.jpg",
  "/images/slide6.jpg",
];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="banner-container">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className={`banner-image ${index === currentImage ? "active" : ""}`}
        />
      ))}
      <div className="banner-text">KM Valuers</div>
    </div>
  );
};

export default Banner;
