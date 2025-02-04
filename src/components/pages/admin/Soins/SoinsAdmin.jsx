import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../api/firebase-config"; // Importez votre configuration Firebase
import { PageContainer, Container, Content, Header, Title } from "../../soins/SharedStyles";
import VideoSection from "../../soins/VideoSection";
import DescriptionAdmin from "./DescriptionAdmin";
import TarifsAdmin from "./TarifsAdmin";
import QuestionsAdmin from "./QuestionsAdmin";

const SoinsAdmin = () => {
    const { soinId } = useParams(); // ID de la catégorie à récupérer dans Firestore
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, "categories", soinId); // Référence au document dans Firestore
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setData(docSnap.data());
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
    }, [soinId]);

    const handleUpdateField = async (field, value) => {
        const docRef = doc(db, "categories", soinId);
        try {
            await updateDoc(docRef, { [field]: value });
            setData({ ...data, [field]: value });
        } catch (error) {
            setError(`Erreur lors de la mise à jour de ${field}.`);
        }
    };

    // Mise à jour d'un tarif spécifique
    const handleUpdateTarif = (index, updatedTarif) => {
        const updatedTarifs = [...data.tarifs];
        updatedTarifs[index] = updatedTarif;
        handleUpdateField("tarifs", updatedTarifs);
    };

    // Suppression d'un tarif avec confirmation
    const handleDeleteTarif = (index) => {
        const tarifToDelete = data.tarifs[index];
        const isConfirmed = window.confirm(`Êtes-vous sûr de vouloir supprimer "${tarifToDelete.name}" ?`);
        if (!isConfirmed) return;

        const updatedTarifs = data.tarifs.filter((_, i) => i !== index);
        handleUpdateField("tarifs", updatedTarifs);
    };

    // Ajout d'un nouveau tarif
    const handleAddTarif = () => {
        const newTarif = { name: "", price: "", link: "" };
        handleUpdateField("tarifs", [...data.tarifs, newTarif]);
    };

    // Mise à jour de la description
    const handleUpdateDescription = (newDescription) => {
        handleUpdateField("description", newDescription);
    };

    // Mise à jour des questions
    const handleUpdateQuestions = (newQuestions) => {
        handleUpdateField("questions", newQuestions);
    };


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
                    {data.description &&
                        <DescriptionAdmin
                            title="Description"
                            description={data.description || ""}
                            onUpdateDescription={handleUpdateDescription}
                        />}
                    {data.tarifs && (
                        <TarifsAdmin
                            title="Tarifs"
                            tarifs={data.tarifs || []}
                            onUpdateTarif={handleUpdateTarif}
                            onDeleteTarif={handleDeleteTarif}
                            onAddTarif={handleAddTarif}
                        />
                    )}
                    {data.questions &&
                        <QuestionsAdmin
                            title="Questions fréquentes"
                            questions={data.questions || []}
                            onUpdateQuestions={handleUpdateQuestions}
                        />}
                </Content>
            </Container>
        </PageContainer>
    );
};

export default SoinsAdmin;
