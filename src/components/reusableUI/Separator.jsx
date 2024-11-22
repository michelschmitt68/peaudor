import React from "react";
import styled from "styled-components";

const Separator = () => {
  return <Divider />;
};

export default Separator;

// Styled-components
const Divider = styled.div`
  height: 2px;
  max-width: 0; /* Commence à 0 pour l'animation */
  margin: 4rem auto;
  margin-bottom: 0;
  background: linear-gradient(to right, transparent, ${({ theme }) => theme.colors.primary}, transparent); /* Utilise la couleur 'primary' */
  border-radius: 2px;
  animation: expand 1s ease-out forwards; /* Animation d'agrandissement */

  @keyframes expand {
    to {
      max-width: 1800px; /* Atteint la largeur maximale */
    }
  }
`;
