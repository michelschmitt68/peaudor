import React from 'react';
import styled from 'styled-components';
import SoldesCards from './SoldesCards'; // Assurez-vous que ce fichier existe et contient le composant `SoldesCards`
import soldesData from './SoldesData'; // Assurez-vous que ce fichier contient vos données de soldes

const Soldes = () => {
  return (
    <PageWrapper>
      <Header>
        <Title>SOLDES</Title>
      </Header>

      {/* Boucle à travers chaque catégorie */}
      {soldesData.map((category, index) => (
        <CategoryWrapper key={index}>
          <CategoryTitle>{category.category}</CategoryTitle>

          {/* Boucle à travers les éléments de chaque catégorie */}
          <PromoList>
            {category.items.map((promo, index) => (
              <SoldesCards
                key={index}
                image={promo.image}
                title={promo.title}
                price={promo.price}
                lastPrice={promo.lastPrice}
                description={promo.description}
                isImageLeft={index % 2 === 0} // Alterne la position de l'image pour chaque carte
              />
            ))}
          </PromoList>
        </CategoryWrapper>
      ))}

      <Info>* Offre non cumulable avec d'autres promotions en cours</Info>
    </PageWrapper>
  );
};

export default Soldes;

// Styled Components
const PageWrapper = styled.div`
    padding: 10px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 100px 0;
    display: flex;
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

const CategoryWrapper = styled.div`
  margin-bottom: 40px;
  text-align: center;
  
`;

const CategoryTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  margin: 50px 0;
  background: linear-gradient(90deg, #fff, #C0A667, #fff); /* Dégradé de lumière */
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: shine 5s linear infinite;
  text-align: center;

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
