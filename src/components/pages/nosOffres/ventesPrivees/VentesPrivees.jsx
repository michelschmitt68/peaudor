import React from 'react';
import styled from 'styled-components';
import VentesPriveesCard from './VentePriveesCard';
import VentesPriveesData from './VentesPriveesData';


const VentesPrivees = () => {
  return (
    <PageWrapper>
      <Header>
        <Title>VENTES PRIVÉES</Title>
        <Subtitle>-30% SUR L'AMINCISSEMENT</Subtitle>
      </Header>
      <PromoList>
        {VentesPriveesData.map((promo, index) => (

          <VentesPriveesCard
            key={index}
            image={promo.image}
            title={promo.title}
            price={promo.price}
            lastPrice={promo.lastPrice}
            description={promo.description}
            isImageLeft={index % 2 === 0}
          />
        ))}
      </PromoList>
      <Info>* offre non cumulable avec d'autres promtions en cours</Info>
    </PageWrapper>
  );
};

export default VentesPrivees;

// Styled Components
const PageWrapper = styled.div`
max-width: 1200px;
    margin: 0 auto;
    padding: 100px 0;
    display: flex
;
    flex-direction: column;
    background: rgb(255 255 255 / 7%);
    border-radius: 10px;
    backdrop-filter: blur(10px);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  margin-bottom: 75px;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
`;

const Subtitle = styled.h2`
  margin-top: 75px;
  font-size: 1.8rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  margin: 10px 0;
  background: linear-gradient(90deg, #fff, #C0A667, #fff); /* Dégradé de lumière */
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: shine 5s linear infinite;

  /* Animation de bordure clignotante */
  padding: 10px;
  border-radius: 8px;
  position: relative;
  display: inline-block;
  z-index: 1;

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


const PromoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;


const Info = styled.div`
text-align: center;
color: ${({ theme }) => theme.colors.primary};
font-style: italic;
margin-top: 50px;
`;