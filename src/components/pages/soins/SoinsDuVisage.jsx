import React, { useState } from "react";
import { PageContainer, Container, Content, Header, Title, InteractiveSection, InteractiveTitle, Separator, Text, TextAnswer } from "./SharedStyles";

const SoinsDuVisage = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [showTarifs, setShowTarifs] = useState(true);
  const [showFAQ, setShowFAQ] = useState(true);
  const [faqStates, setFaqStates] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const toggleFaq = (index) => {
    setFaqStates((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <PageContainer>
      <Container>
        <Header>
          <Title>Soins du Visage</Title>
        </Header>

        <Content>
          <InteractiveSection>
            <InteractiveTitle onClick={() => setShowDescription(!showDescription)}>
              Description
            </InteractiveTitle>
            {showDescription && (
              <Text>
                <p>
                  Offrez à votre peau un soin revitalisant et personnalisé. Nos soins du visage sont conçus pour répondre à vos besoins spécifiques et raviver l'éclat de votre peau. Profitez d'un traitement sur mesure pour améliorer l'apparence et la santé de votre visage.
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
                    Soin Visage Bonne Mine (30 min)
                    <div className="details-container">
                      <span className="price">34€</span>
                    </div>
                  </li>
                  <li>
                    Soin Sur Mesure (1h)
                    <div className="details-container">
                      <span className="price">59€</span>
                    </div>
                  </li>
                  <li>
                    Soin Purifiant (1h15)
                    <div className="details-container">
                      <span className="price">63€</span>
                    </div>
                  </li>
                  <li>
                    Rituel Anti-Âge (1h15)
                    <div className="details-container">
                      <span className="price">78€</span>
                    </div>
                  </li>
                  <li>
                    Soin Peeling + Kit Entretien Maison
                    <div className="details-container">
                      <span className="price">99€</span>
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
                      Quelle est la différence entre les soins visage bonne mine, soins visage sur mesure, soins visage purifiant, rituel anti-âge et soin peeling ?
                    </strong>
                    {faqStates[1] && (
                      <p>
                        • <strong>Soin visage bonne mine :</strong> Ce soin est conçu pour revitaliser la peau et lui redonner de l’éclat. Il cible la fatigue et les signes de teint terne en apportant hydratation et luminosité, pour un visage visiblement plus frais et reposé.<br />
                        • <strong>Soin visage sur mesure :</strong> Ce soin est personnalisé en fonction des besoins spécifiques de votre peau. Après une analyse, le soin est adapté pour traiter vos préoccupations particulières, telles que la déshydratation, les rides ou les imperfections.<br />
                        • <strong>Soin visage purifiant :</strong> Ce soin est destiné aux peaux mixtes à grasses, en particulier celles sujettes aux imperfections. Il nettoie en profondeur, élimine les impuretés, réduit l’excès de sébum et resserre les pores, pour une peau plus nette et matifiée.<br />
                        • <strong>Rituel anti-âge :</strong> Ce soin est conçu pour combattre les signes du vieillissement. Il hydrate, raffermit et lisse la peau, tout en stimulant la production de collagène et d’élastine pour réduire les rides et redonner de la jeunesse à votre peau.<br />
                        • <strong>Soin peeling :</strong> Le soin peeling exfolie en douceur la peau pour éliminer les cellules mortes et favoriser le renouvellement cellulaire. Il est idéal pour améliorer la texture de la peau, réduire les taches pigmentaires et affiner le grain de peau.
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

export default SoinsDuVisage;
