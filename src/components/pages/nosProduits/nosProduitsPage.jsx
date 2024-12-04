import React, { useEffect } from 'react';
import './NosProduitsPage.css';

const NosProduitsPage = () => {
  useEffect(() => {
    // L'ID du conteneur pour l'intégration Planity
    const containerId = 'onlineShopContainer'; // Remplacer par un ID valide
    const container = document.getElementById(containerId);

    // Assurez-vous que le conteneur existe avant de continuer
    if (!container) {
      console.error(`Conteneur avec l'ID "${containerId}" introuvable.`);
      return;
    }

    // Configurez Planity avec les paramètres nécessaires
    window.planity = {
      key: process.env.REACT_APP_PLANITY_API_KEY, // Votre clé API depuis .env
      primaryColor: process.env.REACT_APP_PRIMARY_COLOR, // Couleur principale
      onlineShopContainer: container, // Le conteneur spécifique pour la boutique
    };

    // Créer et ajouter les scripts nécessaires
    const polyfillsScript = document.createElement('script');
    polyfillsScript.src = 'https://d2skjte8udjqxw.cloudfront.net/widget/production/2/polyfills.latest.js';
    polyfillsScript.async = true;
    polyfillsScript.onerror = () => console.error('Erreur de chargement du script polyfills');
    document.body.appendChild(polyfillsScript);

    // Ajouter le script principal de l'application Planity
    const appScript = document.createElement('script');
    appScript.src = 'https://d2skjte8udjqxw.cloudfront.net/widget/production/2/app.latest.js';
    appScript.async = true;
    appScript.onerror = () => console.error('Erreur de chargement du script app');
    document.body.appendChild(appScript);

    // Nettoyer les scripts lorsque le composant est démonté
    return () => {
      document.body.removeChild(polyfillsScript);
      document.body.removeChild(appScript);
    };
  }, []); // Exécute uniquement au montage du composant

  return (
    <div className="page-container">

      {/* Conteneur avec une marge */}
      <div className="shop-container">
        <div
          id="onlineShopContainer"
          style={{ minHeight: '500px', width: '100%' }} // Conteneur de la boutique
        ></div>
      </div>
    </div>
  );
};

export default NosProduitsPage;
