import { useEffect } from 'react';

const PlanityWidget = () => {
    useEffect(() => {
        // Charger le script Planity au montage du composant
        const script = document.createElement('script');
        script.src = 'URL_DU_SCRIPT_PLANITY'; // Remplace par l'URL fournie
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Nettoyage du script si nécessaire
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            {/* Div où le widget sera injecté */}
            <div id="planity-widget-container"></div>
        </div>
    );
};

export default PlanityWidget;