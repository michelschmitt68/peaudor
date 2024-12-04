import React, { useEffect } from 'react';
import './MonComptePage.css';

const MonComptePage = () => {
  useEffect(() => {
    // ID du conteneur pour Planity
    const containerId = 'accountContainer';
    const container = document.getElementById(containerId);

    if (!container) {
      console.error(`Conteneur avec l'ID "${containerId}" introuvable.`);
      return;
    }

    // Configuration Planity avec clé API et couleur principale
    window.planity = {
      key: process.env.REACT_APP_PLANITY_API_KEY,  // Clé API depuis .env
      primaryColor: process.env.REACT_APP_PRIMARY_COLOR,  // Couleur principale depuis .env
      accountContainer: container,  // Utilisation du conteneur pour Mon compte
    };

    // Charger les scripts nécessaires pour Planity
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

    // Nettoyage des scripts au démontage
    return () => {
      document.body.removeChild(polyfillsScript);
      document.body.removeChild(appScript);
    };
  }, []);

  return (
    <div className="page-container">
      <div
        id="accountContainer"
        style={{ minHeight: '500px', width: '100%' }}  // Conteneur spécifique pour Planity
      ></div>
    </div>
  );
};

export default MonComptePage;
