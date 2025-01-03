import React, { useState } from "react";
import { PageContainer, Container, Content, Header, Title, InteractiveSection, InteractiveTitle, Separator, Text, TextAnswer } from "./SharedStyles";

const SoinsDesPieds = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [showTarifs, setShowTarifs] = useState(true);
  const [showFAQ, setShowFAQ] = useState(true);
  
  return (
    <PageContainer>
      <Container>
        <Header>
          <Title>Soins des Pieds</Title>
        </Header>

        <Content>
          <InteractiveSection>
            <InteractiveTitle onClick={() => setShowDescription(!showDescription)}>
              Description
            </InteractiveTitle>
            {showDescription && (
              <Text>
                <p>
                  Offrez à vos pieds un soin complet avec bain relaxant, gommage exfoliant, modelage apaisant et masque nourrissant. Ce soin revitalise vos pieds, les rend doux et hydratés, tout en procurant une sensation de bien-être totale. C’est la solution idéale pour retrouver des pieds lisses, agréablement parfumés et prêts à affronter toutes les situations.
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
                    Soin complet (bain, gommage, modelage, masque)
                    <div className="details-container">
                      <span className="price">29€</span>
                    </div>
                  </li>
                  <li>
                    Soin Calluspeeling Anti-Callosités 30 min
                    <div className="details-container">
                      <span className="price">35€</span>
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
                    <strong>
                      Qu’est-ce qu’un soin complet des pieds ?
                    </strong>
                    <p>
                      Le soin complet des pieds est une expérience de détente totale pour vos pieds. Il inclut un bain relaxant, un gommage exfoliant pour éliminer les peaux mortes, un modelage apaisant pour détendre vos pieds et un masque nourrissant pour hydrater et revitaliser. Ce soin est idéal pour garder des pieds doux et bien entretenus.
                    </p>
                  </li>
                  <li>
                    <strong>
                      Qu’est-ce que le soin Calluspeeling Anti-Callosités ?
                    </strong>
                    <p>
                      Le soin Calluspeeling Anti-Callosités est un traitement ciblé qui aide à éliminer les callosités et durillons des pieds. En seulement 30 minutes, il laisse la peau de vos pieds lisse et douce grâce à un soin spécifique qui traite les zones les plus rugueuses de manière efficace et sans douleur.
                    </p>
                  </li>
                  <li>
                    <strong>
                      Est-ce que le soin des pieds est adapté à tout le monde ?
                    </strong>
                    <p>
                      Oui, le soin des pieds est adapté à tous, quel que soit le type de peau ou la condition des pieds. Que vous ayez des pieds secs, fatigués ou que vous souffriez de callosités, ces soins permettent d’améliorer la santé et l’apparence de vos pieds.
                    </p>
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

export default SoinsDesPieds;
