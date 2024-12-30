import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram } from "react-icons/fa";

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
            <LinkItem href="/nos-produits">Nos Produits</LinkItem>
            <LinkItem href="/notre-centre">Contact</LinkItem>
            <LinkItem href="/cheques-cadeaux">Chèques Cadeaux</LinkItem>
          </LinksList>
        </LinksSection>

        <SocialSection>
          <SocialTitle>Suivez-nous</SocialTitle>
          <SocialIcons>
            <SocialIcon href="https://www.facebook.com/peaudor68320/" aria-label="Facebook">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/_peaudor/" aria-label="Instagram">
              <FaInstagram />
            </SocialIcon>
          </SocialIcons>
        </SocialSection>
      </Content>

      <BottomSection>
        <CookiesText>
          Nous utilisons des cookies pour nous permettre de mieux comprendre comment le site est
          utilisé. En continuant à utiliser ce site, vous acceptez cette politique.{" "}
          <LegalLink href="/mentions-legales">Mentions légales</LegalLink>
        </CookiesText>
        <BottomText>&copy; {new Date().getFullYear()} Peau d'Or. Tous droits réservés.</BottomText>
      </BottomSection>
    </Section>
  );
};

export default Footer;

// Styled-components
const Section = styled.footer`
  color: ${({ theme }) => theme.colors.text || "#333"}; /* Texte foncé pour contraste */
  padding-top: 8rem;
  padding-bottom: 2rem;
  text-align: center;
  border-top: 2px solid #e3c29b;
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
  color: ${({ theme }) => theme.colors.primary || "#6c757d"};
`;

const Description = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.text || "#d8d8d8"};
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
  color: ${({ theme }) => theme.colors.primary || "#6c757d"};
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.a`
  display: block;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text || "#d8d8d8"};
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary || "#e60000"};
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
  justify-content: center;
  gap: 20px;
`;

const SocialIcon = styled.a`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text || "#d8d8d8"};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary || "#e60000"};
  }
`;

const BottomSection = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary || "#ffffff"};
  padding: 1rem;
`;

const BottomText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.dark || "#d8d8d8"};
`;

const CookiesText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text || "#666"};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const LegalLink = styled.a`
  color: ${({ theme }) => theme.colors.primary || "#6c757d"};
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary || "#e60000"};
  }
`;
