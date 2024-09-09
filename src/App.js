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
import AdminITApproval from "./AdminITApproval";
import AdminISApproval from "./AdminISApproval";
import AdminCSApproval from "./AdminCSApproval";
import AdminFullDocu from "./AdminFullDocu";
import AdminApprovalForm from "./AdminApprovalForm";
import AdminBestIT from "./AdminBestIT";
import AdminBestIS from "./AdminBestIS";
import AdminBestCS from "./AdminBestCS";
import AdminManageRoles from "./AdminManageRoles";
import AdminEditCSThesis from "./AdminEditCSThesis";
import AdminEditISCap from "./AdminEditISCap";
import AdminEditITCap from "./AdminEditITCap";

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
        <Route path="/admin/edit-IS-Cap/:projectId" element={<AdminEditISCap />} />
        <Route path="/admin/edit-cs-thesis/:id" element={<AdminEditCSThesis />} />
        <Route path="/admin/edit-IT-Cap/:projectId" element={<AdminEditITCap />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/admin/add-IT-Cap" element={<AdminAddITCap />} />
        <Route path="/admin/add-IS-Cap" element={<AdminAddISCap />} />
        <Route path="/admin/add-CS-Thes" element={<AdminAddCSThes />} />
        <Route path="/admin/approval-IT" element={<AdminITApproval />} />
        <Route path="/admin/approval-IS" element={<AdminISApproval />} />
        <Route path="/admin/approval-CS" element={<AdminCSApproval />} />
        <Route path="/admin/full-document" element={<AdminFullDocu/>}/>
        <Route path="/admin/approval-form" element={<AdminApprovalForm/>}/>
        <Route path="/admin/BestIT" element={<AdminBestIT/>}/>
        <Route path="/admin/BestIS" element={<AdminBestIS/>}/>
        <Route path="/admin/BestCS" element={<AdminBestCS/>}/>
        <Route path="/admin/roles" element={<AdminManageRoles/>}/>


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
