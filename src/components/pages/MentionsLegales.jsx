import React from "react";
import styled from "styled-components";

const MentionsLegales = () => {
  return (
    <Section>
      <Title>Mentions Légales</Title>
      <Content>
        <SectionTitle>Éditeur du site</SectionTitle>
        <Text>
          Institut de Beauté Peau d'Or<br />
          Adresse : 15 Grand Rue 68320 JEBSHEIM<br />
          Téléphone : 09 81 34 02 67<br />
          Email : contact@peaudeor.fr<br />
          Numéro SIRET : 950 861 708 00010
        </Text>

        <SectionTitle>Hébergement</SectionTitle>
        <Text>
          Ce site est hébergé par :<br />
          <strong>Vercel, Inc.</strong><br />
          Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
          Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a>
        </Text>
        <Text>
          Le nom de domaine est fourni par :<br />
          <strong>IONOS by 1&1</strong><br />
          Adresse : Elgendorfer Str. 57, 56410 Montabaur, Allemagne<br />
          Téléphone : +49 721 170 555<br />
          Site web : <a href="https://www.ionos.fr" target="_blank" rel="noopener noreferrer">https://www.ionos.fr</a>
        </Text>


        <SectionTitle>Propriété intellectuelle</SectionTitle>
        <Text>
          Le contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété
          exclusive de l’Institut de Beauté Peau d'Or, sauf mention contraire. Toute reproduction,
          distribution, modification, adaptation ou publication, même partielle, de ces différents
          éléments est strictement interdite sans l'accord écrit préalable de l'éditeur.
        </Text>

        <SectionTitle>Responsabilité</SectionTitle>
        <Text>
          L’Institut de Beauté Peau d'Or s’efforce de fournir des informations aussi précises que
          possible. Toutefois, nous ne pouvons garantir l'exactitude, la complétude et l'actualité
          des informations diffusées sur ce site. L'utilisation des informations disponibles sur ce
          site se fait sous la responsabilité exclusive de l'utilisateur.
        </Text>

        <SectionTitle>Cookies</SectionTitle>
        <Text>
          Ce site utilise des cookies pour améliorer votre expérience utilisateur et analyser le
          trafic. En continuant à naviguer sur ce site, vous acceptez notre politique de cookies.
        </Text>

        <SectionTitle>Contact</SectionTitle>
        <Text>
          Pour toute question ou demande concernant ce site, vous pouvez nous contacter à l'adresse
          suivante : contact@peaudeor.fr.
        </Text>
      </Content>
    </Section>
  );
};

export default MentionsLegales;

// Styled-components
const Section = styled.section`
  padding: 3rem 1.5rem;
  background: linear-gradient(135deg, #f5f7fa, #e4e8ec);
  color: ${({ theme }) => theme.colors.text || "#333"};
  max-width: 900px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  font-family: "Roboto", sans-serif;
  line-height: 1.8;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.dark || "#555"};
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const Content = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text || "#555"};
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.colors.dark || "#2980b9"};
  font-weight: 600;
  border-left: 4px solid ${({ theme }) => theme.colors.primary || "#2980b9"};
  padding-left: 1rem;
`;

const Text = styled.p`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text || "#666"};
  line-height: 1.8;
  text-align: justify;

  a {
    color: ${({ theme }) => theme.colors.primary || "#2980b9"};
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primary || "#34495e"};
      text-decoration: underline;
    }
  }
`;
