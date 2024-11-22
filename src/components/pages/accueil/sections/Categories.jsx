import React from "react";
import styled from "styled-components";
import Separator from "../../../reusableUI/Separator";

const Categories = () => {
  const soins = [
    { title: "Soins du visage", img: "/Soins/visage.jpg" },
    { title: "Massages relaxants", img: "/Soins/massage.jpg" },
    { title: "Manucure & Pédicure", img: "/Soins/manucure.jpg" },
    { title: "Épilation", img: "/Soins/epilation.jpg" },
    { title: "Maquillage", img: "/Soins/maquillage.jpg" },
    { title: "Soins du visage", img: "/Soins/visage.jpg" },
  ];

  return (
    <Section>
      <Title>Prenez soin de vous, de la tête aux pieds</Title>
      <Grid>
        {soins.map((soin, index) => (
          <Category key={index}>
            <CategoryLink href="#">
              <ImageWrapper>
                <Image src={soin.img} alt={soin.title} />
                <CategoryTitle>{soin.title}</CategoryTitle>
              </ImageWrapper>
            </CategoryLink>
          </Category>
        ))}
      </Grid>
    </Section>
  );
};

export default Categories;

// Styled-components
const Section = styled.section`
  padding: 2rem;
  text-align: center;
  max-width: 1800px; /* Largeur maximale du composant */
  margin: 0 auto; /* Centrage horizontal */
  
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 3.5rem;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Une seule colonne pour mobile */
  }
`;

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
  height: 250px; /* Hauteur augmentée pour desktop */
  object-fit: cover;
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    height: 350px; /* Plus grand pour la version desktop */
  }

  @media (max-width: 768px) {
    height: 200px; /* Plus petit pour mobile */
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
