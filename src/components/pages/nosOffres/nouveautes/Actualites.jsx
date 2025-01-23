import React from 'react';
import styled from 'styled-components';
import { FaBullhorn } from 'react-icons/fa';

const Actualites = () => {
    return (
        <Container>
            <TitleWrapper>
                <StyledBullhorn />
                <MainTitle>Nos Actualités</MainTitle>
            </TitleWrapper>

            <Section>
                <Title>
                    ✨ Nouvelle prestation de Luminothérapie LED : Offrez à votre peau un soin sur-mesure ! ✨
                </Title>
                <TextWrapper>
                    <Paragraph>
                        <OfferText>
                            <h3>Qu’est-ce que la Luminothérapie LED ?</h3>
                        </OfferText>
                    </Paragraph>
                    <Paragraph>
                        La Luminothérapie LED est une technologie avancée qui utilise différentes couleurs de lumière pour traiter
                        les imperfections de la peau, ralentir les signes du vieillissement et apporter un véritable éclat à votre
                        teint ✨. Découvrez les bienfaits des différentes couleurs de lumière :
                    </Paragraph>
                    <List>
                        <ListItem color="red">🔴 <Highlight>Lumière rouge</Highlight> : Anti-âge, stimule le collagène et améliore la fermeté de la peau.</ListItem>
                        <ListItem color="blue">🔵 <Highlight>Lumière bleue</Highlight> : Réduit les imperfections, l’acné et régule la production de sébum.</ListItem>
                        <ListItem color="green">🟢 <Highlight>Lumière verte</Highlight> : Uniformise le teint, atténue les taches pigmentaires et apaise les peaux sensibles.</ListItem>
                        <ListItem color="purple">🟣 <Highlight>Lumière violette</Highlight> : Répare et régénère la peau, améliore l’éclat et réduit les cicatrices.</ListItem>
                        <ListItem color="yellow">🟡 <Highlight>Lumière jaune</Highlight> : Apporte de l’hydratation, améliore le teint et apaise les rougeurs.</ListItem>
                        <ListItem color="cyan">🔷 <Highlight>Lumière cyan</Highlight> : Calme les inflammations, lutte contre les imperfections et améliore la texture de la peau.</ListItem>
                        <ListItem>🔴🔶 <Highlight>Lumière infrarouge</Highlight> : Favorise la régénération profonde de la peau, soulage les douleurs et stimule la circulation sanguine.</ListItem>
                    </List>

                    {/* Offre de lancement */}
                    <OfferText>
                        <h3>Offre de Lancement Exceptionnelle 🎉</h3>
                        <Paragraph>
                            Pour célébrer cette nouveauté, nous vous proposons une offre de lancement 100% gratuite exclusive :
                        </Paragraph>
                        <List>
                            <ListItem>Bilan personnalisé de luminothérapie 📝 : Nous analysons vos besoins spécifiques et vous proposons un traitement sur-mesure.</ListItem>
                            <ListItem>Séance découverte gratuite 💆‍♀️ : Profitez d’une première séance découverte pour découvrir les bienfaits immédiats de la luminothérapie LED.</ListItem>
                        </List>
                        <Paragraph>
                            Mais attention, cette offre est réservée uniquement aux 10 premières clientes ! 🚨 Ne manquez pas cette opportunité unique de chouchouter votre peau avec cette technologie innovante.
                        </Paragraph>

                        <h3>Comment en profiter ?</h3>
                        <Paragraph>
                            Pour réserver votre bilan personnalisé et séance découverte offerte, il vous suffit de réserver via le lien :{' '}
                            <Link href="https://www.planity.com/peau-dor-68320-jebsheim" target="_blank">
                                Réserver sur Planity
                            </Link>
                            {' '}ou de nous contacter au 📞 09 81 34 02 67. N’attendez plus, les places sont limitées !
                        </Paragraph>
                    </OfferText>

                </TextWrapper>

                {/* Image en dessous */}
                <StyledImage src="/offres/actualites/luminotherapie.jpg" alt="Luminothérapie LED" />
            </Section>
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
`;

const Section = styled.section`
  margin-bottom: 40px;
  max-width: 1200px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.tertiary};
  margin-bottom: 40px;
  text-align: center;
`;

const TextWrapper = styled.div`
  margin-bottom: 20px;
`;

const StyledImage = styled.img`
  display: block;
  margin: 40px auto;
  max-width: 500px;
  border-radius: 10px;
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

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
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
  margin: 50px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

