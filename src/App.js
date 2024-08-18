import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import GamePage2 from './components/GamePage2'; // Import the new component
import FinalPage from './components/FinalPage'; // Ensure you have this component

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/game" element={<GamePage />} />
                <Route path="/game2" element={<GamePage2 />} /> {/* Add route for GamePage2 */}
                <Route path="/final" element={<FinalPage />} /> {/* Route for the final page */}
            </Routes>
        </Router>
    );
};

export default App;
