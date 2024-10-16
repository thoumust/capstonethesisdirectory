import React from 'react';
import '../../../css/AdminView/AdminManageRoles.css';
import AdminSidebar from './AdminSidebar';
import Header from '../General/Header';
import Footer from '../General/Footer';

const AdminManageRoles = () => {
  return (
    <div className="admin-home">
      <Header />
      <div className="content-container">
        <AdminSidebar />
        <div className="main-content">
          <div className="roles-container">
            <div className="roles-header">
              <h1>Manage Faculty Roles</h1>
            </div>
            
            <div className="search-bar">
              <input type="text" placeholder="Search faculty member..." />
            </div>
            
            <div className="roles-filters">
              <label htmlFor="sortBy">Sort by:</label>
              <select id="sortBy">
                <option value="name">Name</option>
                <option value="role">Current Role</option>
                <option value="department">Department</option>
              </select>
            </div>

            <div className="roles-table">
              <table>
                <thead>
                  <tr>
                    <th>Faculty Member Name</th>
                    <th>Email Address</th>
                    <th>Current Role</th>
                    <th>New Role</th>
                    <th>Department</th>
                    <th>Actions</th>
                    <th>Last Updated By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>john.doe@example.com</td>
                    <td>Faculty</td>
                    <td>
                      <select>
                        <option value="faculty">Faculty</option>
                        <option value="admin">Admin</option>
                        <option value="capstone">Capstone Coordinator</option>
                      </select>
                    </td>
                    <td>
                      <select>
                        <option value="cs">CS</option>
                        <option value="it">IT</option>
                        <option value="is">IS</option>
                      </select>
                    </td>
                    <td><button className="deactivate-button">Deactivate</button></td>
                    <td>Admin User</td>
                  </tr>
                  {/* Add more rows as necessary */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminManageRoles;
