import React, { useState } from "react";
import { PageContainer, Container, Content, Header, Title, InteractiveSection, InteractiveTitle, Separator, Text, TextAnswer } from "./SharedStyles";
import ReactPlayer from "react-player";
import styled from "styled-components";

const EpilationAuFil = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [showTarifs, setShowTarifs] = useState(true);
  const [showFAQ, setShowFAQ] = useState(true);
  const [showVideo, setShowVideo] = useState(true);
  const [faqStates, setFaqStates] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const toggleFaq = (index) => {
    setFaqStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <PageContainer>
      <Container>
        <Header>
          <Title>Épilation au fil</Title>
        </Header>

        <Content>
          <InteractiveSection>
            <InteractiveTitle onClick={() => setShowVideo(!showVideo)}>
              Vidéos
            </InteractiveTitle>
            {showVideo && (
              <>
                <ResponsiveVideoContainer>
                  <ReactPlayer
                    url="/Soins/videos/Epilation_au_fil.mp4"
                    controls
                    width="100%"
                    height="auto"
                  />
                </ResponsiveVideoContainer>
              </>

            )}
            <Separator />
          </InteractiveSection>
          <InteractiveSection>
            <InteractiveTitle onClick={() => setShowDescription(!showDescription)}>
              Description
            </InteractiveTitle>
            {showDescription && (
              <Text>
                <p>Offrez à votre peau une épilation précise et naturelle grâce à la technique du fil. Idéale pour les sourcils, la lèvre supérieure ou le visage entier, cette méthode douce respecte les peaux sensibles tout en garantissant un résultat net et impeccable.</p>
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
                  <li>
                    Sourcils
                    <div className="details-container">
                      <span className="price">12€</span>
                    </div>
                  </li>
                  <li>
                    Lèvre supérieure
                    <div className="details-container">
                      <span className="price">6€</span>
                    </div>
                  </li>
                  <li>
                    Forfait Épilation sourcils et lèvre supérieure
                    <div className="details-container">
                      <span className="price">14€</span>
                    </div>
                  </li>
                  <li>
                    Joues
                    <div className="details-container">
                      <span className="price">10€</span>
                    </div>
                  </li>
                  <li>
                    Menton
                    <div className="details-container">
                      <span className="price">6€</span>
                    </div>
                  </li>
                  <li>
                    Visage complet
                    <div className="details-container">
                      <span className="price">25€</span>
                    </div>
                  </li>
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
              <TextAnswer>
                <ul>
                  <li>
                    <strong onClick={() => toggleFaq(1)}>
                      Qu’est-ce que l’épilation au fil et en quoi est-elle différente des autres méthodes d’épilation ?
                    </strong>
                    {faqStates[1] && (
                      <p>
                        L’épilation au fil est une technique ancestrale qui consiste à
                        utiliser un fil en coton pour saisir et éliminer les poils à la
                        racine. Contrairement à l’épilation à la cire ou à la pince, cette
                        méthode permet une précision maximale, idéale pour les zones
                        délicates comme les sourcils ou la lèvre supérieure. Elle est
                        également moins irritante pour la peau et permet de garantir une
                        épilation plus nette et durable.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(2)}>
                      L’épilation au fil est-elle adaptée à tous les types de peau ?
                    </strong>
                    {faqStates[2] && (
                      <p>
                        Oui, l’épilation au fil est adaptée à tous les types de peau,
                        y compris les peaux sensibles. Comme elle n’utilise pas de produits
                        chimiques ni de chaleur, elle est souvent plus douce que d’autres
                        méthodes comme la cire. Cependant, pour les peaux très sensibles ou
                        sujettes à des irritations, il est recommandé de consulter un
                        professionnel avant de procéder à l’épilation pour s’assurer que
                        cette méthode convient.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(3)}>
                      Combien de temps durent les résultats de l’épilation au fil ?
                    </strong>
                    {faqStates[3] && (
                      <p>
                        Les résultats de l’épilation au fil peuvent durer entre 3 et 4
                        semaines, selon la vitesse de repousse des poils de chaque personne.
                        En éliminant les poils à la racine, cette méthode offre une épilation
                        plus durable par rapport à la cire, et permet une repousse plus fine
                        et plus douce.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(4)}>
                      L’épilation au fil fait-elle plus mal que la cire ou la pince ?
                    </strong>
                    {faqStates[4] && (
                      <p>
                        La douleur ressentie lors de l’épilation au fil dépend de la
                        sensibilité de chaque personne, mais elle est généralement
                        considérée comme moins intense que celle de la cire, car la peau
                        n’est pas chauffée. Nombreuses personnes trouvent cette méthode plus
                        précise et moins irritante.
                      </p>
                    )}
                  </li>
                </ul>
              </TextAnswer>
            )}
            <Separator />
          </InteractiveSection>
        </Content>
      </Container>
    </PageContainer>
  );
};

export default EpilationAuFil;

const ResponsiveVideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 1rem;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
