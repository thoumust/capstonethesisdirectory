import React, { useState } from "react";
import "../AdminView/AdminIPreg.css";
import { useNavigate } from "react-router-dom";
import FacultySidebar from "./FacultySidebar";
import Header from "../General/Header";
import Footer from "../General/Footer";
import FacultyModal from "./FacultyModal";

const FacultyViewITipr = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterYear, setFilterYear] = useState("all");
<<<<<<< HEAD
  const [showModal, setShowModal] = useState(false);
  const [acmDocument, setAcmDocument] = useState(null);
=======
  const [showModal, setShowModal] = useState(false); 
  const [acmDocument, setAcmDocument] = useState(null); 
  const [filterPopup, setFilterPopup] = useState(false); // State for filter modal
  const [yearRange, setYearRange] = useState([2011, 2024]); // State for year range
>>>>>>> cf4add21677a609435b808325ac12efaff332927
  const navigate = useNavigate();

  // Mock data for the table
  const ITcapstoneProjects = [
    {
      ipRegistrationNumber: "2023-IT-0001",
      title: "IT Project 1",
      specialization: "Specialization 1",
      yearPublished: 2023,
      authors: "Author 1",
      keywords: "Keyword 1",
    },
    {
      ipRegistrationNumber: "2023-IT-0002",
      title: "IT Project 2",
      specialization: "Web Development",
      yearPublished: 2022,
      authors: "Author 2",
      keywords: "HTML, CSS, JavaScript",
    },
    {
      ipRegistrationNumber: "2023-IT-0003",
      title: "IT Project 3",
      specialization: "Software Engineering",
      yearPublished: 2023,
      authors: "Author 3",
      keywords: "Agile, Scrum",
    },
    {
      ipRegistrationNumber: "2023-IT-0004",
      title: "IT Project 4",
      specialization: "Network Security",
      yearPublished: 2021,
      authors: "Author 4",
      keywords: "Firewalls, VPNs",
    },
    {
      ipRegistrationNumber: "2023-IT-0005",
      title: "IT Project 5",
      specialization: "E-commerce Solutions",
      yearPublished: 2023,
      authors: "Author 5",
      keywords: "Online Shopping, Payment Gateway",
    },
  ];

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleYearFilterChange = (e) => setFilterYear(e.target.value);

  const handleViewAcm = (doc) => {
    setAcmDocument(doc);
    setShowModal(true);
  };

  const handleViewApproval = (doc) => {
    navigate("/faculty/approval-form", { state: { approvalFrom: doc } });
  };

<<<<<<< HEAD
=======
  // Toggle Filter Popup
  const toggleFilterPopup = () => {
    setFilterPopup(!filterPopup);
  };

  // Handle Year Range Change
  const handleYearRangeChange = (e) => {
    const newValue = parseInt(e.target.value);
    const handle = e.target.name;

    if (handle === "min") {
      if (newValue < yearRange[1]) {
        setYearRange([newValue, yearRange[1]]);
      }
    } else {
      if (newValue > yearRange[0]) {
        setYearRange([yearRange[0], newValue]);
      }
    }
  };

>>>>>>> cf4add21677a609435b808325ac12efaff332927
  return (
    <div className="admin-home">
      <Header />
      <div className="content-container">
        <FacultySidebar />
        <main className="main-content">
          <div className="capstone-container">
            <header className="capstone-header">
              <h1>IP-registered IT Capstone Projects</h1>
            </header>

            <div className="search-bar-outer">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="search-button">
                <img src="/search-icon.png" alt="Search" />
              </button>
            </div>

            {/* Filters */}
            <div className="capstone-filters">
              <div className="availability-filters">
                <button
                  className={filterYear === "all" ? "active" : ""}
                  onClick={() => setFilterYear("all")}
                >
                  All
                </button>
                <button
                  className={filterYear === "2019-2023" ? "active" : ""}
                  onClick={() => setFilterYear("2019-2023")}
                >
                  2019-2023
                </button>
                <button
                  className={filterYear === "2014-2018" ? "active" : ""}
                  onClick={() => setFilterYear("2014-2018")}
                >
                  2014-2018
                </button>
                <button>Available for Viewing</button>
                <button>Restricted</button>
                <button onClick={toggleFilterPopup}>More</button>
              </div>
              <div className="sort-dropdown">
                <label>Sort by</label>
                <select>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>

<<<<<<< HEAD
            {/* Table */}
            <table className="capstone-table">
              <thead>
                <tr>
                  <th>IP Registration Number</th>
                  <th>Title</th>
                  <th>Specialization</th>
                  <th>Year Published</th>
                  <th>Author/s</th>
                  <th>Keyword/s</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {ITcapstoneProjects.map((project, index) => (
                  <tr key={index}>
                    <td>{project.ipRegistrationNumber}</td>
                    <td>{project.title}</td>
                    <td>{project.specialization}</td>
                    <td>{project.yearPublished}</td>
                    <td>{project.authors}</td>
                    <td>{project.keywords}</td>
                    <td>
                      <button
                        className="view-button"
                        onClick={() =>
                          handleViewAcm(`ACM Document for ${project.title}`)
                        }
                      >
                        View ACM
                      </button>
                      <button
                        className="view-button"
                        onClick={() =>
                          handleViewApproval(
                            `Approval form for ${project.title}`
                          )
                        }
                      >
                        View Approval Form
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
=======
            {/* Project Cards */}
            <div className="project-cards">
              {ITcapstoneProjects.map((project) => (
                <div className="project-card" key={project.id}>
                  <div className="project-header">
                    <h2>{project.title}</h2>
                    <span className="status-label">In Progress</span>
                  </div>
                  <p><strong>IP Registration Number:</strong> {project.ipRegistrationNumber}</p>
                  <p><strong>Specialization:</strong> {project.specialization}</p>
                  <p><strong>Year Published:</strong> {project.yearPublished}</p>
                  <p><strong>Authors:</strong> {project.authors}</p>
                  <p><strong>Keywords:</strong> {project.keywords}</p>

                  <div className="project-actions">
                    <button className="action-button" onClick={() => handleViewAcm(`ACM Document for Project ${project.id}`)}>View ACM</button>
                    <button className="action-button" onClick={() => handleViewApproval(`Approval form for Project ${project.id}`)}>View Approval Form</button>
                  </div>
                </div>
              ))}
            </div>
>>>>>>> cf4add21677a609435b808325ac12efaff332927

            <footer className="capstone-footer"></footer>
          </div>
        </main>
      </div>

      <FacultyModal
        showModal={showModal}
        setShowModal={setShowModal}
        acmDocument={acmDocument}
      />

      {/* Filter Modal Popup */}
      {filterPopup && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Advanced Filters</h2>
            <div className="filter-form">
              <label>Year Range</label>
              <div className="range-slider">
                <div
                  className="slider-background"
                  style={{
                    left: `${((yearRange[0] - 2011) / (2024 - 2011)) * 100}%`,
                    width: `${((yearRange[1] - yearRange[0]) / (2024 - 2011)) * 100}%`,
                  }}
                />
                <input
                  type="range"
                  min="2011"
                  max="2024"
                  value={yearRange[0]}
                  name="min"
                  onChange={handleYearRangeChange}
                  className="min-slider"
                />
                <input
                  type="range"
                  min="2011"
                  max="2024"
                  value={yearRange[1]}
                  name="max"
                  onChange={handleYearRangeChange}
                  className="max-slider"
                />
              </div>
              <div className="range-inputs">
                <input
                  type="number"
                  value={yearRange[0]}
                  name="minYear"
                  onChange={handleYearRangeChange}
                  min="2011"
                  max="2024"
                  placeholder="Minimum Year"
                />
                <input
                  type="number"
                  value={yearRange[1]}
                  name="maxYear"
                  onChange={handleYearRangeChange}
                  min="2011"
                  max="2024"
                  placeholder="Maximum Year"
                />
              </div>
              <label>Track</label>
              <select>
                <option>AI</option>
                <option>Networking</option>
                <option>Security</option>
              </select>
              <label>Technical Adviser</label>
              <input type="text" placeholder="Technical Adviser" />
              <label>Availability</label>
              <select>
                <option>Available</option>
                <option>Restricted</option>
              </select>
              <label>Keywords</label>
              <textarea placeholder="Enter keywords"></textarea>
            </div>
            <div className="modal-actions">
              <button className="save-button">Save</button>
              <button className="cancel-button" onClick={toggleFilterPopup}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FacultyViewITipr;
