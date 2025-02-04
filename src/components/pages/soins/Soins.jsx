import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../api/firebase-config"; // Import de Firebase
import { PageContainer, Container, Content, Header, Title } from "./SharedStyles";
import VideoSection from "./VideoSection";
import DescriptionSection from "./DescriptionSection";
import TarifsSection from "./TarifsSection";
import QuestionsSection from "./QuestionsSection";

const Soins = () => {
    const { soinId } = useParams(); // Récupère l'ID depuis l'URL
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const docRef = doc(db, "categories", soinId); // Référence Firestore
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setData(docSnap.data()); // Met à jour l'état avec les données Firestore
                } else {
                    setData({
                        title: "Soin introuvable",
                        description: ["Aucune donnée disponible pour ce soin."],
                        videos: [],
                        tarifs: [],
                        questions: []
                    });
                }
            } catch (error) {
                setError("Erreur lors de la récupération des données.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [soinId]); // Exécuter lorsque `soinId` change

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

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
