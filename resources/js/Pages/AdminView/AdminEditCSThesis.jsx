import React from 'react';
import { useForm, usePage, router } from '@inertiajs/react'; // useForm and usePage
import AdminSidebar from './AdminSidebar';
import Header from '../General/Header';
import Footer from '../General/Footer';
import '../../../css/AdminView/AdminIPreg.css';

const AdminEditCSThesis = () => {
  // Get project data from Inertia page props
  const { project } = usePage().props;

  // Using useForm to handle form data
  const { data, setData, put, processing, errors } = useForm({
    ipRegistration: project?.ipRegistration || '',
    specialization: project?.specialization || '',
    title: project?.title || '',
    author1: project?.author1 || '',
    author2: project?.author2 || '',
    author3: project?.author3 || '',
    author4: project?.author4 || '',
    technicalAdviser: project?.technicalAdviser || '',
    yearPublished: project?.yearPublished || '',
    fullDocument: null,
    acmPaper: null,
    sourceCode: null,
    approvalForm: null,
    keywords: project?.keywords || '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  // Handle file changes
  const handleFileChange = (e) => {
    setData(e.target.name, e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('admin/update-CS-Thesis', project.id), {
      onSuccess: () => router.visit('/admin/ip-registered/CS-thes'),
    });
  };

  const handleCancel = () => {
    router.visit('/admin/ip-registered/CS-thes');
  };

  return (
    <div className="admin-home">
      <Header />
      <div className="content-container">
        <AdminSidebar />
        <div className="main-content">
          <div className="capstone-container">
            <h1>Edit CS Thesis Paper</h1>
            <form className="capstone-form" onSubmit={handleSubmit}>
              {/* Input Fields */}
              <div className="form-group">
                <label>IP Registration #:</label>
                <input type="text" name="ipRegistration" value={data.ipRegistration} onChange={handleChange} />
                {errors.ipRegistration && <div>{errors.ipRegistration}</div>}
              </div>

              <div className="form-group">
                <label>Specialization:</label>
                <input type="text" name="specialization" value={data.specialization} onChange={handleChange} />
                {errors.specialization && <div>{errors.specialization}</div>}
              </div>

              <div className="form-group">
                <label>Thesis Title:</label>
                <input type="text" name="title" value={data.title} onChange={handleChange} />
                {errors.title && <div>{errors.title}</div>}
              </div>

              {/* Author Fields */}
              <div className="form-group">
                <label>Author 1:</label>
                <input type="text" name="author1" value={data.author1} onChange={handleChange} />
                {errors.author1 && <div>{errors.author1}</div>}
              </div>
              {/* Other authors go here */}

              {/* Technical Adviser */}
              <div className="form-group">
                <label>Technical Adviser:</label>
                <input type="text" name="technicalAdviser" value={data.technicalAdviser} onChange={handleChange} />
                {errors.technicalAdviser && <div>{errors.technicalAdviser}</div>}
              </div>

              <div className="form-group">
                <label>Year Published:</label>
                <input type="text" name="yearPublished" value={data.yearPublished} onChange={handleChange} />
                {errors.yearPublished && <div>{errors.yearPublished}</div>}
              </div>

              {/* File Uploads */}
              <div className="form-group">
                <label>Full Document:</label>
                <input type="file" name="fullDocument" onChange={handleFileChange} />
                {errors.fullDocument && <div>{errors.fullDocument}</div>}
              </div>

              {/* Keywords */}
              <div className="form-group">
                <label>Keywords:</label>
                <input type="text" name="keywords" value={data.keywords} onChange={handleChange} />
                {errors.keywords && <div>{errors.keywords}</div>}
              </div>

              {/* Form Actions */}
              <div className="form-actions">
                <button className="save-button" type="submit" disabled={processing}>
                  Save CS Thesis Paper
                </button>
                <button className="cancel-button" type="button" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminEditCSThesis;
