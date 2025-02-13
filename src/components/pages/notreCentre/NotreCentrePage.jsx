import React, { useEffect, useState } from "react";
import { db } from "../../../api/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import "./NotreCentrePage.css";

const NotreCentrePage = () => {
  const [centreData, setCentreData] = useState(null);
  const joursOrdres = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

  useEffect(() => {
    const fetchCentreData = async () => {
      try {
        const docRef = doc(db, "centres", "peau-dor");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCentreData(docSnap.data());
        } else {
          console.log("Aucune donnée trouvée !");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchCentreData();
  }, []);

  if (!centreData) {
    return <p>Chargement des données...</p>;
  }

  return (
    <div className="notre-centre-page">
      <header className="header">
        <h1>{centreData.nom}</h1>
      </header>

      <section className="description">
        {centreData.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <p><strong>Parking gratuit, facile d'accès.</strong></p>
      </section>

      <section className="opening-hours">
        <h2>Horaires d'ouverture</h2>
        <ul>
          {joursOrdres.map((jour, index) => (
            <li key={index}>
              <span>{jour.charAt(0).toUpperCase() + jour.slice(1)}:</span> {centreData.horaires[jour] || "Fermé"}
            </li>
          ))}
        </ul>
      </section>

      <section className="location">
        <h2>Nous retrouver</h2>
        <div className="location-icon">
          <AiFillHome className="location-icon-img" />
          <p className="address">
            {centreData.adresse.rue}, {centreData.adresse.code_postal} {centreData.adresse.ville}
          </p>
        </div>
        <div className="phone-icon">
          <FaPhoneAlt className="phone-icon-img" />
          <p className="phone">{centreData.contact.telephone}</p>
        </div>
      </section>
    </div>
  );
};

export default NotreCentrePage;
