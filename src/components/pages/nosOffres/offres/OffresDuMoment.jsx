import React from 'react';
import styled from 'styled-components';

const OffresDuMoment = () => {
    return (
        <Container>
            <TitleWrapper>
                <MainTitle>Nos Offres</MainTitle>
            </TitleWrapper>

            <Section>
                <Title>💌 Offre spéciale Saint-Valentin 💌</Title>
                <TextWrapper>
                    <List>
                        <ListItem>-10% sur les chèques cadeaux**</ListItem>
                        <ListItem>-20% sur les massages duo**</ListItem>
                        <ListItem>
                            Massage harmonie duo 30 min 72€ au lieu de 90€**
                        </ListItem>
                        <ListItem>
                            Massage harmonie suprême duo 45 min 88€ au lieu de 110€**
                        </ListItem>
                        <ListItem>
                            -20% sur les blanchiments dentaires en duo 120€ les deux séances au lieu de 150€**
                        </ListItem>
                    </List>
                    <Paragraph>
                        <Highlight>*Offre valable du 01/02/2025 au 28/02/2025</Highlight>
                    </Paragraph>
                    <Paragraph>
                        <Highlight>**Offre non cumulable avec d’autres promotions en cours</Highlight>
                    </Paragraph>
                </TextWrapper>
                <StyledImage src="/offres/actualites/saint_valentin.png" alt="Luminothérapie LED" />
            </Section>

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

