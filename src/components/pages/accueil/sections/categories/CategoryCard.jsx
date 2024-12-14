import React from "react";
import styled from "styled-components";

const CategoryCard = ({ category }) => {
  return (
    <Category>
      <CategoryLink href={category.link}>
        <ImageWrapper>
          <picture>
            {/* Image pour mobile */}
            <source
              media="(max-width: 768px)"
              srcSet={`/soins/photos/mobile/${category.img}`}
            />
            {/* Image pour tablette */}
            <source
              media="(max-width: 1200px)"
              srcSet={`/soins/photos/tablet/${category.img}`}
            />
            {/* Image par défaut (desktop) */}
            <Image
              src={`/soins/photos/desktop/${category.img}`}
              alt={category.title}
              loading="lazy" // Lazy loading pour optimisation
            />
          </picture>
          <CategoryTitle>{category.title}</CategoryTitle>
        </ImageWrapper>
      </CategoryLink>
    </Category>
  );
};

export default CategoryCard;

// Styled Components
const Category = styled.div`
  text-align: center;
`;

const CategoryLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.15);
  }

  &:hover img {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 450px; /* Augmenter la hauteur des images en mode desktop */
  object-fit: cover; /* Garantit que l'image couvre bien l'espace sans déformation */

  transition: transform 0.3s ease;

  @media (max-width: 1201px) {
    height: 350px; /* Réduction de la hauteur pour les écrans plus petits */
  }

  @media (max-width: 768px) {
    height: 250px; /* Encore plus petite pour les écrans mobiles */
  }
`;

const CategoryTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem;
  background: rgb(0 0 0 / 16%);
  color: white;
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
`;
