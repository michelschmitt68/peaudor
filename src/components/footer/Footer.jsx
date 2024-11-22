import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Section>
      <Content>
        <LogoSection>
          <Logo>Institut de Beauté</Logo>
          <Description>
            Offrez-vous une expérience de bien-être et de sérénité dans notre institut.
          </Description>
        </LogoSection>

        <LinksSection>
          <LinksTitle>Pages</LinksTitle>
          <LinksList>
            <LinkItem href="#">Accueil</LinkItem>
            <LinkItem href="#">Nos Soins</LinkItem>
            <LinkItem href="#">Offres Spéciales</LinkItem>
            <LinkItem href="#">Contact</LinkItem>
            <LinkItem href="#">Chèques Cadeaux</LinkItem>
          </LinksList>
        </LinksSection>

        <SocialSection>
          <SocialTitle>Suivez-nous</SocialTitle>
          <SocialIcons>
            <SocialIcon href="#" aria-label="Facebook">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              <FaTwitter />
            </SocialIcon>
          </SocialIcons>
        </SocialSection>
      </Content>
      <BottomSection>
        <BottomText>&copy; {new Date().getFullYear()} Institut de Beauté. Tous droits réservés.</BottomText>
      </BottomSection>
    </Section>
  );
};

export default Footer;

// Styled-components
const Section = styled.footer`
  background-color: ${({ theme }) => theme.colors.background || "#f1f1f1"}; /* Couleur de fond douce, clair */
  color: ${({ theme }) => theme.colors.text || "#333"}; /* Texte foncé pour contraste */
  padding: 4rem 2rem;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LogoSection = styled.div`
  flex: 1;
  max-width: 300px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex: 100%;
    text-align: center;
  }
`;

const Logo = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary || "#6c757d"}; /* Couleur douce et élégante */
`;

const Description = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.text || "#6c757d"}; /* Gris clair */
`;

const LinksSection = styled.div`
  flex: 1;
  max-width: 300px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex: 100%;
    text-align: center;
  }
`;

const LinksTitle = styled.h4`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary || "#6c757d"}; /* Couleur douce pour le titre */
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.a`
  display: block;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text || "#6c757d"}; /* Gris doux */
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary || "#e60000"}; /* Rouge ou autre couleur de survol */
    text-decoration: underline;
  }
`;

const SocialSection = styled.div`
  flex: 1;
  max-width: 300px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex: 100%;
    text-align: center;
  }
`;

const SocialTitle = styled.h4`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary || "#6c757d"};
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SocialIcon = styled.a`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text || "#6c757d"};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary || "#e60000"}; /* Changer la couleur au survol */
  }
`;

const BottomSection = styled.div`
  background-color: ${({ theme }) => theme.colors.primary || "#ffffff"};
  padding: 1rem;
`;

const BottomText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text || "#6c757d"}; /* Gris foncé */
`;
