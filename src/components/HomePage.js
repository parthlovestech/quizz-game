import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const titleElement = document.querySelector('.title');
        const titleText = titleElement.textContent;
        titleElement.innerHTML = '';

        Array.from(titleText).forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.animationDelay = `${index * 0.1}s`;
            titleElement.appendChild(span);
        });
    }, []);

    return (
        <div className="homepage">
            <h1 className="title">
                Quirky<br />Quiz
            </h1>
            <div className="button-group">
                <button className="menu-button" onClick={() => navigate('/game')}>
                    Play
                </button>
                <button className="menu-button" onClick={() => alert('Instructions')}>
                    Instructions
                </button>
                <button className="menu-button" onClick={() => alert('Creator')}>
                    Creator
                </button>
            </div>
        </div>
    );
};

export default HomePage;
