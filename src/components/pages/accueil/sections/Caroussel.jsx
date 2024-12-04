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
          {["caroussel1.webp", "caroussel2.webp", "caroussel3.webp", "caroussel4.webp", "caroussel5.webp", "caroussel6.webp"].map((img, index) => (
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

// Styled-components pour les images et le conteneur
const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden; /* Assure que rien ne déborde */
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover; /* Permet à l'image de couvrir le conteneur sans être déformée */

  /* Utilisation de media queries pour ajuster les styles sur différents écrans */

  @media (max-width: 768px) {
    height: 300px; /* Hauteur spécifique de 200px sur mobile */
    object-position: center; /* Centrer l'image sur mobile */
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 500px; /* Hauteur spécifique de 500px pour les tablettes */
    object-position: center; /* Centrer l'image sur tablette */
  }

  @media (min-width: 1025px) and (max-width: 1600px) {
    height: 600px; /* Hauteur spécifique de 800px entre 1025px et 1600px */
    object-position: center; /* Centrer l'image */
  }

  @media (min-width: 1601px) {
    height: 800px; /* Hauteur sur ordinateurs de bureau (1000px) */
    object-position: center; /* Centrer l'image sur desktop */
  }
`;

export default Carousel;
