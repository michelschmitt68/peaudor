import React from "react";
import styled from "styled-components";

const AboutSection = () => {
  const title = "À propos de notre centre";

  return (
    <Section>
      <Content>
        <Heading>{title}</Heading>
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
        <Button href="/notre-centre">Retrouvez nous</Button>
      </Content>
      <ImageWrapper>
        <Image src="/home.jpeg" alt="Intérieur du centre de beauté" />
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
  padding: 5rem;
  width: 100%;
  gap: 5rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 3rem 1rem;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 500px) {
    max-width: 400px;
    padding: 1rem;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 800px;
  padding: 1.5rem;

  @media (max-width: 1200px) {
    text-align: center;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: #C0A667;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 30px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  margin: 2rem 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary || "#e3c29b"};
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary || "#333"};
  margin-bottom: 3rem;
  font-weight: bold;
  line-height: 1.3;

  @media (max-width: 1200px) {
    text-align: center;
    margin-bottom: 5rem;
  }

  @media (max-width: 500px) {
    margin-top: 5rem;
    font-size: 25px;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.white || "#d9d9d9"};
  margin-bottom: 1.5rem;
  text-align: left;
`;

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 1200px;
  padding: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 1200px) {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    padding: 0rem;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  object-fit: cover;

  @media (max-width: 1024px) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 500px) {
    margin-bottom: 5rem;
  }
`;
