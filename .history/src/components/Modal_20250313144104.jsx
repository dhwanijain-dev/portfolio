import React from "react";
import "./Modal.css"; // Import CSS for modal styling

const Modal = ({ children, onClose }) => {
    return (
        <div className="modal-overlay h-10">
            <div className="modal-content">
                {children}
                <button className="modal-close" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;