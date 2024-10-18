import React, { useState } from "react";
import "../../../css/AdminView/AdminIPreg.css";
import FacultySidebar from "./FacultySidebar";
import Header from "../General/Header";
import Footer from "../General/Footer";
import FacultyModal from "./FacultyModal";
import { router } from '@inertiajs/react';
const FacultyViewCSipr = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterYear, setFilterYear] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [acmDocument, setAcmDocument] = useState(null);
  

  // Mock data for the table
  const CSthesisPapers = [
    {
      id: 1,
      ipRegNo: "2023-CS-0001",
      title: "Thesis 1",
      specialization: "AI",
      yearPublished: 2023,
      authors: ["Author 1", "Author 2"],
      keywords: ["AI", "Learning"],
    },
    {
      id: 2,
      ipRegNo: "2023-CS-0002",
      title: "Thesis 2",
      specialization: "Networking",
      yearPublished: 2022,
      authors: ["Author 3", "Author 4"],
      keywords: ["Networking", "Security"],
    },
    {
      id: 3,
      ipRegNo: "2023-CS-0003",
      title: "Thesis 3",
      specialization: "Web Development",
      yearPublished: 2021,
      authors: ["Author 5"],
      keywords: ["React", "Node.js"],
    },
    {
      id: 4,
      ipRegNo: "2023-CS-0004",
      title: "Thesis 4",
      specialization: "Machine Learning",
      yearPublished: 2020,
      authors: ["Author 6", "Author 7"],
      keywords: ["Neural Networks", "Deep Learning"],
    },
    {
      id: 5,
      ipRegNo: "2023-CS-0005",
      title: "Thesis 5",
      specialization: "Cloud Computing",
      yearPublished: 2023,
      authors: ["Author 8"],
      keywords: ["AWS", "Azure"],
    },
  ];

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleYearFilterChange = (e) => setFilterYear(e.target.value);

  const handleEdit = (projectId) => {
    // Navigate to the edit page with the selected project ID
    router.visit(`/faculty/edit-cs-thesis/${projectId}`);
  };

  const handleViewAcm = (doc) => {
    setAcmDocument(doc);
    setShowModal(true);
  };

  const handleViewApproval = (doc) => {
    router.visit("/faculty/approval-form", { state: { approvalForm: doc } });
  };

  return (
    <div className="admin-home">
      <Header />
      <div className="content-container">
        <FacultySidebar />
        <main className="main-content">
          <div className="capstone-container">
            <header className="capstone-header">
              <h1>IP-registered CS Thesis Papers</h1>
              <div className="search-bar">
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
            </header>

            {/* Filters */}
            <div className="capstone-filters">
              <div className="filter-year">
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
              </div>
              <div className="availability-filters">
                <button>Available for Viewing</button>
                <button>Restricted</button>
                <button>More</button>
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
                {CSthesisPapers.map((project) => (
                  <tr key={project.id}>
                    <td>{project.ipRegNo}</td>
                    <td>{project.title}</td>
                    <td>{project.specialization}</td>
                    <td>{project.yearPublished}</td>
                    <td>{project.authors.join(", ")}</td>
                    <td>{project.keywords.join(", ")}</td>
                    <td>
                      <button
                        className="view-button"
                        onClick={() =>
                          handleViewAcm(
                            `ACM Document for Project ${project.id}`
                          )
                        }
                      >
                        View ACM
                      </button>
                      <button
                        className="view-button"
                        onClick={() =>
                          handleViewApproval(
                            `Approval form for Project ${project.id}`
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

            <footer className="capstone-footer"></footer>
          </div>
        </main>
      </div>

      <FacultyModal
        showModal={showModal}
        setShowModal={setShowModal}
        acmDocument={acmDocument}
      />

      <Footer />
    </div>
  );
};

export default FacultyViewCSipr;
