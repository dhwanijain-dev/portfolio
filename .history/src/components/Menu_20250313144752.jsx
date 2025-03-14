export const Menu = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePlaneClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="menu">
            <img className="menu__logo " src="logo.png" alt="logo" />
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
                <button onClick={handlePlaneClick}>

                </button>
            </div>
        </div>
    );
};