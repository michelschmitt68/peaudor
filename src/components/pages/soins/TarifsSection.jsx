// TarifsSection.jsx
import React, { useState } from "react";
import { InteractiveSection, InteractiveTitle, Text, Separator } from "./SharedStyles";

// Composant TarifsSection
const TarifsSection = ({ title, tarifs }) => {
    const [showTarifs, setShowTarifs] = useState(true);

    return (
        <InteractiveSection>
            <InteractiveTitle onClick={() => setShowTarifs(!showTarifs)}>
                {title}
            </InteractiveTitle>
            {showTarifs && (
                <Text>
                    <ul>
                        {tarifs.map((tarif, index) => (
                            <li key={index}>
                                {tarif.name}
                                <div className="details-container">
                                    <span className="price">{tarif.price}</span>
                                    {tarif.link && (
                                        <a href={tarif.link} target="_blank" rel="noopener noreferrer" className="view-link">
                                            Voir
                                        </a>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </Text>
            )}
            <Separator />
        </InteractiveSection>
    );
};

export default TarifsSection;