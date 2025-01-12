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
        </CookiesText>
        <LegalLink href="/mentions-legales">Mentions légales</LegalLink>
        <br />
        <LegalLink href="/cgv">Conditions générales de vente</LegalLink>
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
  max-width: 700px;
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
  padding: 1rem;
  margin: 1rem;
`;

const BottomText = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.white || "#d8d8d8"};
`;

const CookiesText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text || "#7c7a7a"};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const LegalLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary || "#6c757d"};
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary || "#e60000"};
  }
`;
