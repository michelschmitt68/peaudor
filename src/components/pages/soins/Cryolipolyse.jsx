import React, { useState } from "react";
import { PageContainer, Container, Content, Header, Title, InteractiveSection, InteractiveTitle, Separator, Text, TextAnswer } from "./SharedStyles";
import ReactPlayer from "react-player";
import styled from "styled-components";


const Amincissement = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [showTarifs, setShowTarifs] = useState(true);
  const [showFAQ, setShowFAQ] = useState(true);
  const [showVideo, setShowVideo] = useState(true);
  const [faqStates, setFaqStates] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const toggleFaq = (index) => {
    setFaqStates((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <PageContainer>
      <Container>
        <Header>
          <Title>Amincissement</Title>
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
                    url="/Soins/videos/Cryolipolyse.mp4"
                    controls
                    width="100%"
                    height="auto"
                  />
                </ResponsiveVideoContainer>
                <ResponsiveVideoContainer>
                  <ReactPlayer
                    url="/Soins/videos/Presso_arosha.mp4"
                    controls
                    width="100%"
                    height="auto"
                  />
                </ResponsiveVideoContainer>
                <ResponsiveVideoContainer>
                  <ReactPlayer
                    url="/Soins/videos/Remodelage_musculaire.mp4"
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
                <p>
                  Découvrez nos solutions innovantes pour sculpter votre silhouette :
                  <div className="description">
                    <br /><span className="cat">Cryolipolyse</span> : élimination des graisses localisées par le froid.
                    <br /><span className="cat">Remodelage musculaire</span> : tonifie et redessine vos muscles.
                    <br /><span className="cat">Presso esthétique</span> : drainage pour des jambes légères et une meilleure circulation.
                    <br /><span className="cat">Arosha</span> : soin détoxifiant et raffermissant, idéal après les excès.
                  </div>
                  <br />Votre allié pour une silhouette affinée et harmonieuse !
                </p>
              </Text>
            )}
            <Separator />
          </InteractiveSection>

          {/* Tarifs Section */}
          <InteractiveSection>
            <InteractiveTitle onClick={() => setShowTarifs(!showTarifs)}>
              Tarifs
            </InteractiveTitle>
            {showTarifs && (
              <Text>
                <ul>
                  <li>
                    Bilan minceur (offert pour l’achat d’une cure)
                    <div className="details-container">
                      <span className="price">39€</span>
                    </div>
                  </li>
                  <li>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfMJtu_3BAVJGMB-JcZly94OdLJEjl-GesuTbb8MxNkxiUBHg/viewform?usp=pp_url"
                      target="_blank"
                      rel="noreferrer"
                      className="highlight-link"
                    >
                      Bilan Minceur (en ligne) <span>cliquer ici</span>
                    </a>
                    <div className="details-container">
                      <span className="price">Gratuit</span>
                    </div>
                  </li>
                  <li>
                    Cryolipolyse 1 Aspiration (55min)
                    <div className="details-container">
                      <span className="price"><span className="info">à partir de</span> 100€</span>
                    </div>
                  </li>
                  <li>
                    Forfait Cryolipolyse 1 Aspiration + Presso-esthétique (la séance)
                    <div className="details-container">
                      <span className="price"><span className="info">à partir de</span> 106€</span>
                    </div>
                  </li>
                  <li>
                    Forfait 3 séances de Cryolipolyse 1 Aspiration + Presso-esthétique (1 séance par mois)
                    <div className="details-container">
                      <span className="price"><span className="info">à partir de </span> 290€</span>
                    </div>
                  </li>
                  <li>
                    Presso-esthétique (50min)
                    <div className="details-container">
                      <span className="price">30€</span>
                    </div>
                  </li>
                  <li>
                    Soin Corps Arosha + Presso-esthétique (1h)
                    <div className="details-container">
                      <span className="price">69€</span>
                    </div>
                  </li>
                  <li>
                    Remodelage musculaire (40min)
                    <div className="details-container">
                      <span className="price"><span className="info">à partir de</span> 40€</span>
                    </div>
                  </li>
                  <li>
                    Drainage lymphatique (Méthode Retana Franca, 1h 45min)
                    <div className="details-container">
                      <span className="price">170€</span>
                    </div>
                  </li>
                </ul>
              </Text>
            )}
            <Separator />
          </InteractiveSection>

          {/* FAQ Section */}
          <InteractiveSection>
            <InteractiveTitle onClick={() => setShowFAQ(!showFAQ)}>
              Questions fréquentes
            </InteractiveTitle>
            {showFAQ && (
              <TextAnswer>
                <ul>
                  <li>
                    <strong onClick={() => toggleFaq(1)}>
                      Qu'est-ce que la cryolipolyse ?
                    </strong>
                    {faqStates[1] && (
                      <p>
                        La cryolipolyse est une technique innovante d'amincissement qui utilise le froid pour éliminer les cellules graisseuses de manière ciblée et non invasive. Ce traitement est particulièrement efficace pour réduire les amas graisseux résistants aux régimes et au sport, sur des zones comme le ventre, les cuisses ou les hanches. Les résultats se développent progressivement en quelques semaines, laissant une silhouette plus harmonieuse. Une méthode douce et sans douleur pour sculpter votre corps !
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(2)}>
                      Qu'est-ce que la cryolipolyse et comment fonctionne-t-elle ?
                    </strong>
                    {faqStates[2] && (
                      <p>
                        La cryolipolyse est un traitement non chirurgical qui utilise le froid pour éliminer les cellules graisseuses localisées. En appliquant une température contrôlée sur les zones ciblées, les cellules graisseuses sont gelées et progressivement éliminées par le corps. Ce processus ne nuit pas aux tissus environnants, offrant une solution douce et efficace pour réduire les graisses tenaces. Les résultats sont visibles au bout de quelques semaines, avec une silhouette plus sculptée et affinée.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(3)}>
                      La cryolipolyse est-elle douloureuse ?
                    </strong>
                    {faqStates[3] && (
                      <p>
                        La cryolipolyse n'est généralement pas douloureuse, mais certaines sensations peuvent être ressenties pendant le traitement. Lors de l'application du froid, vous pouvez éprouver un engourdissement temporaire ou une sensation de picotement. Cela est dû à la diminution de température sur la zone traitée, mais ces sensations disparaissent rapidement après quelques minutes. Le traitement est non invasif et bien toléré, et vous pouvez reprendre vos activités normales immédiatement après la séance.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(4)}>
                      Quelle est la différence entre la pressothérapie esthétique seule et Arosha ?
                    </strong>
                    {faqStates[4] && (
                      <p>
                        La pressothérapie esthétique est un soin de drainage qui utilise des pressions douces pour stimuler la circulation sanguine et lymphatique, réduire la rétention d'eau et améliorer l'aspect de la peau. C'est une méthode idéale pour éliminer les toxines et favoriser une sensation de légèreté. Le soin Arosha, quant à lui, combine la pressothérapie esthétique avec des produits spécifiques qui agissent en profondeur pour détoxifier, raffermir et hydrater la peau. Il offre des bienfaits supplémentaires grâce à l'utilisation de techniques ciblées et de soins enrichis en principes actifs. Ainsi, la pressothérapie esthétique seule se concentre sur le drainage, tandis que Arosha propose un traitement plus complet incluant des effets de raffermissement et de détoxification.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(5)}>
                      Qu'est-ce que le remodelage musculaire CMSlim ?
                    </strong>
                    {faqStates[5] && (
                      <p>
                        Le remodelage musculaire CMSlim est un traitement non invasif qui utilise une technologie de stimulation électromagnétique pour tonifier, raffermir et sculpter les muscles. Il génère des contractions musculaires profondes qui permettent de renforcer et de redéfinir les zones ciblées, comme l'abdomen, les cuisses ou les fesses, sans effort physique. Cette méthode est idéale pour ceux qui cherchent à améliorer le tonus musculaire, réduire la cellulite et obtenir une silhouette plus sculptée sans chirurgie ni période de récupération.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(6)}>
                      Quels sont les bienfaits du remodelage musculaire avec CMSlim ?
                    </strong>
                    {faqStates[6] && (
                      <p>
                        Le remodelage musculaire avec CMSlim utilise une technologie de stimulation électrique avancée pour tonifier et raffermir les muscles. Ses principaux bienfaits incluent :
                        <ul>
                          <li>Renforcement musculaire : Stimule les muscles en profondeur pour augmenter leur tonus et leur définition.</li>
                          <li>Amélioration du contour corporel : Aide à sculpter les zones ciblées comme l'abdomen, les cuisses ou les fesses.</li>
                          <li>Effet raffermissant : Lutte contre le relâchement cutané en favorisant la fermeté et l'élasticité de la peau.</li>
                          <li>Réduction de la cellulite : Améliore la texture de la peau et réduit l'apparence de la cellulite.</li>
                          <li>Solution non invasive : Un traitement sans chirurgie ni récupération, avec des résultats visibles après quelques séances.</li>
                        </ul>
                        Le CMSlim est un excellent moyen d'obtenir une silhouette plus ferme et tonique de manière naturelle et confortable.
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

export default Amincissement;

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
