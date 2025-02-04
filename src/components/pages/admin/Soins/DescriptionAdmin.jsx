import React, { useState } from "react";
import { InteractiveSection, InteractiveTitle, Text, Separator, Button } from "../../soins/SharedStyles";

// Composant DescriptionAdmin
const DescriptionAdmin = ({ title, description, onUpdateDescription }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(description);

    const handleSave = () => {
        onUpdateDescription(newDescription);
        setIsEditing(false);
    };

    return (
        <InteractiveSection>
            <InteractiveTitle onClick={() => setIsEditing(!isEditing)}>
                {title}
            </InteractiveTitle>
            {isEditing ? (
                <Text>
                    <textarea
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        style={{
                            width: "100%",
                            height: "150px",
                            padding: "10px",
                            fontSize: "16px"
                        }}
                    />
                    <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                        <Button onClick={handleSave}>Sauvegarder</Button>
                        <Button onClick={() => setIsEditing(false)}>Annuler</Button>
                    </div>
                </Text>
            ) : (
                <Text>
                    <p dangerouslySetInnerHTML={{ __html: newDescription }} />
                    <Button onClick={() => setIsEditing(true)} style={{ marginTop: "10px" }}>
                        Modifier
                    </Button>
                </Text>
            )}
            <Separator />
        </InteractiveSection>
    );
};

export default DescriptionAdmin;
