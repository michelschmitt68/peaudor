import React from "react";
import styled from "styled-components";

const TeamSection = () => {
  const teamMembers = [
    { name: "Alice Dupont", role: "Esthéticienne", image: "/team/personne1.jpeg" },
    { name: "Pierre Martin", role: "Massothérapeute", image: "/team/personne1.jpeg" },
    { name: "Sophie Leroy", role: "Maquilleuse", image: "/team/personne1.jpeg" },
  ];

  return (
    <Section>
      <Heading>Notre Équipe</Heading>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <MemberCard key={index}>
            <Image src={member.image} alt={member.name} />
            <Info>
              <MemberName>{member.name}</MemberName>
              <Role>{member.role}</Role>
            </Info>
          </MemberCard>
        ))}
      </TeamGrid>
    </Section>
  );
};

export default TeamSection;

const Section = styled.section`
  padding: 10rem 5rem; /* Padding par défaut sur les grands écrans */
  background: ${({ theme }) => theme.colors.secondaryBackground || "#f0f0f0"}; /* Nouveau fond */
  text-align: center;
  width: 100%;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.05); /* Effet doux pour le fond */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centre le contenu verticalement */
  
  /* Hauteur en desktop */
  min-height: 650px; /* Hauteur minimale */
  height: 100%; /* Garantit que la section prend tout l'espace vertical disponible */
  
  @media (max-width: 2000px) {
    padding: 8rem 3rem; /* Réduit le padding sur des écrans plus petits que 2000px */
  }
  
  @media (max-width: 1024px) {
    padding: 5rem 2rem; /* Réduction du padding sur tablette */
    min-height: auto; /* Hauteur dynamique basée sur le contenu */
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem; /* Réduction du padding sur mobile */
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary || "#2d3b45"}; /* Couleur du titre */
  margin-bottom: 6rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Trois colonnes sur grand écran */
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr; /* Deux colonnes sur tablette */
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Une seule colonne sur mobile */
    gap: 1rem;
  }
`;

const MemberCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  
  /* Adapter la hauteur en fonction du mode */
  height: auto; /* Hauteur automatique sur tous les écrans */

  &:hover {
    transform: scale(1.05);
  }

  /* Réduction de la hauteur sur mobile */
  @media (max-width: 768px) {
    height: 300px; /* Réduction de la hauteur sur mobile */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 60%; /* Augmente la taille de l'image en desktop */
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
  text-align: center;
  height: 40%; /* Réduit la taille de la description */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MemberName = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary || "#2d3b45"};
  margin-bottom: 0.5rem;
`;

const Role = styled.p`
  font-size: 0.9rem; /* Réduit la taille de la description */
  color: ${({ theme }) => theme.colors.secondary || "#777"};
`;
