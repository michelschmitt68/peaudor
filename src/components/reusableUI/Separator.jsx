import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"; // Import framer-motion

const Separator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Rendre invisible au départ
      whileInView={{ opacity: 1 }} // Devenir visible quand dans la vue
      transition={{ duration: 1 }} // Transition pour l'apparition
      viewport={{ once: true, amount: 0.5 }} // L'animation se déclenche à 50% visible
    >
      <Divider />
    </motion.div>
  );
};

export default Separator;

// Styled-components
const Divider = styled.div`
  height: 2px;
  width: 100%; /* La largeur est fixée à 100% pour le départ */
  margin: 4rem auto;
  margin-bottom: 0;
  background: linear-gradient(to right, transparent, ${({ theme }) => theme.colors.primary}, transparent); /* Utilise la couleur 'primary' */
  border-radius: 2px;
  
  animation: expand 5s ease-out ; /* Animation qui se répète infiniment */

  @keyframes expand {
    0% {
      transform: scaleX(0); /* Commence avec une échelle de 0, invisible */
    }
    50% {
      transform: scaleX(1); /* L'élément atteint sa largeur complète au centre */
    }
  }
`;
