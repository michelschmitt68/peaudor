import React, { useState } from "react";
import { PageContainer, Container, Content, Header, Title, InteractiveSection, InteractiveTitle, Separator, Text, TextAnswer } from "./SharedStyles";

const VernisSemiPermanent = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [showTarifs, setShowTarifs] = useState(true);
  const [showFAQ, setShowFAQ] = useState(true);
  const [faqStates, setFaqStates] = useState({
    1: false,
    2: false,
    3: false,
  });

  const toggleFaq = (index) => {
    setFaqStates((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <PageContainer>
      <Container>
        <Header>
          <Title>Vernis Semi-Permanent</Title>
        </Header>

        <Content>
          <InteractiveSection>
            <InteractiveTitle onClick={() => setShowDescription(!showDescription)}>
              Description
            </InteractiveTitle>
            {showDescription && (
              <Text>
                <p>
                  Sublimez vos ongles avec un vernis semi-permanent qui garantit
                  une couleur intense et une brillance longue durée. Profitez
                  d’ongles impeccables pendant plusieurs semaines, sans retouche.
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
                  <li>
                    Vernis Semi-Permanent Mains
                    <div className="details-container">
                      <span className="price">25€</span>
                    </div>
                  </li>
                  <li>
                    Vernis Semi-Permanent Mains (avec dépose)
                    <div className="details-container">
                      <span className="price">29€</span>
                    </div>
                  </li>
                  <li>
                    Dépose avec soin
                    <div className="details-container">
                      <span className="price">15€</span>
                    </div>
                  </li>
                  <li>
                    Supplément French
                    <div className="details-container">
                      <span className="price">3€</span>
                    </div>
                  </li>
                  <li>
                    Supplément Déco
                    <div className="details-container">
                      <span className="price">Sur devis</span>
                    </div>
                  </li>
                  <li>
                    Vernis Semi-Permanent Pieds
                    <div className="details-container">
                      <span className="price">25€</span>
                    </div>
                  </li>
                  <li>
                    Vernis Semi-Permanent Pieds (avec dépose)
                    <div className="details-container">
                      <span className="price">29€</span>
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
                      Quelle est la différence entre le vernis semi-permanent simple et le vernis semi-permanent gainage ?
                    </strong>
                    {faqStates[1] && (
                      <p>
                        <u>Vernis semi-permanent simple</u> : Une application de vernis formulé pour durer
                        jusqu’à deux semaines sans s’écailler, offrant une couleur éclatante et une
                        brillance durable avec une texture légère et flexible.
                        <br />
                        <u>Vernis semi-permanent gainage</u> : Inclut une couche de gel souple pour
                        renforcer et protéger l’ongle, idéal pour les ongles fins ou fragiles. Cela
                        procure une meilleure tenue et une résistance accrue.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(2)}>
                      Combien de temps dure le vernis semi-permanent ?
                    </strong>
                    {faqStates[2] && (
                      <p>
                        Le vernis semi-permanent dure généralement 2 à 3 semaines,
                        selon le soin apporté à vos ongles.
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

export default VernisSemiPermanent;
