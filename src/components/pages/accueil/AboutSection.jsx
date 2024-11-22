import React from "react";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <Section>
      <Content>
        <Heading>À propos de notre centre</Heading>
        <Description>
          Bienvenue dans notre institut de beauté, un lieu dédié au bien-être et à la sérénité.
          Depuis notre ouverture, nous avons pour mission de vous offrir des soins de qualité,
          adaptés à vos besoins, dans une ambiance chaleureuse et relaxante.
        </Description>
        <Description>
          Nos experts en beauté et bien-être sont là pour vous accompagner dans votre quête de détente et de raffinement.
          Que ce soit pour un soin du visage, un massage relaxant, ou une manucure, nous mettons tout en œuvre
          pour que chaque moment passé dans notre institut soit inoubliable.
        </Description>
      </Content>
      <ImageWrapper>
        <Image src="/about.webp" alt="Intérieur du centre de beauté" />
      </ImageWrapper>
    </Section>
  );
};

export default AboutSection;

// Styled-components
const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 10rem;
  background-color: ${({ theme }) => theme.colors.lightBackground || "#f9f9f9"};
  width: 100%; /* Assure que le fond couvre toute la largeur */

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 3rem 1rem;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 700px; /* Plus large pour le contenu */
  padding: 1.5rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Heading = styled.h2`
  font-size: 2rem; /* Taille du titre un peu plus petite */
  color: ${({ theme }) => theme.colors.primary || "#333"};
  margin-bottom: 3rem;
  font-weight: bold;
  line-height: 1.3;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text || "#666"};
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    text-align: justify;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 700px;
  padding: 1.5rem;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  object-fit: cover;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;
