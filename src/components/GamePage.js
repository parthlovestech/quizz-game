import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './GamePage.css';

const GamePage = () => {
    const [audio, setAudio] = useState(null); // Track the audio object
    const navigate = useNavigate();

    const questions = [
        {
            question: "What color is a zebra's fur?",
            options: ["Transparent", "Rainbow", "Stripes", "Not Zebra"],
            correct: "Stripes",
        },
        {
            question: "What is the most fashionable accessory for a giraffe?",
            options: ["A polka-dot scarf", "A top hat", "A bow tie", "A long necktie"],
            correct: "A long necktie",
        },
        // Add more questions as needed
    ];

    const currentQuestion = questions[0]; // First question

    const handleOptionClick = (option) => {
        const isCorrect = option === currentQuestion.correct;
        const audioSrc = isCorrect ? '/audio/correct-answer.mp3' : '/audio/wrong-answer.mp3';
        
        if (audio) {
            audio.pause(); // Pause previous audio if any
            audio.currentTime = 0; // Reset audio to start
        }
        
        const newAudio = new Audio(audioSrc);
        setAudio(newAudio);
        newAudio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
        
        if (isCorrect) {
            newAudio.onended = () => {
                const timer = setTimeout(() => navigate('/game2'), 1000); // Navigate to GamePage2 after a short delay
                return () => clearTimeout(timer);
            };
        }
    };

    useEffect(() => {
        return () => {
            if (audio) {
                audio.pause(); // Cleanup audio on component unmount
            }
        };
    }, [audio]);

    return (
        <div className="game-page">
            <div className="whirly-background"></div> {/* Add this div for the spinning background */}
            <div className="question-number">
                {1}
            </div>
            <p className="question">{currentQuestion.question}</p>
            <div className="options">
                {currentQuestion.options.map((option, index) => (
                    <button
                        key={index}
                        className="option-button"
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div className="quirky-element">Oops!</div>
        </div>
    );
};

export default GamePage;
