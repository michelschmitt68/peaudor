import React, { useState } from "react";
import { InteractiveSection, InteractiveTitle, Text, Separator } from "./SharedStyles";

// Composant DescriptionSection
const DescriptionSection = ({ title, description }) => {
    const [showDescription, setShowDescription] = useState(true);

    return (
        <InteractiveSection>
            <InteractiveTitle onClick={() => setShowDescription(!showDescription)}>
                {title}
            </InteractiveTitle>
            {showDescription && (
                <Text>
                    {/* Utilisation de dangerouslySetInnerHTML pour afficher du HTML */}
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                </Text>
            )}
            <Separator />
        </InteractiveSection>
    );
};

export default DescriptionSection;
