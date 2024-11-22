import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Carousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true, // Permet d'adapter la hauteur du carrousel à l'image
  };

  return (
    <div style={{ marginTop: 0 }}> {/* Collé à la navbar */}
      <CarouselContainer>
        <Slider {...settings}>
          {/* Liste des images */}
          {["caroussel1.webp", "caroussel2.webp", "caroussel3.webp", "caroussel4.webp", "caroussel5.webp", "caroussel6.webp"].map((img, index) => (
            <div key={index} style={{ position: "relative" }}>
              <Image
                src={`/caroussel/${img}`}
                alt={`Caroussel ${index + 1}`}
                windowWidth={windowWidth}
              />
            </div>
          ))}
        </Slider>
      </CarouselContainer>
    </div>
  );
};

// Styled-components pour les images et le conteneur
const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden; /* Assure que rien ne déborde */
`;

const Image = styled.img`
  width: 100%;
  height: ${({ windowWidth }) => (windowWidth <= 768 ? "auto" : "1000px")}; /* Hauteur dynamique */
  object-fit: ${({ windowWidth }) => (windowWidth <= 768 ? "cover" : "cover")};
  object-position: center; /* Centrer l'image sur desktop */
`;

export default Carousel;
