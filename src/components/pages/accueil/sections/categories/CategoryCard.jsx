import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CategoryCard = ({ category, index }) => {
  const animationVariants = {
    initial: {
      opacity: 0,
      x: window.innerWidth >= 1200
        ? index % 3 === 0
          ? -50
          : index % 3 === 2
          ? 50
          : 0
        : index % 2 === 0
        ? -50
        : 50, // Mode tablette : seulement gauche ou droite
      y: 50, // Monte depuis le bas
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0, // Arrive à sa position finale
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <MotionCategory
      variants={animationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <CategoryLink href={category.link}>
        <ImageWrapper>
          <picture>
            {/* Image pour mobile */}
            <source
              media="(max-width: 768px)"
              srcSet={`/Soins/photos/mobile/${category.img}`}
            />
            {/* Image pour tablette */}
            <source
              media="(max-width: 1200px)"
              srcSet={`/Soins/photos/tablet/${category.img}`}
            />
            {/* Image par défaut (desktop) */}
            <Image
              src={`/Soins/photos/desktop/${category.img}`}
              alt={category.title}
              loading="lazy"
            />
          </picture>
          <CategoryTitle>{category.title}</CategoryTitle>
        </ImageWrapper>
      </CategoryLink>
    </MotionCategory>
  );
};

export default CategoryCard;

// Styled Components
const MotionCategory = styled(motion.div)`
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
