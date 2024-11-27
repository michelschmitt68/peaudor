import React, { useEffect } from 'react';
import './NosProduitsPage.css';

const NosProduitsPage = () => {
  useEffect(() => {
    // Configure le conteneur pour la boutique en ligne
    const containerId = 'onlineShopContainer';
    const container = document.getElementById(containerId);

    // Ajout de la configuration Planity
    window.planity = {
      key: process.env.REACT_APP_PLANITY_API_KEY, // Clé API
      primaryColor: process.env.REACT_APP_PRIMARY_COLOR, // Couleur principale
      onlineShopContainer: container, // Conteneur pour la boutique en ligne
    };

    // Ajout des scripts nécessaires
    const polyfillsScript = document.createElement('script');
    polyfillsScript.src =
      'https://d2skjte8udjqxw.cloudfront.net/widget/production/2/polyfills.latest.js';
    polyfillsScript.async = true;
    document.body.appendChild(polyfillsScript);

    const appScript = document.createElement('script');
    appScript.src =
      'https://d2skjte8udjqxw.cloudfront.net/widget/production/2/app.latest.js';
    appScript.async = true;
    document.body.appendChild(appScript);

    // Nettoyage lors du démontage du composant
    return () => {
      document.body.removeChild(polyfillsScript);
      document.body.removeChild(appScript);
    };
  }, []);

  return (
    <div>
      <h1>Nos Produits</h1>
      <div
        id="onlineShopContainer"
        style={{ minHeight: '500px', width: '100%' }} // Conteneur de la boutique
      ></div>
    </div>
  );
};

export default NosProduitsPage;
