import React from 'react';
import styled from 'styled-components';

const VentesPriveesCard = ({ image, title, price, lastPrice, description, isImageLeft }) => {
  return (
    <CardWrapper>
      <PromoText>
        <PromoTitle>{title}</PromoTitle>
        <PriceDescription>
          <Price>{price}</Price>
          <LastPrice>{lastPrice}<span className="crossed-word"></span></LastPrice>
        </PriceDescription>
        {description && <Description>{description}</Description>}
      </PromoText>
      <PromoImage src={image} alt={title} />
    </CardWrapper>
  );
};

export default VentesPriveesCard;

// Styled Components
const CardWrapper = styled.div`
    display: flex;
    flex-direction: ${({ isImageLeft }) => (isImageLeft ? 'row' : 'row-reverse')};
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    padding: 0;
    gap: 10px;
  
    @media (max-width: 768px) {
      flex-direction: column; /* Empile les éléments verticalement */
      gap: 15px;
    }
  `;

const PromoImage = styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
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

const PriceDescription = styled.p`
    display: inline-flex;
  `;
