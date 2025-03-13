import React from "react";
import "../index.css"; // Import CSS for modal styling

const Model = ({ children, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
                <button className="modal-close" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Model;