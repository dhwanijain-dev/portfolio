import { useState } from "react";
import Modal from "./Modal";
import LeetCodeHeatmap from "./LeetcodeHeatMap";

export const Menu = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePlaneClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

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
                <div c>
                    <LeetCodeHeatmap/>
                </div>
                <button onClick={handleCloseModal}>Close</button>
            </Modal>
        )
    }
        </>
    );
};