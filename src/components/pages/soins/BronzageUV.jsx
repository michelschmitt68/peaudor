import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

import { PageContainer, Container, Content, Header, Title, InteractiveSection, InteractiveTitle, Separator, Text, TextAnswer } from "./SharedStyles";

const Bronzage = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [showTarifs, setShowTarifs] = useState(true);
  const [showFAQ, setShowFAQ] = useState(true);
  const [showPopup, setShowPopup] = useState(true);
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
          <Title>Bronzage UV Collagène</Title>
        </Header>

        <Content>
          <InteractiveSection>
            <InteractiveTitle onClick={() => setShowVideo(!showVideo)}>
              Vidéos
            </InteractiveTitle>
            {showVideo && (
              <ResponsiveVideoContainer>
                <ReactPlayer
                  url="/Soins/videos/BronzageUV.mp4"
                  controls
                  width="100%"
                  height="auto"
                  muted
                />
              </ResponsiveVideoContainer>
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
                  Alliez un bronzage naturel et progressif aux bienfaits d’un soin jeunesse ! Cette technologie innovante combine des UV doux pour un teint hâlé éclatant et une lumière rouge stimulante qui booste la production de collagène, raffermit la peau et réduit les signes de l’âge. Idéal pour sublimer votre peau tout en prenant soin d’elle.
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
                  <li>8min <div className="details-container"><span className="price">8€</span></div></li>
                  <li>10min <div className="details-container"><span className="price">10€</span></div></li>
                  <li>12min <div className="details-container"><span className="price">12€</span></div></li>
                  <li>14min <div className="details-container"><span className="price">14€</span></div></li>
                  <li>16min <div className="details-container"><span className="price">16€</span></div></li>
                  <li>18min <div className="details-container"><span className="price">18€</span></div></li>
                  <li>20min <div className="details-container"><span className="price">20€</span></div></li>
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
                      Le bronzage UV collagène est-il adapté à tous les types de peau ?
                    </strong>
                    {faqStates[1] && (
                      <p>
                        Oui, le bronzage UV collagène est adapté à tous les types de peau. Cependant, il est important de respecter les recommandations en termes de fréquence et de durée des séances. Pour les peaux très sensibles ou réactives, il est conseillé de demander l’avis d’un professionnel en institut afin d’adapter les séances à vos besoins spécifiques.
                      </p>
                    )}
                  </li>

                  <li>
                    <strong onClick={() => toggleFaq(2)}>
                      Quels sont les bienfaits du bronzage UV collagène ?
                    </strong>
                    {faqStates[2] && (
                      <p>
                        Le bronzage UV collagène combine les effets des UV pour un teint hâlé et homogène, et les bienfaits de la lumière rouge qui stimule la production de collagène. Cela permet d’améliorer l’élasticité de la peau, de réduire l’apparence des rides et des imperfections, tout en offrant un effet bonne mine. C’est une solution idéale pour allier soin de la peau et bronzage naturel.
                      </p>
                    )}
                  </li>

                  <li>
                    <strong onClick={() => toggleFaq(3)}>
                      Combien de temps dure une séance de bronzage UV collagène ?
                    </strong>
                    {faqStates[3] && (
                      <p>
                        Une séance de bronzage UV collagène dure généralement entre 8 et 20 minutes, selon le type de traitement et les recommandations spécifiques de l’institut. Ce temps permet à la peau de bénéficier des effets des UV et de la stimulation du collagène pour des résultats optimaux.
                      </p>
                    )}
                  </li>

                  <li>
                    <strong onClick={() => toggleFaq(4)}>
                      Le bronzage UV collagène peut-il aider à réduire les rides et les signes de vieillissement ?
                    </strong>
                    {faqStates[4] && (
                      <p>
                        Oui, le bronzage UV collagène peut aider à réduire l’apparence des rides et des signes de vieillissement. La stimulation du collagène grâce à la lumière UV et rouge favorise la régénération de la peau, améliore son élasticité et contribue à lisser les ridules. Avec des séances régulières, vous pouvez constater un teint plus éclatant et une peau visiblement plus ferme et tonique.
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

export default Bronzage;


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

