import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Cryolipolyse = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [showTarifs, setShowTarifs] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  return (
    <PageContainer>
      <Header>
        <Title>Qu’est-ce que la cryolipolyse ?</Title>
        <VideoContainer>
          <ReactPlayer
            url="/Soins/videos/Cryolipolyse.mp4"
            controls
            width="100%"
            height="auto"
          />
        </VideoContainer>
      </Header>

      <Content>
        <InteractiveSection>
          <InteractiveTitle
            onClick={() => setShowDescription(!showDescription)}
          >
            Description
          </InteractiveTitle>
          {showDescription && (
            <Text>
              <h3>Qu’est-ce que la cryolipolyse ?</h3>
              <p>La cryolipolyse est une technique de médecine esthétique non invasive qui permet de réduire les graisses localisées par l’utilisation du froid contrôlé. Inspirée des recherches sur l’impact du froid sur les cellules graisseuses, cette méthode cible les amas de graisse résistants aux régimes et à l’exercice physique, en les éliminant progressivement.</p>

              <h3>Comment ça fonctionne ?</h3>
              <p><strong>1. Action du froid contrôlé :</strong></p>
              <ul>
                <li>Les cellules graisseuses (adipocytes) sont sensibles au froid extrême. Lorsqu’elles sont exposées à des températures très basses, elles entrent dans un processus appelé apoptose (mort cellulaire programmée).</li>
                <li>Ces cellules mortes sont ensuite naturellement éliminées par le système lymphatique dans les semaines suivant le traitement.</li>
              </ul>
              <p><strong>2. Procédé :</strong></p>
              <ul>
                <li>Une pièce à main (applicateur) est placée sur la zone à traiter. Elle aspire légèrement la peau et la graisse sous-cutanée tout en appliquant un froid contrôlé.</li>
                <li>La séance dure généralement entre 30 minutes et 1 heure par zone.</li>
              </ul>

              <h3>Les avantages de la cryolipolyse</h3>
              <ul>
                <li>Réduction des graisses localisées : Idéal pour cibler les zones résistantes (ventre, poignées d’amour, cuisses, bras, dos, etc.).</li>
                <li>Traitement non invasif : Pas d’aiguille, pas d’anesthésie, ni de chirurgie.</li>
                <li>Résultats progressifs et naturels : Les graisses sont éliminées naturellement par l’organisme en 6 à 12 semaines après le traitement.</li>
                <li>Aucune période d’arrêt : Reprise immédiate des activités après la séance.</li>
              </ul>

              <h3>Pour qui est-ce adapté ?</h3>
              <ul>
                <li>Personnes proches de leur poids idéal mais présentant des amas graisseux localisés.</li>
                <li>Candidats en bonne santé générale, avec une peau élastique.</li>
                <li>Non recommandé pour les personnes souffrant de certaines conditions médicales (ex. : hernie, cryoglobulinémie).</li>
              </ul>

              <h3>Résultats attendus</h3>
              <ul>
                <li>Une réduction visible de la graisse dans les zones traitées, jusqu’à 20 à 30 % en une seule séance.</li>
                <li>Amélioration progressive sur plusieurs semaines.</li>
              </ul>

              <h3>Précautions et effets secondaires</h3>
              <ul>
                <li>Les effets secondaires sont généralement légers : rougeurs, engourdissements ou sensations de tiraillement temporaire.</li>
                <li>Une consultation préalable est nécessaire pour évaluer l’éligibilité et définir un plan adapté à vos objectifs.</li>
              </ul>

              <p>La cryolipolyse est une solution efficace pour remodeler la silhouette de façon naturelle et sans effort, en complément d’un mode de vie sain.</p>
            </Text>
          )}
          <Separator />
        </InteractiveSection>

        <InteractiveSection>
          <InteractiveTitle onClick={() => setShowTarifs(!showTarifs)}>
            Tarifs
          </InteractiveTitle>
          {showTarifs && (
            <Text>
              <ul>
                <li>Zone simple : 150€ par séance</li>
                <li>Deux zones : 250€ par séance</li>
                <li>Pack 4 séances : 900€</li>
              </ul>
            </Text>
          )}
          <Separator />
        </InteractiveSection>

        <InteractiveSection>
          <InteractiveTitle onClick={() => setShowFAQ(!showFAQ)}>
            Questions fréquentes
          </InteractiveTitle>
          {showFAQ && (
            <Text>
              <ul>
                <li><strong>Est-ce douloureux ?</strong> Non, la cryolipolyse est généralement bien tolérée, bien que des sensations de froid ou de tiraillement puissent être ressenties.</li>
                <li><strong>Combien de séances sont nécessaires ?</strong> Cela dépend des objectifs, mais une à trois séances par zone suffisent généralement.</li>
                <li><strong>Quand voit-on les résultats ?</strong> Les résultats apparaissent progressivement sur 6 à 12 semaines.</li>
              </ul>
            </Text>
          )}
          <Separator />
        </InteractiveSection>
      </Content>
    </PageContainer>
  );
};

export default Cryolipolyse;

// Styled-components
const PageContainer = styled.div`
  padding: 5rem 10rem;
  font-family: Arial, sans-serif;
  background-color: #ffffff;
  margin: 5rem;
  border-radius: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 6rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary || "#1a73e8"};
  margin-bottom: 3rem;
`;

const VideoContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  video {
    width: 100%;
    border-radius: 8px;
  }
`;

const Content = styled.div`
  line-height: 1.8;
  color: #555;
`;

const InteractiveSection = styled.div`
  margin-bottom: 2rem;
`;

const InteractiveTitle = styled.h2`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary || "#1a73e8"};
  cursor: pointer;
  margin-bottom: 1rem;
  &:hover {
    color: #b68d2c;
  }
`;

const Separator = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.primary || "#1a73e8"};
  margin: 1rem 0;
  width: 80%;
`;

const Text = styled.div`
  font-size: 1rem;
  color: #444;
  ul {
    margin-top: 0.5rem;
    padding-left: 1.5rem;
    list-style: disc;
  }
  li {
    margin-bottom: 0.75rem;
  }
`;