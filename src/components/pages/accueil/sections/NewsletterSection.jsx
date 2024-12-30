import React from 'react';
import styled from 'styled-components';

const NewsletterSection = () => {
  return (
    <Section>
      <Content>
        <Title>Inscrivez-vous à notre newsletter</Title>
        <Description>
          Restez informé de nos dernières offres, services et actualités en vous inscrivant à notre newsletter.
        </Description>
        <IframeContainer>
          <iframe
            src="https://newsletter.peaudor.fr/hp/jQWC-bEepVzlqiHw8rnpdw/signup"
            width="100%"
            height="300px"
            frameBorder="0"
            title="Newsletter"
            allowFullScreen
          ></iframe>
        </IframeContainer>
      </Content>
    </Section>
  );
};

export default NewsletterSection;

const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 4rem 2rem;
  color: ${({ theme }) => theme.colors.text || "#333"};
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/newsletter.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
    opacity: 1;
  }
  & > * {
    position: relative;
    z-index: 2;
  }
`;


const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.white || "#ffffff"};
  padding: 3rem;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    max-width: 400px;
  }

`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary || "#333"};
  margin-bottom: 1rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const IframeContainer = styled.div`
  width: 100%;
  border: none;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;



