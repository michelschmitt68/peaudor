// FaqSection.jsx
import React, { useState } from "react";
import { InteractiveSection, InteractiveTitle, TextAnswer, Separator } from "./SharedStyles";

// Composant FaqSection
const QuestionsSection = ({ title, faqs }) => {
    const [faqStates, setFaqStates] = useState(
        faqs.reduce((acc, faq, index) => {
            acc[index] = false;
            return acc;
        }, {})
    );

    const toggleFaq = (index) => {
        setFaqStates((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <InteractiveSection>
            <InteractiveTitle onClick={() => setFaqStates({})}>
                {title}
            </InteractiveTitle>
            <TextAnswer>
                <ul>
                    {faqs.map((faq, index) => (
                        <li key={index}>
                            <strong onClick={() => toggleFaq(index)}>{faq.question}</strong>
                            {faqStates[index] && (
                                <p
                                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </TextAnswer>
            <Separator />
        </InteractiveSection>
    );
};

export default QuestionsSection;
