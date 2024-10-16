import React, { useState } from "react";
import "../../../css/AdminView/AdminIPreg.css";
import FacultySidebar from "./FacultySidebar";
import Header from "../General/Header";
import Footer from "../General/Footer";
import FacultyModal from "./FacultyModal";

const FacultyViewISipr = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterYear, setFilterYear] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [acmDocument, setAcmDocument] = useState(null);
  const navigate = useNavigate();

  // Mock data for the table
  const IScapstoneProjects = [
    {
      ipRegistrationNumber: "2023-IS-0001",
      title: "IS Project 1",
      specialization: "Specialization 1",
      yearPublished: 2023,
      authors: "Author 1",
      keywords: "Keyword 1",
    },
    {
      ipRegistrationNumber: "2023-IS-0002",
      title: "IS Project 2",
      specialization: "Web Development",
      yearPublished: 2022,
      authors: "Author 2",
      keywords: "HTML, CSS, JavaScript",
    },
    {
      ipRegistrationNumber: "2023-IS-0003",
      title: "IS Project 3",
      specialization: "Software Engineering",
      yearPublished: 2023,
      authors: "Author 3",
      keywords: "Agile, Scrum",
    },
    {
      ipRegistrationNumber: "2023-IS-0004",
      title: "IS Project 4",
      specialization: "Cyber Security",
      yearPublished: 2021,
      authors: "Author 4",
      keywords: "Firewalls, VPNs",
    },
    {
      ipRegistrationNumber: "2023-IS-0005",
      title: "IS Project 5",
      specialization: "Cloud Computing",
      yearPublished: 2023,
      authors: "Author 5",
      keywords: "AWS, Azure",
    },
  ];

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleYearFilterChange = (e) => setFilterYear(e.target.value);

  const handleViewAcm = (doc) => {
    setAcmDocument(doc);
    setShowModal(true);
  };

  const handleViewApproval = (doc) => {
    navigate("/admin/approval-form", { state: { approvalFrom: doc } });
  };

  const handleEdit = (projectId) => {
    navigate(`/admin/edit-IS-Cap/${projectId}`);
  };

  return (
    <div className="admin-home">
      <Header />
      <div className="content-container">
        <FacultySidebar />
        <main className="main-content">
          <div className="capstone-container">
            <header className="capstone-header">
              <h1>IP-registered IS Capstone Projects</h1>
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
                {IScapstoneProjects.map((project, index) => (
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

export default FacultyViewISipr;
