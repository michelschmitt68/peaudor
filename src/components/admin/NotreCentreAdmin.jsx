import React, { useEffect, useState } from "react";
import { db } from "../../api/firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import "../pages/notreCentre/NotreCentrePage.css"; // Ton CSS d'origine

const NotreCentreAdmin = () => {
    const [centreData, setCentreData] = useState(null);
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        const fetchCentreData = async () => {
            try {
                const docRef = doc(db, "centres", "peau-dor");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setCentreData(docSnap.data());
                    setFormData(docSnap.data());
                } else {
                    console.log("Aucune donnée trouvée !");
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            }
        };

        fetchCentreData();
    }, []);

    const handleChange = (e, field, subField = null) => {
        const value = e.target.value;
        setFormData((prev) => {
            if (subField) {
                return {
                    ...prev,
                    [field]: {
                        ...prev[field],
                        [subField]: value,
                    },
                };
            }
            return { ...prev, [field]: value };
        });
    };

    const handleUpdate = async () => {
        try {
            const docRef = doc(db, "centres", "peau-dor");
            await updateDoc(docRef, formData);
            setCentreData(formData);
            setEditing(false);
            console.log("Données mises à jour !");
        } catch (error) {
            console.error("Erreur lors de la mise à jour :", error);
        }
    };

    if (!centreData) {
        return <p>Chargement des données...</p>;
    }

    return (
        <div className="notre-centre-page">
            <header className="header">
                <h1>
                    {editing ? (
                        <input type="text" value={formData.nom} onChange={(e) => handleChange(e, "nom")} />
                    ) : (
                        centreData.nom
                    )}
                </h1>
                <button className="edit-btn" onClick={() => setEditing(!editing)}>
                    {editing ? "Annuler" : "Modifier"}
                </button>
            </header>

            <section className="description">
                <h2>Description</h2>
                {editing ? (
                    <textarea
                        value={formData.description.join("\n\n")}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value.split("\n\n") })}
                        className="description-input"
                    />
                ) : (
                    formData.description.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                )}
            </section>

            <section className="opening-hours">
                <h2>Horaires d'ouverture</h2>
                <ul>
                    {Object.entries(formData.horaires).map(([jour, heures], index) => (
                        <li key={index}>
                            <span>{jour.charAt(0).toUpperCase() + jour.slice(1)}:</span>
                            {editing ? (
                                <input type="text" value={heures} onChange={(e) => handleChange(e, "horaires", jour)} />
                            ) : (
                                heures
                            )}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="location">
                <h2>Nous retrouver</h2>
                <div className="location-icon">
                    <AiFillHome className="location-icon-img" />
                    {editing ? (
                        <input
                            type="text"
                            value={formData.adresse.rue}
                            onChange={(e) => handleChange(e, "adresse", "rue")}
                        />
                    ) : (
                        <p className="address">
                            {centreData.adresse.rue}, {centreData.adresse.code_postal} {centreData.adresse.ville}
                        </p>
                    )}
                </div>
                <div className="phone-icon">
                    <FaPhoneAlt className="phone-icon-img" />
                    {editing ? (
                        <input
                            type="text"
                            value={formData.contact.telephone}
                            onChange={(e) => handleChange(e, "contact", "telephone")}
                        />
                    ) : (
                        <p className="phone">{centreData.contact.telephone}</p>
                    )}
                </div>
            </section>

            {editing && (
                <button className="save-btn" onClick={handleUpdate}>
                    💾 Sauvegarder
                </button>
            )}
        </div>
    );
};

export default NotreCentreAdmin;
