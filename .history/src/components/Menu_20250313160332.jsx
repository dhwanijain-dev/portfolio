import { useState } from "react";
import Modal from "./Modal";
import LeetCodeHeatmap from "./LeetcodeHeatMap";
import TypingStatsDashboard from "./TypingStatsDashboard";

export const Menu = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePlaneClick = () => {
        setIsModalOpen(true);
    };


    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const data = {"name": "DHWANI_2606", "addedAt": 1677130324551, "typingStats": { "completedTests": 3046, "startedTests": 51114, "timeTyping": 166554.0299999999 }, "personalBests": { "time": { "15": [{ "acc": 100, "consistency": 92.93, "difficulty": "normal", "lazyMode": false, "language": "english", "punctuation": false, "raw": 162.22, "wpm": 162.22, "timestamp": 1740827039666, "numbers": false }, { "acc": 94.87, "consistency": 74.98, "difficulty": "normal", "lazyMode": false, "language": "english", "punctuation": true, "raw": 124.76, "wpm": 109.56, "timestamp": 1696574285526 }, { "acc": 92.73, "consistency": 67.48, "difficulty": "normal", "lazyMode": false, "language": "code_html", "punctuation": false, "raw": 43.98, "wpm": 39.18, "timestamp": 1696826033423 }, { "acc": 96.09, "consistency": 74.73, "difficulty": "normal", "lazyMode": false, "language": "english_1k", "punctuation": false, "raw": 102.37, "wpm": 88.78, "timestamp": 1707721089658 }, { "acc": 97.17, "consistency": 83.28, "difficulty": "normal", "lazyMode": false, "language": "english_450k", "punctuation": false, "raw": 84.77, "wpm": 73.58, "timestamp": 1707721125722 }, { "acc": 100, "consistency": 83.85, "difficulty": "normal", "lazyMode": false, "language": "english_5k", "punctuation": false, "raw": 100.76, "wpm": 100.76, "timestamp": 1708236340755 }, { "acc": 100, "consistency": 87.44, "difficulty": "normal", "lazyMode": false, "language": "english_10k", "punctuation": false, "raw": 93.57, "wpm": 93.57, "timestamp": 1708523404124 }, { "acc": 85.58, "consistency": 71.41, "difficulty": "normal", "lazyMode": false, "language": "code_javascript", "punctuation": false, "raw": 83.14, "wpm": 37.57, "numbers": false, "timestamp": 1722365207589 }], "30": [{ "acc": 96, "consistency": 87.22, "difficulty": "normal", "lazyMode": false, "language": "english", "punctuation": false, "raw": 139.99, "wpm": 126.79, "timestamp": 1716127199181, "numbers": false }], "60": [{ "acc": 97.28, "consistency": 85.11, "difficulty": "normal", "lazyMode": false, "language": "english", "punctuation": false, "raw": 139.59, "wpm": 132.19, "timestamp": 1724591990640, "numbers": false }], "120": [{ "acc": 92.86, "consistency": 85.38, "difficulty": "normal", "lazyMode": false, "language": "english", "punctuation": false, "raw": 144.3, "wpm": 126, "timestamp": 1739097997659, "numbers": false }] }, "words": { "10": [{ "acc": 100, "consistency": 46.86, "difficulty": "normal", "lazyMode": false, "language": "english", "punctuation": false, "raw": 197.07, "wpm": 197.07, "timestamp": 1704263688795 }], "25": [{ "acc": 96.8, "consistency": 67.36, "difficulty": "normal", "lazyMode": false, "language": "english", "punctuation": false, "raw": 163.28, "wpm": 158.01, "timestamp": 1698254581940 }], "50": [{ "acc": 95.65, "consistency": 85.89, "difficulty": "normal", "lazyMode": false, "language": "english", "punctuation": false, "raw": 134.26, "wpm": 121.52, "timestamp": 1698337230996 }], "100": [{ "acc": 91.79, "consistency": 85.27, "difficulty": "normal", "lazyMode": false, "language": "english", "punctuation": false, "raw": 137.36, "wpm": 118.48, "timestamp": 1698392489770 }] } }, "xp": 592104, "streak": 1, "maxStreak": 16, "isPremium": false, "inventory": { "badges": [] }, "allTimeLbs": { "time": { "15": { "english": { "rank": 12870, "count": 393753 } }, "60": { "english": { "rank": 15123, "count": 387124 } } } }, "uid": "aUP9cQItmWYIdplyZKHZTRYuhQu2" }


    return (
        <>

        
        <div className="menu">
            <img className="menu__logo" src="logo.png" alt="logo" />
            <div className="menu__buttons">
                <a className="menu__button" href="#home">
                    Home
                </a>
                <a className="menu__button" href="#skills">
                    Skills
                </a>
                <a className="menu__button" href="#projects">
                    Projects
                </a>
                <a className="menu__button" href="#contact">
                    Contact
                </a>
            </div>
            <button className="menu__button" onClick={handlePlaneClick}>
                DASHBOARD
            </button>
            
        </div>
        {
        isModalOpen && (
            <Modal onClose={handleCloseModal}>
                <div >
                    <LeetCodeHeatmap/>
                    <TypingStatsDashboard/>
                </div>
                <button onClick={handleCloseModal}>Close</button>
            </Modal>
        )
    }
        </>
    );
};