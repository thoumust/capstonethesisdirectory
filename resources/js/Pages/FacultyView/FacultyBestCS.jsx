import React, { useState } from 'react';
import '../../../css/AdminView/AdminBest.css';
import FacultySidebar from './FacultySidebar.jsx';
import Header from '../General/Header';
import Footer from '../General/Footer';

const FacultyBestCS = () => {
  // Initial data for best projects (this can be fetched from an API)
  const initialProjects = {
    coreCS: ["Project 1", "Project 2", "Project 3"],
    gameDev: ["Project 4", "Project 5", "Project 6"],
    dataSci: ["Project 7", "Project 8", "Project 9"]
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
                        {
                          project
                        }
                      </td>
                      <td>
                        {
                          projects.gameDev[index]
                        }
                      </td>
                      <td>
                        {
                          projects.dataSci[index]
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

export default FacultyBestCS;
