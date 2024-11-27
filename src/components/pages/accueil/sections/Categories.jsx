import React from "react";
import styled from "styled-components";

const Categories = () => {
  const soins = [
    { title: "Bronzage UV", img: "/Soins/visage.jpg", link: "/bronzage-uv", warning: "Attention : L'exposition aux rayons UV peut nuire à la santé." },
    { title: "Amincissement", img: "/Soins/visage.jpg", link: "/amincissement" },
    { title: "Beauté du regard", img: "/Soins/visage.jpg", link: "/beaute-du-regard" },
    { title: "Épilation au fil", img: "/Soins/visage.jpg", link: "/epilation-au-fil" },
    { title: "Beauté du sourire", img: "/Soins/visage.jpg", link: "/beaute-du-sourire" },
    { title: "Offre duo", img: "/Soins/visage.jpg", link: "/offre-duo" },
    { title: "Épilation à la cire + forfait", img: "/Soins/visage.jpg", link: "/epilation-cire-forfait" },
    { title: "Soins du visage", img: "/Soins/visage.jpg", link: "/soins-du-visage" },
    { title: "Soins du corps", img: "/Soins/visage.jpg", link: "/soins-du-corps" },
    { title: "Maquillage", img: "/Soins/visage.jpg", link: "/maquillage" },
    { title: "Soins des mains", img: "/Soins/visage.jpg", link: "/soins-des-mains" },
    { title: "Soins des pieds", img: "/Soins/visage.jpg", link: "/soins-des-pieds" },
  ];

  return (
    <Section>
      <Title>Prenez soin de vous, de la tête aux pieds</Title>
      <Grid>
        {soins.map((soin, index) => (
          <Category key={index}>
            <CategoryLink href={soin.link}>
            <ImageWrapper>
              <Image src={soin.img} alt={soin.title} />
              <CategoryTitle>{soin.title}</CategoryTitle>
              {soin.warning && <WarningOverlay>{soin.warning}</WarningOverlay>}
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
  max-width: 1800px;
  margin: 0 auto;
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

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    height: 350px;
  }

  @media (max-width: 768px) {
    height: 200px;
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


const WarningOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem;
  background: rgba(255, 0, 0, 0.8); /* Rouge transparent */
  color: white;
  font-size: 0.9rem;
  text-align: center;
  font-weight: bold;
  z-index: 1;
`;

