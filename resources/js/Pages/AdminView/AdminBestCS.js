import React, { useState } from 'react';
import './AdminBest.css';
import AdminSidebar from './AdminSidebar';
import Header from '../../General/Header';
import Footer from '../../General/Footer';

const AdminBestCS = () => {
  // Initial data for best projects (this can be fetched from an API)
  const initialProjects = {
    coreCS: ["Project 1", "Project 2", "Project 3"],
    gameDev: ["Project 4", "Project 5", "Project 6"],
    dataSci: ["Project 7", "Project 8", "Project 9"]
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
              <h1>Best CS Thesis Papers</h1>
            </div>
            <div className="capstone-table">
              <table>
                <thead>
                  <tr>
                    <th>Core Computer Science:</th>
                    <th>Game Development:</th>
                    <th>Data Science:</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.coreCS.map((project, index) => (
                    <tr key={index}>
                      <td>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editedProjects.coreCS[index]}
                            onChange={(e) =>
                              handleChange('coreCS', index, e.target.value)
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
                            value={editedProjects.gameDev[index]}
                            onChange={(e) =>
                              handleChange('gameDev', index, e.target.value)
                            }
                          />
                        ) : (
                          projects.gameDev[index]
                        )}
                      </td>
                      <td>
                        {isEditMode ? (
                          <input
                            type="text"
                            value={editedProjects.dataSci[index]}
                            onChange={(e) =>
                              handleChange('dataSci', index, e.target.value)
                            }
                          />
                        ) : (
                          projects.dataSci[index]
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

export default AdminBestCS;
