import React, { useState } from "react";
import { PageContainer, Container, Content, Header, Title, InteractiveSection, InteractiveTitle, Separator, Text } from "./SharedStyles";

const BeauteEnDuo = () => {
    const [showDescription, setShowDescription] = useState(true);
    const [showTarifs, setShowTarifs] = useState(true);

    return (
        <PageContainer>
            <Container>
                <Header>
                    <Title>Beauté en duo</Title>
                </Header>

                <Content>
                    <InteractiveSection>
                        <InteractiveTitle onClick={() => setShowDescription(!showDescription)}>
                            Description
                        </InteractiveTitle>
                        {showDescription && (
                            <Text>
                                <p>Profitez d'un moment de détente à deux avec nos soins en duo. Idéal pour partager une expérience unique avec un proche, dans une ambiance relaxante et conviviale.</p>
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
                                        Duo Browlift sans teinture
                                        <div className="details-container">
                                            <span className="price">50€</span>
                                        </div>
                                    </li>
                                    <li>
                                        Duo Browlift avec teinture
                                        <div className="details-container">
                                            <span className="price">60€</span>
                                        </div>
                                    </li>
                                    <li>
                                        Duo Browlift avec teinture hybride
                                        <div className="details-container">
                                            <span className="price">70€</span>
                                        </div>
                                    </li>
                                    <li>
                                        Duo Browlift avec teinture henné
                                        <div className="details-container">
                                            <span className="price">80€</span>
                                        </div>
                                    </li>
                                    <li>
                                        Duo Rehaussement de cils "lash lift" avec coloration et soin botox
                                        <div className="details-container">
                                            <span className="price">100€</span>
                                        </div>
                                    </li>
                                    <li>
                                        Duo Rehaussement de cils avec coloration et soin botox + Brow lift
                                        <div className="details-container">
                                            <span className="price">140€</span>
                                        </div>
                                    </li>
                                    <li>
                                        Duo Blanchiment dentaire 1 séance
                                        <div className="details-container">
                                            <span className="price">150€</span>
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

export default BeauteEnDuo;

