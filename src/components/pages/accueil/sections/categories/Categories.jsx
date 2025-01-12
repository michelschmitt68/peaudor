import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import TitleSection from "./TitleSection";

const Categories = () => {

  const categories = [
    { title: "Bronzage UV", img: "bronzage.jpg", link: "/soins/bronzage-uv" },
    { title: "Épilation au fil", img: "epilation_au_fil.jpg", link: "/soins/epilation-au-fil" },
    { title: "Beauté en duo", img: "beaute_en_duo.jpg", link: "/soins/beaute-en-duo" },
    { title: "Beauté du regard", img: "beaute_du_regard.jpg", link: "/soins/beaute-du-regard" },
    { title: "Beauté du sourire", img: "beaute_du_sourire.jpg", link: "/soins/beaute-du-sourire" },
    { title: "Amincissement", img: "amincissement.jpg", link: "/soins/Cryolipolyse" },
    { title: "Épilation à la cire", img: "epilation_a_la_cire.jpg", link: "/soins/epilation-a-la-cire" },
    { title: "Soins du visage", img: "soin_visage.jpg", link: "/soins/soins-du-visage" },
    { title: "Soins du corps", img: "soins_corps.jpg", link: "/soins/soins-du-corps" },
    { title: "Soins des mains", img: "Soins_des_mains.jpg", link: "/soins/soins-des-mains" },
    { title: "Soins des pieds", img: "soins_des_pieds.jpg", link: "/soins/soins-des-pieds" },
    { title: "Maquillage", img: "maquillage.jpg", link: "/soins/maquillage" },
    { title: "Vernis semi permanent", img: "vernis_semipermanent.jpg", link: "/soins/verni-semi-permanent" },
  ];

  return (
    <>
      <TitleSection />
      <Section>
        <Grid>
          {categories.map((category, index) => (
            <MotionCategory
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
              }}
            >
              <CategoryCard category={category} index={index} />
            </MotionCategory>
          ))}
        </Grid>
      </Section>
    </>
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

const MotionCategory = styled(motion.div)`
  display: block;
`;

