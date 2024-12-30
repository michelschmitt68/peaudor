import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const ProductsSection = () => {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 50 }} // Partie invisible et en bas
      whileInView={{ opacity: 1, y: 0 }} // Apparaît en montant
      transition={{
        duration: 1, // Durée de l'animation
        ease: "easeOut",
      }}
      viewport={{
        once: true, // L'animation ne se rejoue pas
        margin: "-20%", // Détecte avant d'entrer complètement
      }}
    >
      <Overlay>
        <Content>
          <Title>Découvrez nos produits exclusifs</Title>
          <Description>
            Explorez notre gamme de produits de beauté soigneusement sélectionnés 
            pour prendre soin de votre peau et révéler votre éclat naturel. 
            Qualité et bien-être au cœur de notre engagement.
          </Description>
          <Button href="nos-produits">Voir nos produits</Button>
        </Content>
      </Overlay>
    </MotionSection>
  );
};

export default ProductsSection;

// Animation en boucle pour le zoom
const zoomAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05); /* Zoom intermédiaire */
  }
`;

const MotionSection = styled(motion.section)`
  position: relative;
  height: 800px;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/product.jpg"); /* Remplacez par l'image réelle */
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    z-index: 1;
    animation: ${zoomAnimation} 8s infinite ease-in-out; /* Animation en boucle */
  }

  @media (max-width: 768px) {
    height: 400px;

    &::before {
      animation: none; /* Pas d'effet en boucle sur mobile */
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Superposition sombre */
  z-index: 2; /* Positionne au-dessus de l'image */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  color: white;
  text-align: center;
  padding: 2rem;
  max-width: 700px;
  z-index: 3;
  background-color: #6b696957;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary || "#e60000"};
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 30px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary || "#c00000"};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
`;
