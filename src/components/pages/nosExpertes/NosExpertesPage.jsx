import React from "react";
import styled from "styled-components";

// Exemple de données pour les expertes
const experts = [
  { name: "Alice Dupont", role: "Esthéticienne", image: "/team/personne1.jpeg", description: "Alice est une experte en soins du visage et du corps. Elle est spécialisée dans les soins anti-âge, l'épilation et le bien-être global.", services: ["Soins du visage", "Épilation", "Soins anti-âge"] },
  { name: "Pierre Martin", role: "Massothérapeute", image: "/team/personne2.jpeg", description: "Pierre offre une large gamme de massages, allant du relaxant au thérapeutique. Son approche personnalisée vous permettra de vous détendre en profondeur.", services: ["Massage relaxant", "Massage thérapeutique"] },
  { name: "Sophie Leroy", role: "Maquilleuse", image: "/team/personne3.jpeg", description: "Sophie est une maquilleuse professionnelle, spécialisée dans le maquillage de mariage, le maquillage de soirée et les conseils beauté personnalisés.", services: ["Maquillage de mariage", "Maquillage de soirée"] },
];

const ExpertsPage = () => {
  return (
    <PageContainer>
      <PageHeading>Nos expertes</PageHeading>
      <PageDescription>
        Découvrez nos expertes en beauté et bien-être. Elles sont spécialisées dans divers domaines pour répondre à tous vos besoins.
      </PageDescription>

      <TeamGrid>
        {experts.map((expert, index) => (
          <ExpertCard key={index}>
            <ExpertImageContainer>
              <ExpertImage src={expert.image} alt={expert.name} />
            </ExpertImageContainer>
            <ExpertInfo>
              <ExpertName>{expert.name}</ExpertName>
              <ExpertRole>{expert.role}</ExpertRole>
              <ExpertDescription>{expert.description}</ExpertDescription>
              <TakeAppointmentButton onClick={() => alert(`Prendre rendez-vous avec ${expert.name}`)}>
                Prendre rendez-vous
              </TakeAppointmentButton>
            </ExpertInfo>
          </ExpertCard>
        ))}
      </TeamGrid>
    </PageContainer>
  );
};

export default ExpertsPage;

// Styled-components

const PageContainer = styled.section`
  padding: 8rem 4rem;
  background-image: url("/test.jpg"); /* L'image de fond */
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 650px;
  color: ${({ theme }) => theme.colors.primary || "#2d3b45"};
  
  /* Ajout d'un effet sombre sur l'image de fond avec un pseudo-élément */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8); /* L'effet sombre sur l'image */
    z-index: 1;
  }

  @media (max-width: 1024px) {
    padding: 5rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const PageHeading = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary || "#2d3b45"};
  margin-bottom: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.3;
  z-index: 2; /* Assure que le texte soit au-dessus de l'image de fond */
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const PageDescription = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondary || "#777"};
  margin-bottom: 4rem;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  z-index: 2; /* Assure que le texte soit au-dessus de l'image de fond */
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TeamGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  z-index: 2; /* Assure que le texte soit au-dessus de l'image de fond */
`;

const ExpertCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 900px;
  padding: 1.5rem;
  align-items: center;
  position: relative;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const ExpertImageContainer = styled.div`
  flex: 1;
  max-width: 200px;
  margin-right: 2rem;
  position: relative;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const ExpertImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  position: relative;
  z-index: 1; /* Assure que l'image soit au-dessus de l'overlay sombre */
`;

const ExpertInfo = styled.div`
  flex: 2;
  text-align: left;
`;

const ExpertName = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary || "#2d3b45"};
  margin-bottom: 0.5rem;
`;

const ExpertRole = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.secondary || "#777"};
  margin-bottom: 1rem;
`;

const ExpertDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.dark || "#555"};
  line-height: 1.6;
  margin-top: 1rem;
`;

const TakeAppointmentButton = styled.button`
  background: ${({ theme }) => theme.colors.primary || "#2d3b45"};
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  margin-top: 1.5rem;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary || "#555"};
  }
`;

