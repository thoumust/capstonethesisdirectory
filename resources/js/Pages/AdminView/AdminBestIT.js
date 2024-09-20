import React, { useState } from 'react';
import './AdminBest.css';
import AdminSidebar from './AdminSidebar';
import Header from '../../General/Header';
import Footer from '../../General/Footer';

const AdminBestIT = () => {
  // Initial data for best projects (this can be fetched from an API)
  const initialProjects = {
    webAndMobile: ["Project 1", "Project 2", "Project 3"],
    itAutomation: ["Project 4", "Project 5", "Project 6"],
    networkSecurity: ["Project 7", "Project 8", "Project 9"]
  };

  // State to store the current projects and if we're in edit mode
  const [projects, setProjects] = useState(initialProjects);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedProjects, setEditedProjects] = useState(initialProjects);

  // Function to toggle edit mode
  const handleEdit = () => {
    setIsEditMode(true);
  };

  // Function to save changes
  const handleSave = () => {
    setProjects(editedProjects);
    setIsEditMode(false);
  };

  // Function to cancel editing
  const handleCancel = () => {
    setEditedProjects(projects);
    setIsEditMode(false);
  };

  // Handle change for the input fields during editing
  const handleChange = (category, index, value) => {
    setEditedProjects(prev => ({
      ...prev,
      [category]: prev[category].map((item, i) => (i === index ? value : item))
    }));
  };

  return (
    <div className="admin-home">
      <Header />
      <div className="content-container">
        <AdminSidebar />
        <div className="main-content">
          <div className="capstone-container">
            <div className="capstone-header">
              <h1>Best IT Capstone Projects</h1>
            </div>
            <div className="capstone-table">
              <table>
                <thead>
                  <tr>
                    <th>Web and Mobile Development:</th>
                    <th>IT Automation:</th>
                    <th>Network and Security:</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.webAndMobile.map((project, index) => (
                    <tr key={index}>
                      <td>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editedProjects.webAndMobile[index]}
                            onChange={(e) =>
                              handleChange('webAndMobile', index, e.target.value)
                            }
                          />
                        ) : (
                          project
                        )}
                      </td>
                      <td>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editedProjects.itAutomation[index]}
                            onChange={(e) =>
                              handleChange('itAutomation', index, e.target.value)
                            }
                          />
                        ) : (
                          projects.itAutomation[index]
                        )}
                      </td>
                      <td>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editedProjects.networkSecurity[index]}
                            onChange={(e) =>
                              handleChange('networkSecurity', index, e.target.value)
                            }
                          />
                        ) : (
                          projects.networkSecurity[index]
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="capstone-footer">
              {isEditMode ? (
                <>
                  <button className="save-button" onClick={handleSave}>Save</button>
                  <button className="cancel-button" onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <button className="edit-button" onClick={handleEdit}>Edit List</button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminBestIT;
