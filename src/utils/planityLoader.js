// utils/planityLoader.js
export const loadPlanityModule = (containerId, config) => {
  const container = document.getElementById(containerId);

  // Définir la configuration de Planity dans le contexte global window
  window.planity = {
    key: process.env.REACT_APP_PLANITY_API_KEY,
    primaryColor: process.env.REACT_APP_PRIMARY_COLOR,
    ...config,
    container: container,
  };

  // Créer et ajouter le script polyfills
  const polyfillsScript = document.createElement('script');
  polyfillsScript.src = 'https://d2skjte8udjqxw.cloudfront.net/widget/production/2/polyfills.latest.js';
  // Retirer async = true
  polyfillsScript.onload = () => {
    // Charger le script principal de Planity une fois le polyfills chargé
    const appScript = document.createElement('script');
    appScript.src = 'https://d2skjte8udjqxw.cloudfront.net/widget/production/2/app.latest.js';
    appScript.onload = () => console.log('Planity module loaded');
    appScript.onerror = () => console.error('Erreur de chargement du script app');
    document.body.appendChild(appScript);
  };

  polyfillsScript.onerror = () => console.error('Erreur de chargement du script polyfills');

  document.body.appendChild(polyfillsScript);

  return () => {
    document.body.removeChild(polyfillsScript);
  };
};
