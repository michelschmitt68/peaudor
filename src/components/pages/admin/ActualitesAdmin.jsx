import React, { useState, useEffect } from 'react';
import { db } from "../../../api/firebase-config";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import styled from 'styled-components';

const ActualitesAdmin = () => {
    const [articles, setArticles] = useState([]);
    const [newArticle, setNewArticle] = useState({
        titre: '',
        contenu: [{ sousTitre: '', texte: '' }],
        image: '',
        date: new Date().toISOString()
    });

    const [isEditing, setIsEditing] = useState(false); // Pour gérer le mode édition
    const [articleToEdit, setArticleToEdit] = useState(null); // Pour stocker l'article en édition

    // Récupérer les articles depuis Firebase
    const fetchArticles = async () => {
        const articlesCollection = collection(db, 'actualites');
        const articlesSnapshot = await getDocs(articlesCollection);
        const articlesList = articlesSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        setArticles(articlesList);
    };

    // Ajouter un nouvel article
    const addArticle = async () => {
        try {
            const docRef = await addDoc(collection(db, 'actualites'), newArticle);
            setArticles([...articles, { id: docRef.id, ...newArticle }]);
            resetForm();
        } catch (error) {
            console.error("Erreur lors de l'ajout de l'article : ", error);
        }
    };

    // Supprimer un article avec confirmation
    const deleteArticle = async (id) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) {
            try {
                await deleteDoc(doc(db, 'actualites', id));
                setArticles(articles.filter((article) => article.id !== id));
            } catch (error) {
                console.error("Erreur lors de la suppression de l'article : ", error);
            }
        }
    };

    // Mettre à jour un article
    const updateArticle = async (id) => {
        try {
            const articleRef = doc(db, 'actualites', id);
            await updateDoc(articleRef, newArticle);
            setArticles(
                articles.map((article) => (article.id === id ? { ...article, ...newArticle } : article))
            );
            resetForm();
        } catch (error) {
            console.error("Erreur lors de la mise à jour de l'article : ", error);
        }
    };

    // Charger les articles lors du chargement du composant
    useEffect(() => {
        fetchArticles();
    }, []);

    // Gestion des changements dans le formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewArticle({ ...newArticle, [name]: value });
    };

    const handleContentChange = (index, e) => {
        const { name, value } = e.target;
        const updatedContent = newArticle.contenu.map((content, i) =>
            i === index ? { ...content, [name]: value } : content
        );
        setNewArticle({ ...newArticle, contenu: updatedContent });
    };

    const handleAddContent = () => {
        setNewArticle({ ...newArticle, contenu: [...newArticle.contenu, { sousTitre: '', texte: '' }] });
    };

    // Fonction pour formater le texte (ajouter un saut de ligne entre les paragraphes)
    const formatText = (text) => {
        return text.split("\n").map((line, index) => (
            <div key={index}>
                {line}
            </div>
        ));
    };

    // Remettre à zéro le formulaire
    const resetForm = () => {
        setIsEditing(false);
        setArticleToEdit(null);
        setNewArticle({
            titre: '',
            contenu: [{ sousTitre: '', texte: '' }],
            image: '',
            date: new Date().toISOString()
        });
    };

    // Charger l'article à modifier dans le formulaire
    const handleEdit = (article) => {
        setIsEditing(true);
        setArticleToEdit(article);
        setNewArticle(article); // Remplir le formulaire avec l'article à modifier
    };

    return (
        <Container>
            <MainTitle>Gestion des Actualités</MainTitle>

            <Section>
                <Title>{isEditing ? "Modifier l'article" : "Ajouter un nouvel article"}</Title>
                <Input
                    type="text"
                    name="titre"
                    value={newArticle.titre}
                    onChange={handleChange}
                    placeholder="Titre de l'article"
                />
                {newArticle.contenu.map((content, index) => (
                    <ContentWrapper key={index}>
                        <Input
                            type="text"
                            name="sousTitre"
                            value={content.sousTitre}
                            onChange={(e) => handleContentChange(index, e)}
                            placeholder="Sous-titre"
                        />
                        <Textarea
                            name="texte"
                            value={content.texte}
                            onChange={(e) => handleContentChange(index, e)}
                            placeholder="Texte"
                        />
                    </ContentWrapper>
                ))}
                <Button onClick={handleAddContent}>Ajouter un sous-titre</Button>
                <Input
                    type="text"
                    name="image"
                    value={newArticle.image}
                    onChange={handleChange}
                    placeholder="URL de l'image"
                />
                {isEditing ? (
                    <Button onClick={() => updateArticle(articleToEdit.id)}>Mettre à jour l'article</Button>
                ) : (
                    <Button onClick={addArticle}>Ajouter l'article</Button>
                )}
                {isEditing && <Button onClick={resetForm}>Annuler</Button>}
            </Section>

            <Section>
                <Title>Liste des articles</Title>
                {articles.map((article) => (
                    <ArticleWrapper key={article.id}>
                        <h3>{article.titre}</h3>
                        {article.contenu.map((content, index) => (
                            <div key={index}>
                                <h4>{content.sousTitre}</h4>
                                <div>{formatText(content.texte)}</div>
                            </div>
                        ))}
                        <img src={article.image} alt="Article" style={{ width: '100px' }} />
                        <Button onClick={() => handleEdit(article)}>Modifier</Button>
                        <Button onClick={() => deleteArticle(article.id)}>Supprimer</Button>
                    </ArticleWrapper>
                ))}
            </Section>
        </Container>
    );
};

// Styled Components
const Container = styled.div`
  padding: 40px;
`;

const MainTitle = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Input = styled.input`
  display: block;
  margin: 10px 0;
  padding: 8px;
  width: 100%;
  max-width: 500px;
`;

const Textarea = styled.textarea`
  display: block;
  margin: 10px 0;
  padding: 8px;
  width: 100%;
  max-width: 500px;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContentWrapper = styled.div`
  margin-bottom: 20px;
`;

const ArticleWrapper = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;

  h3 {
    margin: 0;
  }

  p {
    margin: 10px 0;
  }
`;

export default ActualitesAdmin;
