import React, { useState } from "react";
import { PageContainer, Container, Content, Header, Title, InteractiveSection, InteractiveTitle, Separator, Text, TextAnswer } from "./SharedStyles";
import ReactPlayer from "react-player";
import styled from "styled-components";

const BeauteDuSourire = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [showTarifs, setShowTarifs] = useState(true);
  const [showFAQ, setShowFAQ] = useState(true);
  const [showVideo, setShowVideo] = useState(true);
  const [faqStates, setFaqStates] = useState({
    1: false,
    2: false,
    3: false,
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
          <Title>Beauté du Sourire</Title>
        </Header>

        <Content>
          <InteractiveSection>
            <InteractiveTitle onClick={() => setShowVideo(!showVideo)}>
              Vidéos
            </InteractiveTitle>
            {showVideo && (
              <ResponsiveVideoContainer>
                <ReactPlayer
                  url="/Soins/videos/Blanchiment_dentaire.mp4"
                  controls
                  width="100%"
                  height="auto"
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
                  Sublimez votre sourire avec une séance de blanchiment dentaire professionnel. Cette prestation rapide et efficace éclaircit vos dents pour un sourire éclatant et naturel, avec des résultats visibles dès la première séance. En plus de raviver l’éclat de votre sourire, ce traitement est conçu pour respecter l’émail de vos dents tout en garantissant un résultat esthétique et durable.
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
                    Blanchiment dentaire professionnel 1 séance
                    <div className="details-container">
                      <span className="price">90€</span>
                    </div>
                  </li>
                  <li>
                    Forfait blanchiment dentaire professionnel 2 séances
                    <div className="details-container">
                      <span className="price">160€</span>
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
                      Qu’est-ce que le blanchiment dentaire professionnel ?
                    </strong>
                    {faqStates[1] && (
                      <p>
                        Le blanchiment dentaire professionnel est une méthode esthétique qui vise à éclaircir la teinte des dents et à sublimer votre sourire. Ce soin rapide et non invasif est réalisé avec des produits spécialement conçus pour offrir des résultats visibles tout en respectant l’émail dentaire. Une solution idéale pour un sourire éclatant et naturel !
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(2)}>
                      Le blanchiment dentaire professionnel est-il sûr ?
                    </strong>
                    {faqStates[2] && (
                      <p>
                        Oui, le blanchiment dentaire professionnel réalisé en institut est totalement sûr. Les produits utilisés sont spécialement conçus pour respecter l’émail des dents et les gencives, tout en offrant un éclaircissement visible et naturel. Ce soin non invasif est une solution idéale pour sublimer votre sourire en toute sérénité.
                      </p>
                    )}
                  </li>
                  <li>
                    <strong onClick={() => toggleFaq(3)}>
                      Le blanchiment dentaire professionnel est-il adapté à tout le monde ?
                    </strong>
                    {faqStates[3] && (
                      <p>
                        Le blanchiment dentaire professionnel convient à la majorité des personnes souhaitant éclaircir la teinte de leurs dents et retrouver un sourire éclatant. Ce soin utilise des produits doux, respectueux de l’émail et des gencives, offrant un résultat naturel et harmonieux. Une consultation préalable permet de vérifier que ce traitement est adapté à vos besoins.
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

export default BeauteDuSourire;

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
