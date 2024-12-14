import React from "react";
import styled from "styled-components";

const ProductsSection = () => {
  return (
    <Section>
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
    </Section>
  );
};

export default ProductsSection;

const Section = styled.section`
  position: relative;
  height: 700px;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Cache les parties qui dépassent */
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/product.jpg"); /* Remplacez par l'image réelle */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
    transition: transform 2s ease; /* Augmentation de la durée de la transition */
  }

  &:hover::before {
    transform: scale(1.02) rotate(0.1deg); /* Zoom plus léger et petite rotation */
  }

  @media (max-width: 768px) {
    height: 400px;

    &::before {
      transform: none; /* Pas d'effet sur mobile */
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
  z-index: 3; /* Positionne au-dessus de l'overlay */

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
  cursor: pointer; /* Ajoute le curseur pointer */

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary || "#c00000"};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
`;
