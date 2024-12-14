import React from "react";
import styled from "styled-components";

const ContactSection = () => {
  return (
    <Section>
      <Content>
        <Title>Nous contacter</Title>
        <Description>
          Vous avez des questions ou souhaitez réserver un soin ? N'hésitez pas à nous
          contacter en remplissant le formulaire ci-dessous ou en nous appelant.
        </Description>
        <Form>
          <Input
            type="text"
            placeholder="Votre nom"
            required
          />
          <Input
            type="email"
            placeholder="Votre email"
            required
          />
          <TextArea
            placeholder="Votre message"
            rows="5"
            required
          />
          <Button type="submit">Envoyer</Button>
        </Form>
      </Content>
    </Section>
  );
};

export default ContactSection;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.lightBackground || "#f9f9f9"};
  color: ${({ theme }) => theme.colors.text || "#333"};
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.white || "#ffffff"};
  padding: 3rem;
  border-radius: 8px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary || "#333"};
  margin-bottom: 1rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary || "#e60000"};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary || "#e60000"};
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary || "#e60000"};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary || "#e60000"};
  }
`;

const Button = styled.button`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary || "#e60000"};
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary || "#c00000"};
    transform: scale(1.05);
  }
`;
