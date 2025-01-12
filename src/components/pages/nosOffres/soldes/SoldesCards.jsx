import React from 'react';
import styled from 'styled-components';

// Composant pour chaque carte de solde
const SoldesCard = ({ image, title, price, lastPrice, description }) => {
  return (
    <CardWrapper>
      {title &&
        <PromoText>
          <PromoTitle>{title}</PromoTitle>
          {price &&
            <PriceDescription>
              <Price>{price}</Price>
              {lastPrice && <LastPrice>{lastPrice}<span className="crossed-word"></span></LastPrice>}
            </PriceDescription>
          }
          {description && <Description>{description}</Description>}
        </PromoText>
      }
      {image && <PromoImage src={image} alt={title} />}
    </CardWrapper>
  );
};

// Composant pour la dernière catégorie
const LastCategory = ({ title, images }) => (
  <LastCategoryWrapper>
    <PromoTitle>{title}</PromoTitle>
    <ImagesWrapper>
      {images.map((image, index) => (
        <PromoImage key={index} src={image} alt={`Promo ${index + 1}`} />
      ))}
    </ImagesWrapper>
  </LastCategoryWrapper>
);

export default SoldesCard;

export { LastCategory }; // Export pour l'utiliser dans Soldes

// Styled Components
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 20px 0;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column; /* Empile les éléments verticalement */
    gap: 15px;
  }
`;

const PromoImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  margin: 0;
`;

const PromoText = styled.div`
  flex: 1;
  padding: 0;
  text-align: center;
  max-width: 500px;
`;

const PromoTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin: 10px 0;
  background: linear-gradient(90deg, #fff, #C0A667, #fff); /* Dégradé de lumière */
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: shine 5s linear infinite; /* Animation brillant toutes les 5s */

  @keyframes shine {
    0% {
      background-position: -200%;
    }
    50% {
      background-position: 200%;
    }
    100% {
      background-position: -200%;
    }
  }
`;

const LastPrice = styled.p`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    margin: 10px 0;
    background: linear-gradient(90deg, #fff, #C0A667, #fff); /* Dégradé de lumière */
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    margin-left: 5px;
    animation: shine 5s linear infinite; /* Animation brillant toutes les 5s */
  
    @keyframes shine {
      0% {
        background-position: -200%;
      }
      50% {
        background-position: 200%;
      }
      100% {
        background-position: -200%;
      }
    }
  
    .crossed-word {
      position: relative;
    }
  
    .crossed-word::after {
      content: "✘";
      color: #ff1d1d7a; /* Couleur de la croix */
      font-size: 1.7rem; /* Ajustez la taille selon le besoin */
      position: absolute;
      top: 40%;
      right: 0%;
      transform: translate(-50%, -50%);
      pointer-events: none; /* Ignore les clics */
    }
  `;

const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  line-height: 1.5;
`;

const PriceDescription = styled.div`
  display: inline-flex;
`;

const LastCategoryWrapper = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const ImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
`;
