import React, { useState } from "react";
import { PageContainer, Container, Content, Header, Title, InteractiveSection, InteractiveTitle, Separator, Text, TextAnswer } from "./SharedStyles";
import ReactPlayer from "react-player";
import styled from "styled-components";




const BeauteDuRegard = () => {
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
    7: false,
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
          <Title>Beauté du regard</Title>
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
                    url="/Soins/videos/Rehaussement.mp4"
                    controls
                    width="100%"
                    height="auto"
                  />

                </ResponsiveVideoContainer>
                <ResponsiveVideoContainer>
                  <ReactPlayer
                    url="/Soins/videos/Brow_lift_avec_henne.mp4"
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
            <InteractiveTitle
              onClick={() => setShowDescription(!showDescription)}
            >
              Description
            </InteractiveTitle>
            {showDescription && (
              <Text>
                <p>
                  Offrez à votre regard une attention particulière avec des
                  techniques de beauté pour vos cils et sourcils. Découvrez nos
                  services pour un regard intense et sublimé, tout en respectant
                  la sensibilité de votre peau.
                </p>
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
                  {/* Teinture des cils */}
                  <li>
                    Rehaussement de cils lash lift avec coloration et soin botox
                    <div className="details-container">
                      <span className="price">60€</span>
                    </div>
                  </li>
                  <li>
                    Teinture des cils supérieur
                    <div className="details-container">
                      <span className="price">10€</span>
                    </div>
                  </li>
                  <li>
                    Teinture des cils inférieur
                    <div className="details-container">
                      <span className="price">5€</span>
                    </div>
                  </li>
                  <li>
                    Teinture des cils (supérieur + inférieur)
                    <div className="details-container">
                      <span className="price">12€</span>
                    </div>
                  </li>
                  <li>
                    Teinture des cils et soin botox supérieur
                    <div className="details-container">
                      <span className="price">15€</span>
                    </div>
                  </li>
                  <li>
                    Teinture des cils et soin botox inférieur
                    <div className="details-container">
                      <span className="price">10€</span>
                    </div>
                  </li>
                  <li>
                    Teinture des cils et soin botox (supérieur + inférieur)
                    <div className="details-container">
                      <span className="price">20€</span>
                    </div>
                  </li>

                  {/* Brow Lift */}
                  <li>
                    Brow lift sans teinture
                    <div className="details-container">
                      <span className="price">35€</span>
                    </div>
                  </li>
                  <li>
                    Brow lift avec teinture
                    <div className="details-container">
                      <span className="price">40€</span>
                    </div>
                  </li>
                  <li>
                    Brow lift avec teinture hybride
                    <div className="details-container">
                      <span className="price">45€</span>
                    </div>
                  </li>
                  <li>
                    Brow lift avec teinture henné
                    <div className="details-container">
                      <span className="price">50€</span>
                    </div>
                  </li>

                  {/* Teinture des sourcils */}
                  <li>
                    Teinture des sourcils
                    <div className="details-container">
                      <span className="price">10€</span>
                    </div>
                  </li>
                  <li>
                    Teinture des sourcils hybride
                    <div className="details-container">
                      <span className="price">20€</span>
                    </div>
                  </li>
                  <li>
                    Teinture des sourcils henné
                    <div className="details-container">
                      <span className="price">25€</span>
                    </div>
                  </li>

                  {/* Restructuration */}
                  <li>
                    Restructuration des sourcils complète (épilation au fil + teinture henné)
                    <div className="details-container">
                      <span className="price">30€</span>
                    </div>
                  </li>
                  <li>
                    Mise en forme des sourcils (crayon + gel)
                    <div className="details-container">
                      <span className="price">5€</span>
                    </div>
                  </li>

                  {/* Forfaits */}
                  <li>
                    Forfait Rehaussement de cils + Restructuration des sourcils "Brow lift"
                    <div className="details-container">
                      <span className="price">80€</span>
                    </div>
                  </li>

                  {/* Semi Permanent */}
                  <li>
                    Bilan Personnalisé semi permanent sourcils (informations, devis, etc.)
                    <div className="details-container">
                      <span className="price">20€</span>
                    </div>
                  </li>
                  <li>
                    Sourcils semi permanent "Microshading" (ombré)
                    <div className="details-container">
                      <span className="price">200€</span>
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
                      Quelle est la différence entre la teinture classique, la teinture hybride et la teinture henné ?
                    </strong>
                    {faqStates[1] && (
                      <p>
                        • <strong>Teinture classique :</strong> Formulée à base de pigments chimiques, elle colore efficacement les poils des sourcils et/ou des cils pour un résultat intense et immédiat, parfait pour un look sophistiqué.
                        <br />
                        • <strong>Teinture hybride :</strong> Combinaison de pigments chimiques et naturels, elle offre une tenue plus longue que la teinture classique, avec un effet légèrement coloré sur la peau pour un rendu plus dense et structuré.
                        <br />
                        • <strong>Teinture au henné :</strong> 100% naturelle, elle colore les poils et la peau pour un effet maquillé durable. Elle est idéale pour les peaux sensibles et celles qui recherchent une solution douce et végétale.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(2)}>
                      Qu’est-ce que la dermopigmentation (microshading) ?
                    </strong>
                    {faqStates[2] && (
                      <p>
                        La dermopigmentation, ou microshading, est une technique de maquillage semi-permanent qui consiste à déposer des pigments dans les couches superficielles de la peau. Contrairement au microblading, qui imite des poils, le microshading crée un effet poudré en reproduisant l’apparence d’un maquillage léger et dégradé, comme un effet “ombre”.
                        <br />
                        Cette méthode est idéale pour celles et ceux qui souhaitent des sourcils plus denses et structurés, tout en conservant un résultat naturel. Elle est particulièrement adaptée aux peaux sensibles ou grasses. La tenue varie entre 1 et 3 ans selon le type de peau et l’entretien.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(3)}>
                      Qu’est-ce que le browlift ?
                    </strong>
                    {faqStates[3] && (
                      <p>
                        Le browlift est un soin esthétique qui consiste à relever et redéfinir la forme des sourcils en utilisant des techniques de lifting et de fixation. Ce traitement permet d’obtenir des sourcils plus nets, plus structurés et un regard plus ouvert. Le browlift peut inclure des étapes de coiffage, de teinture et parfois de lamination des sourcils pour un effet longue durée.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(4)}>
                      Combien de temps dure un browlift ?
                    </strong>
                    {faqStates[4] && (
                      <p>
                        Un browlift dure généralement entre 6 et 8 semaines, en fonction de la repousse naturelle des poils. Les résultats peuvent varier d’une personne à l’autre, mais le soin permet de maintenir des sourcils parfaitement définis et relevés durant cette période, sans avoir besoin de retouches fréquentes.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(5)}>
                      Peut-on maquiller ses sourcils après un browlift ?
                    </strong>
                    {faqStates[5] && (
                      <p>
                        Il est recommandé d’attendre 48 heures après un browlift avant de maquiller vos sourcils. Cela permet aux produits utilisés lors du traitement de bien se fixer et d’assurer une tenue optimale. Une fois ce délai passé, vous pouvez appliquer des produits de maquillage pour sourcils, mais il est préférable d’éviter les produits huileux qui pourraient affecter les résultats.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(6)}>
                      Le browlift abîme-t-il les sourcils ?
                    </strong>
                    {faqStates[6] && (
                      <p>
                        Non, le browlift n’abîme pas les sourcils. Au contraire, il permet de les discipliner et de les fixer sans endommager les poils. Le traitement est conçu pour être doux et respectueux de la structure naturelle des sourcils. Cependant, il est important de confier ce soin à un professionnel qualifié pour garantir des résultats optimaux et éviter tout risque.
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

export default BeauteDuRegard;

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
