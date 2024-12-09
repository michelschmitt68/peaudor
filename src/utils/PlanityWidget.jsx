import React, { useEffect } from 'react';

const PlanityWidget = ({ containerType }) => {
  useEffect(() => {
    const containerId = `planityWidgetContainer-${containerType}`;
    const container = document.getElementById(containerId);

    if (!container) {
      console.error(`Conteneur avec l'ID "${containerId}" introuvable.`);
      return;
    }

    // Configuration de Planity
    window.planity = {
      key: process.env.REACT_APP_PLANITY_API_KEY,
      primaryColor: process.env.REACT_APP_PRIMARY_COLOR,
      [`${containerType}Container`]: container,
    };

    // Ajoute les scripts nécessaires
    const polyfillsScript = document.createElement('script');
    polyfillsScript.src = 'https://d2skjte8udjqxw.cloudfront.net/widget/production/2/polyfills.latest.js';
    polyfillsScript.async = true;

    const appScript = document.createElement('script');
    appScript.src = 'https://d2skjte8udjqxw.cloudfront.net/widget/production/2/app.latest.js';
    appScript.async = true;

    document.body.appendChild(polyfillsScript);
    document.body.appendChild(appScript);

    // Nettoyage lors du démontage
    return () => {
      if (document.body.contains(polyfillsScript)) {
        document.body.removeChild(polyfillsScript);
      }
      if (document.body.contains(appScript)) {
        document.body.removeChild(appScript);
      }
      // Supprime la configuration globale de Planity
      delete window.planity;
    };
  }, [containerType]);

  return <div id={`planityWidgetContainer-${containerType}`} style={{ width: '100%', minHeight: '500px' }} />;
};

export default PlanityWidget;
