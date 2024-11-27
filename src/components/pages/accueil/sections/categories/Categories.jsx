import React from "react";
import styled from "styled-components";
import CategoryGroup from "./CategoryGroup";

const Categories = () => {
  const groupedCategories = [
    {
      group: "Soins du visage et du corps",
      categories: [
        { title: "Soins du visage", img: "/Soins/visage.jpg", link: "/soins-du-visage" },
        { title: "Soins du corps", img: "/Soins/corps.jpg", link: "/soins-du-corps" },
        { title: "Amincissement", img: "/Soins/amincissement.jpg", link: "/amincissement" },
        { title: "Bronzage UV", img: "/Soins/bronzage.jpg", link: "/bronzage-uv", warning: "Attention : L'exposition aux rayons UV peut nuire à la santé." },
      ],
    },
    {
      group: "Épilation",
      categories: [
        { title: "Épilation à la cire + forfait", img: "/Soins/cire_forfait.jpg", link: "/epilation-cire-forfait" },
        { title: "Épilation au fil", img: "/Soins/epilation_fil.jpg", link: "/epilation-au-fil" },
      ],
    },
    {
      group: "Beauté spécifique",
      categories: [
        { title: "Beauté du regard", img: "/Soins/regard.jpg", link: "/beaute-du-regard" },
        { title: "Beauté du sourire", img: "/Soins/sourire.jpg", link: "/beaute-du-sourire" },
        { title: "Maquillage", img: "/Soins/maquillage.jpg", link: "/maquillage" },
      ],
    },
    {
      group: "Soins des mains et pieds",
      categories: [
        { title: "Soins des mains", img: "/Soins/mains.jpg", link: "/soins-des-mains" },
        { title: "Soins des pieds", img: "/Soins/pieds.jpg", link: "/soins-des-pieds" },
      ],
    },
    {
      group: "Offres spéciales",
      categories: [
        { title: "Offre duo", img: "/Soins/duo.jpg", link: "/offre-duo" },
      ],
    },
  ];

  return (
    <Section>
      <Title>Prenez soin de vous, de la tête aux pieds</Title>
      {groupedCategories.map((group, index) => (
        <CategoryGroup key={index} group={group} />
      ))}
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
