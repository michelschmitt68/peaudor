import React, { useState } from "react";
import { PageContainer, Container, Content, Header, Title, InteractiveSection, InteractiveTitle, Separator, Text, TextAnswer } from "./SharedStyles";

const EpilationALaCire = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [showTarifs, setShowTarifs] = useState(true);
  const [showFAQ, setShowFAQ] = useState(true);
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
          <Title>Épilation à la cire</Title>
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
                <p>
                  Profitez d’une épilation du corps efficace et durable à la
                  cire. Cette méthode élimine les poils à la racine pour une peau
                  lisse et douce pendant plusieurs semaines, tout en respectant la
                  sensibilité de votre peau.
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
                    Aisselles
                    <div className="details-container">
                      <span className="price">13€</span>
                    </div>
                  </li>
                  <li>
                    Avant Bras
                    <div className="details-container">
                      <span className="price">16€</span>
                    </div>
                  </li>
                  <li>
                    Bras entier
                    <div className="details-container">
                      <span className="price">19€</span>
                    </div>
                  </li>
                  <li>
                    Maillot Simple
                    <div className="details-container">
                      <span className="price">14€</span>
                    </div>
                  </li>
                  <li>
                    Maillot Échancré
                    <div className="details-container">
                      <span className="price">21€</span>
                    </div>
                  </li>
                  <li>
                    Maillot Semi-Intégral
                    <div className="details-container">
                      <span className="price">23€</span>
                    </div>
                  </li>
                  <li>
                    Maillot Intégral
                    <div className="details-container">
                      <span className="price">27€</span>
                    </div>
                  </li>
                  <li>
                    Inter-fessier
                    <div className="details-container">
                      <span className="price">4€</span>
                    </div>
                  </li>
                  <li>
                    Demi-jambes ou Cuisses
                    <div className="details-container">
                      <span className="price">19€</span>
                    </div>
                  </li>
                  <li>
                    3/4 Jambes
                    <div className="details-container">
                      <span className="price">23€</span>
                    </div>
                  </li>
                  <li>
                    Jambes Entières
                    <div className="details-container">
                      <span className="price">26€</span>
                    </div>
                  </li>
                  <li>
                    Dos ou Torse Homme
                    <div className="details-container">
                      <span className="price">23€</span>
                    </div>
                  </li>
                  <li>
                    Forfait Aisselles + Maillot
                    <div className="details-container">
                      <span className="price">22€</span>
                    </div>
                  </li>
                  <li>
                    Forfait Demi-Jambes + Maillot ou Aisselles
                    <div className="details-container">
                      <span className="price">28€</span>
                    </div>
                  </li>
                  <li>
                    Forfait Demi-Jambes + Maillot + Aisselles
                    <div className="details-container">
                      <span className="price">36€</span>
                    </div>
                  </li>
                  <li>
                    Forfait Jambes Entières + Maillot ou Aisselles
                    <div className="details-container">
                      <span className="price">37€</span>
                    </div>
                  </li>
                  <li>
                    Forfait Jambes Entières + Maillot + Aisselles
                    <div className="details-container">
                      <span className="price">46€</span>
                    </div>
                  </li>
                  <li>
                    Supplément 3/4 Jambes
                    <div className="details-container">
                      <span className="price">4€</span>
                    </div>
                  </li>
                  <li>
                    Supplément Maillot Échancré
                    <div className="details-container">
                      <span className="price">7€</span>
                    </div>
                  </li>
                  <li>
                    Supplément Maillot Intégral
                    <div className="details-container">
                      <span className="price">9€</span>
                    </div>
                  </li>
                  <li>
                    Forfait Dos + Torse Homme
                    <div className="details-container">
                      <span className="price">40€</span>
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
                      L'épilation à la cire est-elle douloureuse ?
                    </strong>
                    {faqStates[1] && (
                      <p>
                        L'épilation à la cire peut entraîner une sensation de tiraillement lors du retrait, mais la douleur varie selon la sensibilité de chacun et la zone traitée. Avec une pratique régulière, la douleur diminue souvent car les poils deviennent plus fins et moins nombreux.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(2)}>
                      Combien de temps dure le résultat ?
                    </strong>
                    {faqStates[2] && (
                      <p>
                        L'épilation à la cire offre des résultats durables, généralement entre 3 et 4 semaines, selon la vitesse de repousse des poils.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(3)}>
                      Faut-il une longueur minimale de poils pour l'épilation ?
                    </strong>
                    {faqStates[3] && (
                      <p>
                        Oui, il est recommandé que les poils mesurent au moins 5 mm pour que la cire puisse les retirer efficacement.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(4)}>
                      Quels sont les bienfaits de l'épilation à la cire ?
                    </strong>
                    {faqStates[4] && (
                      <p>
                        En plus d'éliminer les poils à la racine, l'épilation à la cire exfolie légèrement la peau, la laissant douce et lisse. Avec le temps, les poils repoussent plus fins et moins nombreux.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(5)}>
                      Puis-je m'exposer au soleil après une épilation à la cire ?
                    </strong>
                    {faqStates[5] && (
                      <p>
                        Il est conseillé d'éviter l'exposition directe au soleil pendant 24 à 48 heures après une épilation pour éviter les irritations ou les taches sur la peau.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(6)}>
                      Est-ce adapté à toutes les zones du corps ?
                    </strong>
                    {faqStates[6] && (
                      <p>
                        Oui, l'épilation à la cire peut être réalisée sur presque toutes les zones du corps : jambes, bras, aisselles, maillot, dos, et même le visage, en utilisant des cires adaptées à chaque zone.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(7)}>
                      Y a-t-il des contre-indications à l'épilation à la cire ?
                    </strong>
                    {faqStates[7] && (
                      <p>
                        L'épilation à la cire est déconseillée sur une peau irritée, brûlée par le soleil ou présentant des lésions. Si vous utilisez des traitements comme le rétinol ou l'acide glycolique, il est préférable de consulter avant une séance.
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

export default EpilationALaCire;
