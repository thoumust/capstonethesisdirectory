import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentRegister.css";

const StudentRegister = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    // Validate email
    if (name === "email") {
      if (!/\S+@ust\.edu\.ph$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Email must be a valid UST email (e.g., Group10@ust.edu.ph).",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
      }
    }

    // Password validation
    if (name === "password") {
      if (value.length < 8) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password must be at least 8 characters long.",
        }));
      } else if (!/[A-Z]/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password must contain at least one uppercase letter.",
        }));
      } else if (!/[a-z]/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password must contain at least one lowercase letter.",
        }));
      } else if (!/\d/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password must contain at least one number.",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
      }
    }

    // Confirm password match
    if (name === "confirmPassword") {
      if (value !== formValues.password) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: "Passwords do not match.",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formValues.firstName) {
      newErrors.firstName = "First name is required.";
    }

    if (!formValues.lastName) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formValues.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@ust\.edu\.ph$/.test(formValues.email)) {
      newErrors.email = "Email must be a valid UST email.";
    }

    if (!formValues.studentNumber) {
      newErrors.studentNumber = "Student number is required.";
    }

    if (!formValues.password) {
      newErrors.password = "Password is required.";
    } else if (formValues.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    } else if (!/[A-Z]/.test(formValues.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(formValues.password)) {
      newErrors.password =
        "Password must contain at least one lowercase letter.";
    } else if (!/\d/.test(formValues.password)) {
      newErrors.password = "Password must contain at least one number.";
    }

    if (!formValues.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required.";
    } else if (formValues.password !== formValues.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Assume registration is successful, redirect to StudentHome
      navigate("/student-home");
    }
  };

  const handleReturnToLogin = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    navigate("/"); // Redirect to the StudentLogin page
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <img src="/logo.png" alt="College Logo" className="logo" />
        <h2>College of Information and Computing Sciences</h2>
        <h3>Capstone Projects and Thesis Papers Directory</h3>
        <h1>Student Registration</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && (
              <p className="error-text">{errors.firstName}</p>
            )}
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && <p className="error-text">{errors.lastName}</p>}
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Student Number:</label>
            <input
              type="text"
              name="studentNumber"
              value={formValues.studentNumber}
              onChange={handleChange}
              required
            />
            {errors.studentNumber && (
              <p className="error-text">{errors.studentNumber}</p>
            )}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && (
              <p className="error-text">{errors.confirmPassword}</p>
            )}
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <a href="/" onClick={handleReturnToLogin} className="return-login-link">
          Return to Login
        </a>
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
