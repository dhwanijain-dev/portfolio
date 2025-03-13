import { motion, AnimatePresence } from "framer-motion";

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

const DashboardModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed top-0 left-0 w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center z-50"
                >
                    <h1 className="text-3xl font-bold mb-5">My Achievements</h1>
                    <p className="text-lg mb-3">🏆 Completed 4 Half Marathons</p>
                    <p className="text-lg mb-3">💪 Increased Pull-ups to 12+</p>
                    <p className="text-lg mb-3">🚴 Training for 100km Marathon</p>

                    <motion.button
                        onClick={onClose}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute top-5 right-5 bg-white text-black p-3 rounded-lg shadow-lg"
                    >
                        Go Back
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export { DashboardButton, DashboardModal };
