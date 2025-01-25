import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const PromotionsSection = () => {
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
          <Title>Profitez de nos promotions exclusives</Title>
          <Description>
            Découvrez des offres exceptionnelles sur une sélection d'articles !
            Profitez de nos ventes privées et de nos soldes pour faire de
            bonnes affaires. Ne manquez pas ces opportunités !
          </Description>
          <ButtonContainer>
            <AnimatedButton href="ventes-privees">Ventes Privées</AnimatedButton>
            <AnimatedButton href="nos-soldes">Soldes</AnimatedButton>
          </ButtonContainer>
        </Content>
      </Overlay>
    </MotionSection>
  );
};

export default PromotionsSection;

const MotionSection = styled(motion.section)`
  position: relative;
  height: 900px;
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
    background-image: url("/soldes.avif"); /* Image de fond */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 400px;
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

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const AnimatedButton = styled.a`
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary || "#e60000"};
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 30px;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary || "#c00000"};
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
`;
