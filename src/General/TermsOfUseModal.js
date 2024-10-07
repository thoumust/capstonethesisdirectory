import React from "react";
import "./TermsOfUseModal.css";

const TermsOfUseModal = ({ show, handleClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Terms of Use</h2>
        <ol>
          <li>
            <strong>Acceptance of Terms:</strong>
            <p>
              By using the CICS Capstone and Thesis Project Directory ("Site"),
              you agree to these Terms of Use. These terms apply to all users,
              including students, faculty, and administrators.
            </p>
          </li>
          <li>
            <strong>User Accounts:</strong>
            <p>
              Only registered members of UST CICS are eligible to create
              accounts. You are responsible for maintaining the confidentiality
              of your login credentials. Access to the platform is role-based:
              <br />
              Students: Can submit and view approved capstone and thesis
              projects.
              <br />
              Faculty: Can review and provide feedback on submissions.
              <br />
              Department Chairs: Manage and approve project submissions.
            </p>
          </li>
          <li>
            <strong>Usage Guidelines:</strong>
            <p>
              Users must maintain academic integrity and comply with all
              university guidelines for file submissions. Any attempt to misuse,
              plagiarize, or upload malicious content is strictly prohibited.
            </p>
          </li>
          <li>
            <strong>Intellectual Property:</strong>
            <p>
              Students retain ownership of their uploaded projects. By
              submitting to the platform, students grant UST CICS the right to
              store, display, and share their work for academic purposes.
            </p>
          </li>
          <li>
            <strong>Data Privacy:</strong>
            <p>
              Personal information is protected in accordance with our Privacy
              Policy. While we take necessary precautions to secure your data,
              using the platform acknowledges any associated risks.
            </p>
          </li>
          <li>
            <strong>Limitation of Liability:</strong>
            <p>
              The platform is provided "as is." UST CICS is not liable for any
              damages, data loss, or system downtime resulting from the use of
              the platform.
            </p>
          </li>
          <li>
            <strong>Modifications:</strong>
            <p>
              UST CICS reserves the right to amend these terms at any time.
              Continued use of the platform constitutes acceptance of any
              changes.
            </p>
          </li>
          <li>
            <strong>Termination:</strong>
            <p>
              We may suspend or terminate accounts without notice for violations
              of these terms.
            </p>
          </li>
          <li>
            <strong>Governing Law:</strong>
            <p>
              These terms are governed by the laws of the Republic of the
              Philippines.
            </p>
          </li>
          <li>
            <strong>Contact:</strong>
            <p>For questions, contact us at cics@ust.edu.ph.</p>
          </li>
        </ol>
        <div className="modal-actions">
          <button onClick={handleClose}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUseModal;
