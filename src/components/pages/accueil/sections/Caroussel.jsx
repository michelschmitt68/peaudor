import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Carousel = () => {
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
          {["caroussel1.jpeg", "caroussel2.jpeg", "caroussel3.jpeg", "caroussel4.jpeg", "caroussel5.jpeg", "caroussel6.jpeg"].map((img, index) => (
            <div key={index} style={{ position: "relative" }}>
              <StyledImage
                src={`/caroussel/${img}`}
                alt={`Caroussel ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </CarouselContainer>
    </div>
  );
};


const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: top;

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 500px;
  }

  @media (min-width: 1025px) and (max-width: 1600px) {
    height: 600px;
  }

  @media (min-width: 1601px) {
    height: 1000px;
  }
`;

export default Carousel;
