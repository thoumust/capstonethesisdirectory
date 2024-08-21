import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import StudentLogin from "./StudentLogin";
import FacultyLogin from "./FacultyLogin";
import PasswordRecovery from "./PasswordRecovery";
import AdminHome from "./AdminHome";
import StudentRegister from "./StudentRegister";
import StudentHome from "./StudentHome"; // Import the StudentHome component
import StudentProfile from "./StudentProfile";
import StudentViewITipr from "./StudentViewITipr";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/ip-registered/IT-cap" element={<StudentViewITipr />} />
        <Route path="/student-home" element={<StudentHome />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
