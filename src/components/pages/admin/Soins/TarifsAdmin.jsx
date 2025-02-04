import React, { useState } from "react";
import { InteractiveSection, InteractiveTitle, Text, Separator, Button } from "../../soins/SharedStyles";

// Composant TarifsAdmin
const TarifsAdmin = ({ title, tarifs, onUpdateTarif, onDeleteTarif, onAddTarif }) => {
    const [editableTarifIndex, setEditableTarifIndex] = useState(null);
    const [newName, setNewName] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newLink, setNewLink] = useState("");

    const handleEditClick = (index) => {
        const tarif = tarifs[index];
        setEditableTarifIndex(index);
        setNewName(tarif.name);
        setNewPrice(tarif.price);
        setNewLink(tarif.link || "");
    };

    const handleSaveClick = (index) => {
        const updatedTarif = { name: newName, price: newPrice, link: newLink };
        onUpdateTarif(index, updatedTarif);
        setEditableTarifIndex(null);
        setNewName("");
        setNewPrice("");
        setNewLink("");
    };

    const handleAddClick = () => {
        onAddTarif();
        setEditableTarifIndex(tarifs.length);
        setNewName("");
        setNewPrice("");
        setNewLink("");
    };

    return (
        <InteractiveSection>
            <InteractiveTitle>{title}</InteractiveTitle>
            <Text>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    {tarifs.map((tarif, index) => (
                        <li key={index} style={{ marginBottom: "15px", padding: "10px", borderBottom: "1px solid #ddd" }}>
                            {editableTarifIndex === index ? (
                                <div>
                                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                        <input
                                            type="text"
                                            value={newName}
                                            onChange={(e) => setNewName(e.target.value)}
                                            placeholder="Nom du tarif"
                                            style={{ flex: 1, padding: "5px" }}
                                        />
                                        <input
                                            type="text"
                                            value={newPrice}
                                            onChange={(e) => setNewPrice(e.target.value)}
                                            placeholder="Prix"
                                            style={{ width: "100px", padding: "5px" }}
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        value={newLink}
                                        onChange={(e) => setNewLink(e.target.value)}
                                        placeholder="Lien (optionnel)"
                                        style={{ width: "100%", padding: "5px", marginTop: "10px" }}
                                    />
                                    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                                        <Button onClick={() => handleSaveClick(index)}>Sauvegarder</Button>
                                        <Button onClick={() => setEditableTarifIndex(null)}>Annuler</Button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span dangerouslySetInnerHTML={{ __html: tarif.name }} />
                                        <span className="price" dangerouslySetInnerHTML={{ __html: tarif.price }} />
                                    </div>
                                    {tarif.link && (
                                        <a href={tarif.link} target="_blank" rel="noopener noreferrer" className="view-link">
                                            Voir
                                        </a>
                                    )}
                                    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                                        <Button onClick={() => handleEditClick(index)}>Modifier</Button>
                                        <Button onClick={() => onDeleteTarif(index)} style={{ backgroundColor: "red" }}>
                                            Supprimer
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                <Button onClick={handleAddClick} style={{ marginTop: "20px", backgroundColor: "green", display: "block" }}>
                    Ajouter un tarif
                </Button>
            </Text>
            <Separator />
        </InteractiveSection>
    );
};

export default TarifsAdmin;
