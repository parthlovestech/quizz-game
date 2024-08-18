import React, { useEffect } from 'react';
import './FinalPage.css';

const FinalPage = () => {
    useEffect(() => {
        const audio = new Audio('/audio/sigma.mp3');
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }, []);

    return (
        <div className="final-page">
            <div className="confetti"></div>
            <div className="final-message">
                Skibid Sigma Toilet
            </div>
            <div className="final-submessage">
                What the Sigma?
            </div>
        </div>
    );
};

export default FinalPage;
