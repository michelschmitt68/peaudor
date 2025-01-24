import React from "react";
import styled from "styled-components";

const TeamSection = () => {
  const teamMembers = [
    { name: "Noémie", role: "Experte amincissement & regard", image: "/team/member1.jpeg" },
    { name: "Elsa", role: "Esthéticienne polyvalente", image: "/team/member2.jpeg" },
    { name: "Maité", role: "Experte sourcils", image: "/team/member3.jpeg" },
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
  padding: 10rem 5rem; 
  text-align: center;
  width: 100%;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 650px;
  height: 100%;
  @media (max-width: 2000px) {
    padding: 8rem 3rem;
  }
  @media (max-width: 1024px) {
    padding: 5rem 2rem;
    min-height: auto;
  }
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary || "#2d3b45"};
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
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const MemberCard = styled.div`
  background-color: #69696957;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  height: auto;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    height: 800px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;

const Info = styled.div`
  text-align: center;
  height: 30%;
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
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondary || "#777"};
`;
