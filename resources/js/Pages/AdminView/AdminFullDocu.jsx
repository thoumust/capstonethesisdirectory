import React from 'react';
import AdminSidebar from './AdminSidebar';
import Header from '../General/Header';
import Footer from '../General/Footer';
import { usePage } from '@inertiajs/react'; // Use Inertia's usePage to get props

const AdminFullDocu = () => {
  const { fullDocument } = usePage().props; // Get fullDocument from Inertia props

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
