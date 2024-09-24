import React from "react";
import { Head, useForm, Link } from '@inertiajs/react'; // Inertia.js utilities for routing and form handling
import "../../../css/StudentView/StudentRegister.css";

const StudentRegister = () => {
  // Inertia.js useForm hook to handle form data and submission
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    studentNumber: '',  // Custom field
  });

  // Handle form field changes
  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit the form data to the Laravel backend
    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation'),
    });
  };

  return (
    <div className="register-container">
      <Head title="Student Registration" /> {/* Set page title using Inertia */}

      <div className="register-content">
        <img src="/logo.png" alt="College Logo" className="logo" />
        <h2>College of Information and Computing Sciences</h2>
        <h3>Capstone Projects and Thesis Papers Directory</h3>
        <h1>Student Registration</h1>


        <form className="register-form" onSubmit={handleSubmit}>

          
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              required
            />
            {errors.name && (
              <p className="error-text">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          {/* Student Number */}
          <div className="form-group">
            <label htmlFor="studentNumber">Student Number:</label>
            <input
              type="text"
              name="studentNumber"
              value={data.studentNumber}
              onChange={handleChange}
              required
            />
            {errors.studentNumber && (
              <p className="error-text">{errors.studentNumber}</p>
            )}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="password_confirmation">Confirm Password:</label> {/* Laravel expects this name */}
            <input
              type="password"
              name="password_confirmation"
              value={data.password_confirmation}
              onChange={handleChange}
              required
            />
            {errors.password_confirmation && (
              <p className="error-text">{errors.password_confirmation}</p>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="register-button" disabled={processing}>
            Register
          </button>
        </form>

        {/* Return to Login Link */}
        <Link href={route('login')} className="return-login-link">
          Return to Login
        </Link>

        {/* Footer */}
        <div className="studentfooter">
          <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a> |{" "}
          <a href="#">UST website</a> |<a href="/admin-login"> Admin Log in</a>{" "}
          |<a href="/faculty-login"> Faculty Log in</a>
        </div>
      </div>
    </div>
  );
};

export default StudentRegister;
