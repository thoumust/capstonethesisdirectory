import React from "react";
import "./StudentLogin.css";
<meta name="google-signin-client_id" content="475642027283-9qc1s36s3r65u99dffed9qsgf5krikj2.apps.googleusercontent.com"/>


const FacultyLogin = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <img src="/logo.png" alt="College Logo" className="logo" />
        <h2>College of Information and Computing Sciences</h2>
        <h3>Capstone Projects and Thesis Papers Directory</h3>
        <form className="login-form">
          <h1> Faculty log in</h1>

          <label>Email Address:</label>
          <input type="email" name="email" required />
          <label>Password:</label>
          <input type="password" name="password" required />
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
          <button type="submit" className="login-button">
            Log in
          </button>
        </form>
        <div className="divider">or</div>
        <div class="g-signin2" data-onsuccess="onSignIn">
                    <button className="google-button">
                        Sign in with Google
                    </button>
                    </div>
                
        <div className="footer">
          <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a> |{" "}
          <a href="#">UST website</a>
        </div>
        </div>  </div>
  );
};



export default FacultyLogin;
