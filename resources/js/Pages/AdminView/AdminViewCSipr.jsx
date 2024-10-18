import React, { useState } from "react";
import "../../../css/AdminView/AdminIPreg.css";
import AdminSidebar from "./AdminSidebar";
import Header from "../General/Header";
import Footer from "../General/Footer";
import AdminModal from "./AdminModal"; 
import { router } from '@inertiajs/react';
const AdminViewCSipr = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterYear, setFilterYear] = useState("all");
  const [showModal, setShowModal] = useState(false); 
  const [acmDocument, setAcmDocument] = useState(null); 
  const [filterPopup, setFilterPopup] = useState(false); // State for showing filter modal
  const [yearRange, setYearRange] = useState([2011, 2024]); // State for year range

  // Mock data for the table
  const CSthesisPapers = [
    { id: 1, ipRegNo: "2023-CS-0001", title: "Thesis 1", specialization: "AI", yearPublished: 2023, authors: ["Author 1", "Author 2"], keywords: ["AI", "Learning"] },
    { id: 2, ipRegNo: "2023-CS-0002", title: "Thesis 2", specialization: "Networking", yearPublished: 2022, authors: ["Author 3", "Author 4"], keywords: ["Networking", "Security"] },
  ];

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleYearFilterChange = (e) => setFilterYear(e.target.value);

  const handleAdd = () => {
    router.visit("/admin/add-CS-Thes");
  };

  const handleEdit = (projectId) => {
    router.visit(`/admin/edit-cs-thesis/${projectId}`);
  };

  const handleViewAcm = (doc) => {
    setAcmDocument(doc);
    setShowModal(true); 
  };

  const handleViewFullDoc = (doc) => {
    router.visit("/admin/full-document", { state: { fullDocument: doc } });
  };

  const handleViewApproval = (doc) => {
    router.visit("/admin/approval-form", { state: { approvalForm: doc } });
  };

  // Toggle Filter Popup
  const toggleFilterPopup = () => {
    setFilterPopup(!filterPopup);
  };

  // Handle Year Range Change
  const handleYearRangeChange = (e) => {
    const newValue = parseInt(e.target.value);
    const handle = e.target.name;

    // Adjusting minimum or maximum based on which handle is being moved
    if (handle === "min") {
      // Prevent moving min beyond max
      if (newValue < yearRange[1]) {
        setYearRange([newValue, yearRange[1]]);
      }
    } else {
      // Prevent moving max below min
      if (newValue > yearRange[0]) {
        setYearRange([yearRange[0], newValue]);
      }
    }
  };

  return (
    <div className="admin-home">
      <Header />

      <div className="content-container">
        <AdminSidebar />
        <main className="main-content">
          <div className="capstone-container">
            <header className="capstone-header">
              <h1>IP-registered CS Thesis Papers</h1>
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

            {/* Projects Cards */}
            <div className="project-cards">
              {CSthesisPapers.map((project) => (
                <div className="project-card" key={project.id}>
                  <div className="project-header">
                    <h2>{project.title}</h2>
                    <span className="status-label">In Progress</span>
                  </div>
                  <p><strong>IP Registration Number:</strong> {project.ipRegNo}</p>
                  <p><strong>Specialization:</strong> {project.specialization}</p>
                  <p><strong>Year Published:</strong> {project.yearPublished}</p>
                  <p><strong>Authors:</strong> {project.authors.join(", ")}</p>
                  <p><strong>Keywords:</strong> {project.keywords.join(", ")}</p>

                  <div className="project-actions">
                    <button className="action-button">Add to Best CS Thesis list</button>
                    <button className="action-button" onClick={() => handleEdit(project.id)}>
                      Edit
                    </button>
                    <button className="action-button" onClick={() => handleViewAcm(`ACM Document for Project ${project.id}`)}>
                      View ACM
                    </button>
                    <button className="action-button" onClick={() => handleViewFullDoc(`Full Document for Project ${project.id}`)}>
                      View Full Document
                    </button>
                    <button className="action-button" onClick={() => handleViewApproval(`Approval form for Project ${project.id}`)}>
                      View Approval Form
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <footer className="capstone-footer">
              <button className="submit-button" onClick={handleAdd}>
                Add CS Thesis Papers
              </button>
            </footer>
          </div>
        </main>
      </div>

      <AdminModal showModal={showModal} setShowModal={setShowModal} acmDocument={acmDocument} />

      <Footer />

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
    </div>
  );
};

export default AdminViewCSipr;
