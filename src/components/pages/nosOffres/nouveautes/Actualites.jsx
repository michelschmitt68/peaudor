import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaBullhorn } from 'react-icons/fa';
import { collection, getDocs } from 'firebase/firestore';  // Assure-toi d'importer correctement Firestore
import { db } from '../../../../api/firebase-config'

const Actualites = () => {
  const [actualites, setActualites] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les données depuis Firestore
    const fetchActualites = async () => {
      const querySnapshot = await getDocs(collection(db, 'actualites'));
      const actualitesList = querySnapshot.docs.map(doc => doc.data());
      setActualites(actualitesList);  // Mettez à jour l'état avec les actualités récupérées
    };

    fetchActualites(); // Appel à la fonction pour récupérer les actualités
  }, []);

  return (
    <Container>
      <TitleWrapper>
        <StyledBullhorn />
        <MainTitle>Nos Actualités</MainTitle>
      </TitleWrapper>

      {actualites.map((actualite, index) => (
        <Section key={index}>
          <Title>{actualite.titre}</Title>
          <TextWrapper>
            {actualite.contenu.map((section, index) => (
              <TextSection key={index}>
                <OfferText>
                  <h3>{section.sousTitre}</h3>
                </OfferText>
                <TextContent
                  dangerouslySetInnerHTML={{ __html: section.texte.replace(/\n/g, '<br />') }}
                />
              </TextSection>
            ))}

            {/* Image en dessous */}
            <StyledImage src={actualite.image} alt="Luminothérapie LED" />
          </TextWrapper>
        </Section>
      ))}
    </Container>
  );
};

export default Actualites;

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  padding: 40px;
  background-color: #3c3c3c;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Section = styled.section`
  margin-bottom: 100px;
  max-width: 1200px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.tertiary};
  margin-bottom: 50px;
  text-align: center;
  font-size: 1.8rem;
`;

const TextWrapper = styled.div`
  margin-bottom: 20px;
`;

const StyledImage = styled.img`
  display: block;
  margin: 40px auto;
  max-width: 500px;
  border-radius: 10px;
  @media (max-width: 768px) {
    max-width:300px;
  }
`;

const TextSection = styled.div`
  margin-bottom: 20px;
`;

const TextContent = styled.div`
  margin-bottom: 20px;
`;

const OfferText = styled.div`
  margin-top: 20px;

  h3 {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 40px;
  }

  ul {
    margin-left: 20px;
    list-style: none;
  }

  p {
    margin-bottom: 20px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const StyledBullhorn = styled(FaBullhorn)`
  font-size: 40px;
  transform: rotate(-45deg);
  margin-right: 10px;
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  margin: 100px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

