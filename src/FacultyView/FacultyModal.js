import React from "react";
import "../AdminView/AdminModal.css"; // Assuming you style the modal here

const FacultyModal = ({ showModal, setShowModal, acmDocument }) => {
  if (!showModal) return null; // Modal will only render if showModal is true

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2><strong>ACM Document</strong></h2>
        <p>{acmDocument ? acmDocument : "No ACM Document Available"}</p>
        <button className="close-button" onClick={() => setShowModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default FacultyModal;
