import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Cryolipolyse = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [showTarifs, setShowTarifs] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  return (
    <PageContainer>
     <Container>
         {showPopup && (
           <PopupOverlay>
             <PopupContent>
               <PopupTitle>Notice d'information</PopupTitle>
               <PopupText>
                 Attention! L'exposition aux rayonnements d'un appareil de bronzage peut provoquer des cancers de la peau et des yeux et est responsable d'un vieillissement cutané prématuré. L'existence d'une réglementation du bronzage artificiel ne permet pas d'éliminer les risques sanitaires encourus en cas d'exposition, en particulier le risque du cancer. L'utilisation de ces appareils est interdite aux personnes de moins de 18 ans. Portez les lunettes de protection fournies.
               </PopupText>
               <PopupButton onClick={() => setShowPopup(false)}>J'ai compris</PopupButton>
             </PopupContent>
           </PopupOverlay>
         )}
        
         <Header>
           <Title>Bronzage UV</Title>
           <VideoContainer>
             <ReactPlayer
               url="/Soins/videos/BronzageUV.mp4"
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
                 <h3>Bronzage UV</h3>
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
                   <li>8min : 6,40€</li>
                   <li>10min : 8€</li>
                   <li>12min : 9,60€</li>
                   <li>14min : 11,20€</li>
                   <li>16min : 12,80€</li>
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
     </Container>
    </PageContainer>
  );
};

export default Cryolipolyse;

// Styled-components
const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #313131;
`;

const Container = styled.div`
    width: 75%;
    padding: 5rem;
    background-color: ${({ theme }) => theme.colors.white || "#1a73e8"};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 80px;
    margin-top: 80px;
    border: solid 2px ${({ theme }) => theme.colors.secondary || "#1a73e8"};
    @media (max-width: 768px) {
    padding: 3.5rem;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 6rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary || "#1a73e8"};
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
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
  color: #000;
`;

const InteractiveSection = styled.div`
  margin-bottom: 2rem;
`;

const InteractiveTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary || "#1a73e8"};
  cursor: pointer;
  margin-bottom: 1rem;
  &:hover {
    color: #b68d2c;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Separator = styled.hr`
    border: none;
    border-top: 1px solid #c0a667;
    width: 80%;
`;

const Text = styled.div`
  font-size: 1rem;
  color: #494949;
  margin-bottom: 2rem;
  ul {
    margin-top: 0.5rem;
    padding-left: 1.5rem;
    list-style: disc;
  }
  li {
    margin-bottom: 0.75rem;
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const PopupTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary || "#1a73e8"};
  margin-bottom: 2rem;
`;

const PopupText = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 2rem;
  line-height: 1.8rem;
`;

const PopupButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary || "#1a73e8"};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #b68d2c;
  }
`;
