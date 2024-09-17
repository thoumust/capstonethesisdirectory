import React from "react";
import "./SubmitFinalRequirementsModal.css"; // Add styling in a new CSS file

const SubmitFinalRequirementsModal = ({ show, handleClose }) => {
  if (!show) {
    return null; // If the modal is not shown, return null
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Final Requirements Submission</h2>
        <form className="submission-form">
          <div className="form-group">
            <label>IP Registration #:</label>
            <input type="text" />
            <label>Specialization:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Capstone Title:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Authors:</label>
            <input type="text" placeholder="Author 1" />
            <input type="text" placeholder="Author 2" />
            <input type="text" placeholder="Author 3" />
            <input type="text" placeholder="Author 4" />
          </div>
          <div className="form-group">
            <label>Technical Adviser:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Year Published:</label>
            <input type="text" />
          </div>
          <div className="file-upload">
            <label>Full Document:</label>
            <button className="upload-button">Upload File</button>
          </div>
          <div className="file-upload">
            <label>Conference Paper:</label>
            <button className="upload-button">Upload File</button>
          </div>
          <div className="file-upload">
            <label>Source Code:</label>
            <button className="upload-button">Upload File</button>
          </div>
          <div className="form-group">
            <label>Keywords:</label>
            <input type="text" />
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-button">
              Submit
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitFinalRequirementsModal;
