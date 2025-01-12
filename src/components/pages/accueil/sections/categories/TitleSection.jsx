import React from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion";

const TitleSection = () => {

  const title = "Prenez soin de vous, de la tête aux pieds";

  return (
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
  )
}

export default TitleSection

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