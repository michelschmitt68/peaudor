import React, { useEffect } from 'react';
import './ChequesCadeauxPage.css'; // Ajoutez vos styles ici si nécessaire

const ChequesCadeauxPage = () => {
  useEffect(() => {
    // Récupérer l'ID du conteneur
    const containerId = 'chequeCadeauxContainer';
    const container = document.getElementById(containerId);

    if (!container) {
      console.error(`Conteneur avec l'ID "${containerId}" introuvable.`);
      return;
    }

    // Configuration de Planity avec les variables d'environnement
    window.planity = {
      key: process.env.REACT_APP_PLANITY_API_KEY,  // Clé API depuis .env
      primaryColor: process.env.REACT_APP_PRIMARY_COLOR,  // Couleur principale depuis .env
      giftVoucherContainer: container, // Utilisation du conteneur pour les chèques cadeaux
    };

    // Script pour charger Planity
    const polyfillsScript = document.createElement('script');
    polyfillsScript.src = 'https://d2skjte8udjqxw.cloudfront.net/widget/production/2/polyfills.latest.js';
    polyfillsScript.async = true;
    polyfillsScript.onerror = () => console.error('Erreur de chargement du script polyfills');
    document.body.appendChild(polyfillsScript);

    const appScript = document.createElement('script');
    appScript.src = 'https://d2skjte8udjqxw.cloudfront.net/widget/production/2/app.latest.js';
    appScript.async = true;
    appScript.onerror = () => console.error('Erreur de chargement du script app');
    document.body.appendChild(appScript);

    // Nettoyer les scripts lorsqu'on quitte la page
    return () => {
      document.body.removeChild(polyfillsScript);
      document.body.removeChild(appScript);
    };
  }, []);

  return (
    <div className="page-container">
      <div className="cheque-cadeaux-container">
        <div
          id="chequeCadeauxContainer"
          style={{ minHeight: '500px', width: '100%' }}
        ></div>
      </div>
    </div>
  );
};

export default ChequesCadeauxPage;
