import React from "react";
import styled from "styled-components";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categories = [
    { title: "Bronzage UV", img: "Bronzage.jpg", link: "/soins/bronzage-uv" },
    { title: "Épilation au fil", img: "Epilation au fil.jpg", link: "/soins/epilation-au-fil" },
    { title: "Épilation à la cire", img: "epilations corps a la cire.jpg", link: "/soins/epilation-a-la-cire" },
    { title: "Beauté du regard", img: "Beaute du regard.jpg", link: "/soins/beaute-du-regard" },
    { title: "Amincissement", img: "Amincissement.jpg", link: "/soins/Cryolipolyse" },
    { title: "Soins du visage", img: "Soins visage.jpg", link: "/soins/soins-du-visage" },
    { title: "Soins du corps", img: "Soins corps.jpg", link: "/soins/soins-du-corps" },
    { title: "Beauté du sourire", img: "Beauté du sourire.jpg", link: "/soins/beaute-du-sourire" },
    { title: "Maquillage", img: "Maquillage.jpg", link: "/soins/maquillage" },
    { title: "Soins des mains", img: "Soins des mains.jpg", link: "/soins/soins-des-mains" },
    { title: "Soins des pieds", img: "Soins des pieds.jpg", link: "/soins/soins-des-pieds" },
    { title: "Vernis semi permanent", img: "vernis semi permanent mains pieds.jpg", link: "/soins/verni-semi-permanent" },
  ];

  return (
    <Section>
      <Title>Prenez soin de vous, de la tête aux pieds</Title>
      <Grid>
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
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

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

