import React, { useState } from 'react';
import './AdminIPreg.css';
import AdminSidebar from './AdminSidebar';
import Header from './Header';
import Footer from './Footer';

const AdminEditCSThesis = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    ipRegistration: '',
    specialization: '',
    thesisTitle: '',
    author1: '',
    author2: '',
    author3: '',
    author4: '',
    technicalAdviser: '',
    yearPublished: '',
    fullDocument: null,
    acmPaper: null,
    sourceCode: null,
    approvalForm: null,
    keywords: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Logic to handle form submission
    // Send formData to backend or process it accordingly
    // Example: use an API call to save the data
    alert('CS Thesis Paper saved successfully!');
  };

  return (
    <div className="admin-home">
      <Header />
      <div className="content-container">
        <AdminSidebar />
        <div className="main-content">
          <div className="capstone-container">
            <div className="capstone-header">
              <h1>Edit CS Thesis Paper</h1>
            </div>
            <form className="capstone-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>IP Registration #:</label>
                <input
                  type="text"
                  name="ipRegistration"
                  value={formData.ipRegistration}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Specialization:</label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Thesis Title:</label>
                <input
                  type="text"
                  name="thesisTitle"
                  value={formData.thesisTitle}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Author 1:</label>
                <input
                  type="text"
                  name="author1"
                  value={formData.author1}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Author 2:</label>
                <input
                  type="text"
                  name="author2"
                  value={formData.author2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Author 3:</label>
                <input
                  type="text"
                  name="author3"
                  value={formData.author3}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Author 4:</label>
                <input
                  type="text"
                  name="author4"
                  value={formData.author4}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Technical Adviser:</label>
                <input
                  type="text"
                  name="technicalAdviser"
                  value={formData.technicalAdviser}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Year Published:</label>
                <input
                  type="text"
                  name="yearPublished"
                  value={formData.yearPublished}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Full Document:</label>
                <input
                  type="file"
                  name="fullDocument"
                  onChange={handleFileChange}
                />
              </div>
              <div className="form-group">
                <label>ACM Paper:</label>
                <input
                  type="file"
                  name="acmPaper"
                  onChange={handleFileChange}
                />
              </div>
              <div className="form-group">
                <label>Source Code:</label>
                <input
                  type="file"
                  name="sourceCode"
                  onChange={handleFileChange}
                />
              </div>
              <div className="form-group">
                <label>Approval Form:</label>
                <input
                  type="file"
                  name="approvalForm"
                  onChange={handleFileChange}
                />
              </div>
              <div className="form-group">
                <label>Keywords:</label>
                <input
                  type="text"
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-actions">
                <button className="save-button" type="submit">
                  Save CS Thesis Paper
                </button>
                <button className="cancel-button" type="button">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminEditCSThesis;
