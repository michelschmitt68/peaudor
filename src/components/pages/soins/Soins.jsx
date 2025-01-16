import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageContainer, Container, Content, Header, Title } from "./SharedStyles";
import VideoSection from "./VideoSection";
import DescriptionSection from "./DescriptionSection";
import TarifsSection from "./TarifsSection";
import QuestionsSection from "./QuestionsSection";
import { soinsData } from "./SoinsData";

const Soins = () => {
    const { soinId } = useParams();
    const [data, setData] = useState({});
    console.log(soinId);
    console.log(data);


    useEffect(() => {
        // Vérifier si soinId existe dans soinsData et charger les données correspondantes
        if (soinsData[soinId]) {
            setData(soinsData[soinId]); // Charger les données correspondant à soinId
        } else {
            // Si l'ID du soin n'est pas trouvé, définir un message d'erreur ou une valeur par défaut
            setData({
                title: "Soin introuvable",
                description: ["Aucune donnée disponible pour ce soin."],
                videos: [],
                tarifs: [],
                questions: []
            });
        }
    }, [soinId]); // Récupérer de nouvelles données à chaque fois que soinId change

    return (
        <PageContainer>
            <Container>
                <Header>
                    <Title>{data.title || "Soin non trouvé"}</Title>
                </Header>

                <Content>
                    {data.videos && <VideoSection title="Vidéos" videoUrls={data.videos || []} />}
                    {data.description && <DescriptionSection title="Description" description={data.description || []} />}
                    {data.tarifs && <TarifsSection title="Tarifs" tarifs={data.tarifs || []} />}
                    {data.questions && <QuestionsSection title="Questions fréquentes" faqs={data.questions || []} />}
                </Content>
            </Container>
        </PageContainer>
    );
};

export default Soins;
