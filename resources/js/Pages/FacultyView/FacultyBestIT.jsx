import React, { useState } from 'react';
import '../../../css/AdminView/AdminBest.css';
import FacultySidebar from './FacultySidebar.jsx';
import Header from '../General/Header';
import Footer from '../General/Footer';

const FacultyBestIT = () => {
  const initialProjects = {
    webAndMobile: ["Project 1", "Project 2", "Project 3"],
    itAutomation: ["Project 4", "Project 5", "Project 6"],
    networkSecurity: ["Project 7", "Project 8", "Project 9"]
  };

  const [projects, setProjects] = useState(initialProjects);

  return (
    <div className="admin-home flex flex-col min-h-screen ml-[15rem]">
      <Header />
        <div className="flex flex-grow">
          <FacultySidebar />
          <div className="main-content flex-grow p-4">
            <div className="capstone-container">
              <div className="capstone-header">
                <h1>Best IT Capstone Projects</h1>
              </div>
              <div className="capstone-table overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2">Web and Mobile Development:</th>
                      <th className="border p-2">IT Automation:</th>
                      <th className="border p-2">Network and Security:</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.webAndMobile.map((project, index) => (
                      <tr key={index}>
                        <td className="border p-2">{project}</td>
                        <td className="border p-2">{projects.itAutomation[index]}</td>
                        <td className="border p-2">{projects.networkSecurity[index]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default FacultyBestIT;
