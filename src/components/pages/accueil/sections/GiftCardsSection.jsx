import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const GiftCardsSection = () => {
  return (
    <Section>
      <Content
        initial={{ x: 0 }} // Position initiale
        whileInView={{
          x: ["0", "10px", "-10px", "10px", "-10px", "0"], // Vibrations sur l'axe X
        }}
        transition={{
          duration: 0.3, // Durée de la vibration
          ease: "easeOut",
          repeat: 3, // Pas de répétition (1 seule fois)
        }}
        viewport={{
          once: true, // L'animation se déclenche une seule fois
          margin: "-20%", // Réduit le seuil pour mieux détecter la vue en desktop
        }}
      >
        <Title>Offrez un moment de bien-être</Title>
        <Description>
          Nos chèques cadeaux sont le cadeau parfait pour vos proches. Offrez-leur une
          expérience unique dans notre institut de beauté et laissez-les se détendre
          avec nos soins de qualité.
        </Description>
        <Button href="#">Découvrez nos chèques cadeaux</Button>
      </Content>
    </Section>
  );
};

export default GiftCardsSection;

const Section = styled.section`
  display: flex;
  justify-content: flex-end; /* Aligne le contenu à droite */
  align-items: center; /* Centre verticalement le contenu */
  padding: 5rem 2rem;
  color: white;
  text-align: left; /* Aligne le texte à gauche */
  height: 900px; /* Hauteur modérée pour ne pas prendre trop de place */
  width: 100%; /* Prend toute la largeur de la page */
  background-image: url("/chequecadeau.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  perspective: 1500px; /* Crée la profondeur pour l'effet 3D */

  @media (max-width: 768px) {
    height: 400px; /* Hauteur plus petite sur mobile */
    padding: 3rem 1.5rem;
    justify-content: center; /* Centre le contenu horizontalement */
  }
`;

const Content = styled(motion.div)`
  background-color: rgb(0 0 0 / 43%);
  padding: 3rem;
  border-radius: 8px;
  max-width: 700px;
  text-align: left;
  z-index: 2;
  margin-right: 5%; /* Décalage vers la droite */
  transform-style: preserve-3d; /* Nécessaire pour la rotation en 3D */

  /* Responsivité pour mobile */
  @media (max-width: 768px) {
    max-width: 90%; /* Réduit la largeur du contenu sur mobile */
    margin-right: 0; /* Enlève la marge droite pour éviter de dépasser */
    padding: 2rem; /* Moins de padding sur mobile */
  }
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 2rem !important;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary || "#333"};

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    display: none; 
  }
`;

const Button = styled.a`
  padding: 0.8rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary || "#e60000"};
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 30px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  white-space: nowrap; 

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary || "#c00000"};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem; 
    font-size: 1rem; 
  }

  @media (max-width: 425px) {
    font-size: 0.6rem; 
    padding: 0.7rem 1.2rem; 
  }
`;
