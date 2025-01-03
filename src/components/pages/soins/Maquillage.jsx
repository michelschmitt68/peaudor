import React, { useState } from "react";
import { PageContainer, Container, Content, Header, Title, InteractiveSection, InteractiveTitle, Separator, Text, TextAnswer } from "./SharedStyles";

const Maquillage = () => {
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
          <Title>Maquillage</Title>
        </Header>

        <Content>
          <InteractiveSection>
            <InteractiveTitle onClick={() => setShowDescription(!showDescription)}>
              Description
            </InteractiveTitle>
            {showDescription && (
              <Text>
                <p>
                  Sublimez votre beauté le jour J avec un maquillage
                  personnalisé pour mariée. Adapté à votre style et à vos envies,
                  il garantit un teint parfait et un regard captivant, pour un
                  maquillage longue tenue qui vous accompagnera toute la journée.
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
                    Maquillage léger
                    <div className="details-container">
                      <span className="price">25€</span>
                    </div>
                  </li>
                  <li>
                    Maquillage complet (sans faux-cils)
                    <div className="details-container">
                      <span className="price">30€</span>
                    </div>
                  </li>
                  <li>
                    Maquillage mariée
                    <div className="details-container">
                      <span className="price"><span className="info">à partir de </span>45€</span>
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
                      Est-ce que le maquillage mariée est adapté à tous types de peau ?
                    </strong>
                    {faqStates[1] && (
                      <p>
                        Oui, le maquillage est personnalisé selon votre type de
                        peau et vos préférences pour garantir un résultat optimal.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(2)}>
                      Combien de temps dure le maquillage longue tenue ?
                    </strong>
                    {faqStates[2] && (
                      <p>
                        Le maquillage longue tenue est conçu pour durer toute la journée
                        et la soirée, même dans des conditions difficiles.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(3)}>
                      Les faux-cils sont-ils inclus dans le maquillage complet ?
                    </strong>
                    {faqStates[3] && (
                      <p>
                        Non, le maquillage complet ne comprend pas les faux-cils, mais
                        ils peuvent être ajoutés en option moyennant un coût supplémentaire.
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

export default Maquillage;
