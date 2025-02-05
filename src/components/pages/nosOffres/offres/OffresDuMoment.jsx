import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../api/firebase-config'

const OffresDuMoment = () => {
  const [offres, setOffres] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les offres depuis Firestore
    const fetchOffres = async () => {
      const querySnapshot = await getDocs(collection(db, 'offresDuMoment'));
      const offresList = querySnapshot.docs.map(doc => doc.data());
      setOffres(offresList);  // Mettez à jour l'état avec les offres récupérées
    };

    fetchOffres(); // Appel à la fonction pour récupérer les offres
  }, []);

  return (
    <Container>
      <TitleWrapper>
        <MainTitle>Nos Offres</MainTitle>
      </TitleWrapper>

      {offres.map((offre, index) => (
        <Section key={index}>
          <Title>{offre.titre}</Title>
          <TextWrapper>
            <List>
              {offre.contenu.map((item, idx) => (
                <ListItem key={idx}>{item}</ListItem>
              ))}
            </List>
            <Paragraph>
              <Highlight>*Offre valable du 01/02/2025 au 28/02/2025</Highlight>
            </Paragraph>
            <Paragraph>
              <Highlight>**Offre non cumulable avec d’autres promotions en cours</Highlight>
            </Paragraph>
          </TextWrapper>
          <StyledImage src={offre.image} alt="Luminothérapie LED" />
        </Section>
      ))}
    </Container>
  );
};

export default OffresDuMoment;

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
  margin-bottom: 40px;
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

const Paragraph = styled.p`
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin-left: 20px;
  list-style-type: none;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  span{
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Highlight = styled.span`
  font-weight: bold;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.secondary};
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
