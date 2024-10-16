import React, { useState } from 'react';
import '../../../css/AdminView/AdminBest.css';
import FacultySidebar from './FacultySidebar.jsx';
import Header from '../General/Header';
import Footer from '../General/Footer';

const FacultyBestIT = () => {
  // Initial data for best projects (this can be fetched from an API)
  const initialProjects = {
    webAndMobile: ["Project 1", "Project 2", "Project 3"],
    itAutomation: ["Project 4", "Project 5", "Project 6"],
    networkSecurity: ["Project 7", "Project 8", "Project 9"]
  };

  // State to store the current projects and if we're in edit mode
  const [projects, setProjects] = useState(initialProjects);

  return (
    <div className="admin-home">
      <Header />
      <div className="content-container">
        <FacultySidebar />
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
                        {
                          project
                        }
                      </td>
                      <td>
                        {
                          projects.itAutomation[index]
                        }
                      </td>
                      <td>
                        {
                          projects.networkSecurity[index]
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="capstone-footer">
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FacultyBestIT;
