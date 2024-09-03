import React, { useState } from 'react';
import './AdminIPreg.css';
import AdminSidebar from "./AdminSidebar";
import Header from "./Header";
import { useNavigate } from "react-router-dom"; // Import the hook
import Footer from "./Footer";
    
    const AdminViewCSipr = () => {
      const [searchQuery, setSearchQuery] = useState("");
      const [filterYear, setFilterYear] = useState("all");
      const navigate = useNavigate(); // Initialize the hook for navigation

      // Mock data for the table (you would fetch this from an API)
      const CSThesisPapers = [
        // Add Thesis Papers data here
      ];
    
      const handleSearchChange = (e) => setSearchQuery(e.target.value);
      const handleYearFilterChange = (e) => setFilterYear(e.target.value);
    
      // You can filter the Papers based on the filters here

      const handleAdd = () => {
        navigate("/admin/add-CS-Thes");
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
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Mock rows - replace with dynamic data */}
                    {[...Array(6)].map((_, index) => (
                      <tr key={index}>
                        <td>2023-IS-000{index + 1}</td>
                        <td>Papers Title {index + 1}</td>
                        <td>Specialization {index + 1}</td>
                        <td>2023</td>
                        <td>Author {index + 1}</td>
                        <td>
                          <button className="view-button">Add to Best CS Thesis list</button>
                          <button className="view-button">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
    
                {/* Footer */}
                <footer className="capstone-footer">
                  <button className="submit-button" onClick={handleAdd}>Add CS Thesis Papers</button>
                </footer>
              </div>
            </main>
          </div>
          <Footer />
        </div>
      );
    };
    
export default AdminViewCSipr;
