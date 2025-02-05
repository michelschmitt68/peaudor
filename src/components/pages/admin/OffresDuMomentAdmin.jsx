import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../api/firebase-config'

const OffresDuMomentAdmin = () => {
    const [offres, setOffres] = useState([]);
    const [nouvelleOffre, setNouvelleOffre] = useState({ titre: '', contenu: [], image: '' });
    const [isEditing, setIsEditing] = useState(false); // Indicateur si on est en mode modification
    const [offerToEdit, setOfferToEdit] = useState(null); // L'offre à modifier

    useEffect(() => {
        const fetchOffres = async () => {
            const querySnapshot = await getDocs(collection(db, 'offresDuMoment'));
            const offresList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setOffres(offresList);
        };

        fetchOffres();
    }, []);

    // Ajouter une nouvelle offre
    const handleAddOffre = async () => {
        const newOffre = await addDoc(collection(db, 'offresDuMoment'), nouvelleOffre);
        setOffres([...offres, { id: newOffre.id, ...nouvelleOffre }]);
        setNouvelleOffre({ titre: '', contenu: [], image: '' }); // Réinitialise le formulaire après ajout
    };

    // Mettre à jour une offre existante
    const handleUpdateOffre = async () => {
        const offreDoc = doc(db, 'offresDuMoment', offerToEdit.id);
        await updateDoc(offreDoc, nouvelleOffre);
        setOffres(offres.map(offre => (offre.id === offerToEdit.id ? { ...offre, ...nouvelleOffre } : offre)));
        setIsEditing(false);
        setOfferToEdit(null);
        setNouvelleOffre({ titre: '', contenu: [], image: '' }); // Réinitialise après modification
    };

    // Supprimer une offre avec confirmation
    const handleDeleteOffre = async (id) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cette offre ?')) {
            const offreDoc = doc(db, 'offresDuMoment', id);
            await deleteDoc(offreDoc);
            setOffres(offres.filter(offre => offre.id !== id));
        }
    };

    // Lancer l'édition d'une offre
    const handleEditClick = (offre) => {
        setIsEditing(true);
        setOfferToEdit(offre);
        setNouvelleOffre(offre); // Charge les données dans le formulaire
    };

    return (
        <Container>
            <TitleWrapper>
                <MainTitle>Administration des Offres</MainTitle>
            </TitleWrapper>

            <FormSection>
                <Title>{isEditing ? 'Modifier l\'offre' : 'Ajouter une offre'}</Title>
                <form>
                    <FormGroup>
                        <label>Titre de l'offre</label>
                        <Input
                            type="text"
                            placeholder="Titre de l'offre"
                            value={nouvelleOffre.titre}
                            onChange={(e) => setNouvelleOffre({ ...nouvelleOffre, titre: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Contenu de l'offre</label>
                        <Textarea
                            placeholder="Contenu de l'offre"
                            value={nouvelleOffre.contenu.join('\n')}
                            onChange={(e) => setNouvelleOffre({ ...nouvelleOffre, contenu: e.target.value.split('\n') })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>URL de l'image</label>
                        <Input
                            type="text"
                            placeholder="URL de l'image"
                            value={nouvelleOffre.image}
                            onChange={(e) => setNouvelleOffre({ ...nouvelleOffre, image: e.target.value })}
                        />
                    </FormGroup>
                    {isEditing ? (
                        <Button type="button" onClick={handleUpdateOffre}>Enregistrer les modifications</Button>
                    ) : (
                        <Button type="button" onClick={handleAddOffre}>Ajouter l'offre</Button>
                    )}
                </form>
            </FormSection>

            <OffresList>
                {offres.map((offre) => (
                    <OffreCard key={offre.id}>
                        <OffreHeader>
                            <OffreTitle>{offre.titre}</OffreTitle>
                        </OffreHeader>
                        <OffreContent>
                            <List>
                                {offre.contenu.map((item, idx) => (
                                    <ListItem key={idx}>{item}</ListItem>
                                ))}
                            </List>
                            <StyledImage src={offre.image} alt="Offre image" />
                        </OffreContent>
                        <OffreActions>
                            <Button onClick={() => handleEditClick(offre)}>Modifier</Button>
                            <Button onClick={() => handleDeleteOffre(offre.id)}>Supprimer</Button>
                        </OffreActions>
                    </OffreCard>
                ))}
            </OffresList>
        </Container>
    );
};

export default OffresDuMomentAdmin;

// Styled Components
const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  padding: 50px 80px;
  background-color: #f4f7fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  color: #333;
  margin: 0;
`;

const FormSection = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
`;

const Title = styled.h2`
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 20px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.3s;
  margin-top: 5px;

  &:focus {
    border-color: #3e64ff;
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.3s;
  margin-top: 5px;
  min-height: 120px;

  &:focus {
    border-color: #3e64ff;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #3e64ff;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2f4cc1;
  }
`;

const OffresList = styled.div`
  width: 100%;
`;

const OffreCard = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const OffreHeader = styled.div`
  margin-bottom: 20px;
`;

const OffreTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  font-weight: 600;
`;

const OffreContent = styled.div`
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #666;
`;

const StyledImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-top: 20px;
`;

const OffreActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
