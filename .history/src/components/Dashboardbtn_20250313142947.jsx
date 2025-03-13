const DashboardButton = ({ onClick }) => {
    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed top-5 left-5 bg-blue-500 text-white p-3 rounded-lg shadow-lg z-50"
        >
            Open Dashboard
        </motion.button>
    );
};

export default DashboardButton;