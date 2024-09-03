import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import StudentLogin from "./StudentLogin";
import FacultyLogin from "./FacultyLogin";
import PasswordRecovery from "./PasswordRecovery";
import AdminHome from "./AdminHome";
import AdminViewITipr from "./AdminViewITipr"
import AdminViewISipr from "./AdminViewISipr"
import AdminViewCSipr from "./AdminViewCSipr"
import StudentRegister from "./StudentRegister";
import StudentHome from "./StudentHome"; // Import the StudentHome component
import StudentProfile from "./StudentProfile";
import StudentViewITipr from "./StudentViewITipr";
import StudentViewISipr from "./StudentViewISipr";
import StudentViewCSipr from "./StudentViewCSipr";
import AdminProfile from "./AdminProfile";
import AdminAddITCap from "./AdminAddITCap";
import AdminAddISCap from "./AdminAddISCap";
import AdminAddCSThes from "./AdminAddCSThes";



function App() {
  return (
    <Router>
      <Routes>
        {/* Admin */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="admin/ip-registered/IT-cap" element={<AdminViewITipr />} />
        <Route path="admin/ip-registered/IS-cap" element={<AdminViewISipr />} />
        <Route path="admin/ip-registered/CS-thes" element={<AdminViewCSipr />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/admin/add-IT-Cap" element={<AdminAddITCap />} />
        <Route path="/admin/add-IS-Cap" element={<AdminAddISCap />} />
        <Route path="/admin/add-CS-Thes" element={<AdminAddCSThes />} />


        {/* Faculty */}
        <Route path="/faculty-login" element={<FacultyLogin />} />

        {/* Student */}
        <Route path="/" element={<StudentLogin />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/ip-registered/IT-cap" element={<StudentViewITipr />} />
        <Route path="/ip-registered/IS-cap" element={<StudentViewISipr/>} />
        <Route path="/ip-registered/CS-thes" element={<StudentViewCSipr/>} />
        <Route path="/student-home" element={<StudentHome />} />

        {/* General */}
        <Route path="/password-recovery" element={<PasswordRecovery />} />

      </Routes>
    </Router>
  );
}

export default App;
