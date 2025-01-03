import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const title = "Prenez soin de vous, de la tête aux pieds";

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
      <CenteredSection>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            margin: "-30% 0px",
          }}
        >
          <Title>
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.07,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </Title>
        </motion.div>
      </CenteredSection>

      <Section>
        <Grid>
          {categories.map((category, index) => (
            <MotionCategory
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50, // Mode tablette (1er à gauche, 2ème à droite)
                y: 50, // Toutes arrivent par le bas
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

const CenteredSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 50px 0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary || "#333"};
  line-height: 1.2;
  
  span {
    display: inline-block;
  &:hover {
      color: ${({ theme }) => theme.colors.secondary || "#C0A667"};
    }
  }

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 550px) {
    font-size: 1.2rem;
  }
`;
