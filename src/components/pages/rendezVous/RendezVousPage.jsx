import React, { useEffect } from 'react';
import './RendezVousPage.css';

const RendezVousPage = () => {
  useEffect(() => {
    // L'ID du conteneur pour l'intégration Planity
    const containerId = 'appointmentContainer'; // Utilisation pour prendre rendez-vous
    const container = document.getElementById(containerId);

    // Assurez-vous que le conteneur existe
    if (!container) {
      console.error(`Conteneur avec l'ID "${containerId}" introuvable.`);
      return;
    }

    // Configurez Planity avec les paramètres nécessaires
    window.planity = {
      key: process.env.REACT_APP_PLANITY_API_KEY, // Clé API depuis .env
      primaryColor: process.env.REACT_APP_PRIMARY_COLOR, // Couleur principale
      appointmentContainer: container, // Conteneur spécifique pour le rendez-vous
    };

    // Créer et ajouter les scripts nécessaires
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

    // Nettoyer les scripts lorsque le composant est démonté
    return () => {
      document.body.removeChild(polyfillsScript);
      document.body.removeChild(appScript);
    };
  }, []); // Exécute uniquement au montage du composant

  return (
    <div className="page-container">
      {/* Conteneur pour le widget Planity */}
      <div id="appointmentContainer" style={{ minHeight: '500px', width: '100%' }}></div>
    </div>
  );
};

export default RendezVousPage;
