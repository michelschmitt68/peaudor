import React, { useState } from "react";
import { PageContainer, Container, Content, Header, Title, InteractiveSection, InteractiveTitle, Separator, Text } from "./SharedStyles";

const SoinsDesMains = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [showTarifs, setShowTarifs] = useState(true);

  return (
    <PageContainer>
      <Container>
        <Header>
          <Title>Soins Des Mains</Title>
        </Header>

        <Content>
          <InteractiveSection>
            <InteractiveTitle onClick={() => setShowDescription(!showDescription)}>
              Description
            </InteractiveTitle>
            {showDescription && (
              <Text>
                <p>Offrez à vos mains un soin complet incluant gommage, modelage et masque. Ce traitement nourrit, hydrate et adoucit la peau tout en relaxant vos mains pour un résultat doux et soigné.</p>
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
                    Soins complet gommage, modelage, masque
                    <div className="details-container">
                      <span className="price">25€</span>
                    </div>
                  </li>
                </ul>
              </Text>
            )}
            <Separator />
          </InteractiveSection>
        </Content>
      </Container>
    </PageContainer>
  );
};

export default SoinsDesMains;
