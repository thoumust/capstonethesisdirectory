import React from "react";
import "../AdminView/AdminModal.css"; // Assuming you style the modal here

const AdminModal = ({ showModal, setShowModal, acmDocument }) => {
  if (!showModal) return null; // Modal will only render if showModal is true

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2><strong>Title</strong></h2>
          <button className="close-button" onClick={() => setShowModal(false)}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <p>{acmDocument ? acmDocument : "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}</p>
        </div>
        <div className="modal-footer">
          <button className="generate-pdf-button">
            Generate PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminModal;
