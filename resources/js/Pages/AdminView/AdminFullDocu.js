import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import Header from '../../General/Header';
import Footer from '../../General/Footer';

const AdminFullDocu = () => {
  const location = useLocation();
  const { fullDocument } = location.state || {}; // Fetch the full document passed from the previous page

  return (
    <div className="admin-home">
      <Header />
      <div className="content-container">
        <AdminSidebar />
        <main className="main-content">
          <div className="document-container">
            <h1>Full Document</h1>
            {/* Render the full document here */}
            <div className="document-content">
              {fullDocument ? (
                <p>{fullDocument}</p>
              ) : (
                <p>No document available.</p>
              )}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminFullDocu;
