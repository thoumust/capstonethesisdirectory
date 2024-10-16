import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import Header from "../General/Header";
import Footer from "../General/Footer";
import "./AdminApproval.css";

const AdminITApproval = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <div className="admin-home">
      <Header />
      <div className="content-container">
        <AdminSidebar />
        <main className="main-content">
          <div className="approval-container">
            <h1>Approval of IT Capstone Projects</h1>

            {/* Search box */}
            <div className="search-box">
              <input
                type="text"
                placeholder="Search by title, author, etc..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="search-button">
                <img src="/search-icon.png" alt="Search" />
              </button>
            </div>

            {/* Filters */}
            <div className="filters">
              <div className="filter-year">
                <label>Year</label>
                <select>
                  <option value="all">All</option>
                  <option value="2019-2023">2019-2023</option>
                  <option value="2014-2018">2014-2018</option>
                  <option value="2013">2013</option>
                </select>
              </div>
              <div className="filter-status">
                <label>Status</label>
                <select>
                  <option value="available">Available for Viewing</option>
                  <option value="restricted">Restricted</option>
                  <option value="more">More</option>
                </select>
              </div>
              <div className="sort-by">
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
                  <th>Approve</th>
                  <th>Reject</th>
                  <th>Title</th>
                  <th>Specialization</th>
                  <th>Year Published</th>
                  <th>Author/s</th>
                  <th>Full Document</th>
                  <th>Approval Form</th>
                </tr>
              </thead>
              <tbody>
                {/* Mock rows - replace with dynamic data */}
                {[...Array(5)].map((_, index) => (
                  <tr key={index}>
                    <td>
                      <button className="approve-btn">✔</button>
                    </td>
                    <td>
                      <button className="reject-btn">✖</button>
                    </td>
                    <td>Capstone Title {index + 1}</td>
                    <td>Specialization {index + 1}</td>
                    <td>2023</td>
                    <td>Author {index + 1}</td>
                    <td>
                      <button className="view-doc-btn">View Document</button>
                    </td>
                    <td>
                      <button className="view-doc-btn">View Document</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminITApproval;
