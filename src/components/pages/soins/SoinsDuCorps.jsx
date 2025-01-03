import React, { useState } from "react";
import { PageContainer, Container, Content, Header, Title, InteractiveSection, InteractiveTitle, Separator, Text, TextAnswer } from "./SharedStyles";

const SoinsDuCorps = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [showTarifs, setShowTarifs] = useState(true);
  const [showFAQ, setShowFAQ] = useState(true);
  const [faqStates, setFaqStates] = useState({
    1: false,
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
          <Title>Soins du Corps</Title>
        </Header>

        <Content>
          <InteractiveSection>
            <InteractiveTitle onClick={() => setShowDescription(!showDescription)}>
              Description
            </InteractiveTitle>
            {showDescription && (
              <Text>
                <p>
                  Découvrez nos soins du corps spécialisés pour une relaxation complète et un bien-être absolu. Chaque soin est conçu pour cibler des zones spécifiques du corps et vous offrir un moment d’évasion et de détente ultime.
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
                    Modelage Dos 20 min
                    <div className="details-container">
                      <span className="price">20€</span>
                    </div>
                  </li>
                  <li>
                    Massage Crânien Japonais 30 min
                    <div className="details-container">
                      <span className="price">40€</span>
                    </div>
                  </li>
                  <li>
                    Modelage Corps 45 min
                    <div className="details-container">
                      <span className="price">45€</span>
                    </div>
                  </li>
                  <li>
                    Soins du Dos 45 min
                    <div className="details-container">
                      <span className="price">45€</span>
                    </div>
                  </li>
                  <li>
                    Soin Corps Évasion Égyptienne - 1h
                    <div className="details-container">
                      <span className="price">69€</span>
                    </div>
                  </li>
                  <li>
                    Soin Corps Évasion Polynésienne - 1h
                    <div className="details-container">
                      <span className="price">75€</span>
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
                      Quelle est la différence entre le massage crânien japonais, le modelage dos, le modelage corps, les soins du dos, l’évasion égyptienne et l’évasion polynésienne ?
                    </strong>
                    {faqStates[1] && (
                      <p>
                        • <strong>Massage crânien japonais</strong> : Ce massage se concentre sur le cuir chevelu, la tête, les épaules et le cou. Il aide à soulager les tensions, favoriser la relaxation et améliorer la circulation sanguine, tout en procurant une sensation de bien-être profond.
                        <br />
                        • <strong>Modelage dos</strong> : Ce soin cible spécifiquement le dos pour soulager les douleurs musculaires, réduire le stress et améliorer la mobilité. Il aide à détendre les zones tendues et à relâcher les tensions accumulées.
                        <br />
                        • <strong>Modelage corps</strong> : Ce soin couvre l’ensemble du corps et permet de détendre les muscles, améliorer la circulation sanguine et offrir une sensation de relaxation totale. Il peut être personnalisé selon vos besoins (relaxation, tonification, etc.).
                        <br />
                        • <strong>Soins du dos</strong> : Ce soin est dédié à la peau et aux muscles du dos. Il inclut des techniques de nettoyage, d’hydratation et de relaxation, tout en prenant en charge les éventuelles imperfections cutanées ou tensions musculaires dans cette zone.
                        <br />
                        • <strong>Évasion égyptienne</strong> : Inspiré des rituels de beauté de l’Égypte ancienne, ce soin inclut des massages et des produits nourrissants comme des huiles et des argiles. Il vise à revitaliser, purifier et hydrater la peau, tout en offrant un moment de détente unique.
                        <br />
                        • <strong>Évasion polynésienne</strong> : Ce soin, inspiré des traditions polynésiennes, utilise des techniques de massage et des huiles exotiques pour détendre le corps en profondeur. Il procure une sensation d’évasion tout en nourrissant la peau et en apportant une relaxation intense.
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

export default SoinsDuCorps;
