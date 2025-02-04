import React, { useState } from "react";
import { InteractiveSection, InteractiveTitle, TextAnswer, Separator, Button } from "../../soins/SharedStyles";

const QuestionsAdmin = ({ title, questions, onUpdateQuestions }) => {
    const [faqStates, setFaqStates] = useState({});
    const [editableIndex, setEditableIndex] = useState(null);
    const [newQuestion, setNewQuestion] = useState("");
    const [newAnswer, setNewAnswer] = useState("");

    const toggleFaq = (index) => {
        setFaqStates((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const handleEditClick = (index) => {
        setEditableIndex(index);
        setNewQuestion(questions[index].question);
        setNewAnswer(questions[index].answer);
    };

    const handleSaveClick = (index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index] = { question: newQuestion, answer: newAnswer };
        onUpdateQuestions(updatedQuestions);
        setEditableIndex(null);
    };

    const handleDeleteClick = (index) => {
        const isConfirmed = window.confirm(`Supprimer la question : "${questions[index].question}" ?`);
        if (!isConfirmed) return;
        const updatedQuestions = questions.filter((_, i) => i !== index);
        onUpdateQuestions(updatedQuestions);
    };

    const handleAddClick = () => {
        const updatedQuestions = [...questions, { question: "", answer: "" }];
        onUpdateQuestions(updatedQuestions);
        setEditableIndex(questions.length);
    };

    return (
        <InteractiveSection>
            <InteractiveTitle>{title}</InteractiveTitle>
            <TextAnswer>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    {questions.map((faq, index) => (
                        <li key={index} style={{ marginBottom: "15px", padding: "10px", borderBottom: "1px solid #ddd" }}>
                            {editableIndex === index ? (
                                <div>
                                    <input
                                        type="text"
                                        value={newQuestion}
                                        onChange={(e) => setNewQuestion(e.target.value)}
                                        placeholder="Question"
                                        style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
                                    />
                                    <textarea
                                        value={newAnswer}
                                        onChange={(e) => setNewAnswer(e.target.value)}
                                        placeholder="Réponse"
                                        style={{ width: "100%", padding: "5px", minHeight: "60px" }}
                                    />
                                    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                                        <Button onClick={() => handleSaveClick(index)}>Sauvegarder</Button>
                                        <Button onClick={() => setEditableIndex(null)}>Annuler</Button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <strong onClick={() => toggleFaq(index)}>{faq.question}</strong>
                                    {faqStates[index] && <p dangerouslySetInnerHTML={{ __html: faq.answer }} />}
                                    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                                        <Button onClick={() => handleEditClick(index)}>Modifier</Button>
                                        <Button onClick={() => handleDeleteClick(index)} style={{ backgroundColor: "red" }}>
                                            Supprimer
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                <Button onClick={handleAddClick} style={{ marginTop: "20px", backgroundColor: "green", display: "block" }}>
                    Ajouter une question
                </Button>
            </TextAnswer>
            <Separator />
        </InteractiveSection>
    );
};

export default QuestionsAdmin;
