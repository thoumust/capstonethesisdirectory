import React, { useState } from "react";
import "../../../css/StudentView/StudentHome.css";
import StudentSidebar from "./StudentSidebar";
import Header from "../../General/Header";
import Footer from "../../General/Footer";

const StudentHome = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isIPDropdownOpen, setIsIPDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleIPDropdown = () => {
    setIsIPDropdownOpen(!isIPDropdownOpen);
  };

  return (
    <div className="admin-home">
      <Header />
      <div className="content-container">
        <StudentSidebar />
        <main className="main-content">
          <h1>Homepage</h1>

          {/* First row of info boxes */}
          <div className="info-section">
            <div className="info-box">
              <h2>About UST</h2>
              <p>
                The University of Santo Tomas (UST), established in 1611, is the
                oldest university in Asia and one of the world's largest
                Catholic universities, located in Manila, Philippines. Founded
                by Spanish friar Miguel de Benavides, UST is recognized as a
                Pontifical and Royal University, with titles granted by both the
                Spanish monarchy and the Catholic Church. The university offers
                over 180 undergraduate and graduate programs, with several
                designated as Centers of Excellence by the Commission on Higher
                Education (CHED). UST is home to 22 colleges, a teaching
                hospital, and historical structures declared National Cultural
                Treasures.
              </p>
            </div>
            <div className="info-box">
              <h2>History</h2>
              <p>
                The University of Santo Tomas (UST), founded on April 28, 1611,
                is the oldest university in Asia and the largest Catholic
                university in the world located on a single campus. Established
                by Bishop Miguel de Benavides, O.P., UST began as a
                seminary-college to prepare men for the priesthood, funded by a
                donation of 1,500 pesos and Benavides' personal library.
                Originally named Colegio de Nuestra Señora del Santisimo
                Rosario, it was later renamed in honor of St. Thomas Aquinas.
                UST was authorized to grant degrees in theology and philosophy
                in 1619 and was elevated to university status by Pope Innocent X
                in 1645.
              </p>
            </div>
            <div className="info-box">
              <h2>About CICS</h2>
              <p>
                The College of Information and Computing Sciences (CICS) is a
                hub of technological innovation and academic excellence,
                offering comprehensive programs designed to equip students with
                advanced skills in the fields of Information Technology,
                Information Systems, and Computer Science. Established as a
                dynamic learning environment, CICS aims to meet the demands of
                the evolving tech landscape by offering specialized tracks
                across its programs. Through its diverse programs and
                industry-aligned curriculum, CICS nurtures students to become
                future leaders and innovators in the IT field.
              </p>
            </div>
          </div>

          {/* Second row of info boxes (for CS and IT) */}
          <div className="info-section">
            <div className="info-box">
              <h2>About CS</h2>
              <p>
                Bachelor of Science in Computer Science (BSCS) is a four-year
                program that includes the study of computing concepts and
                theories, algorithmic foundations, and new developments in
                computing. The program prepares its students to design and
                create algorithmically complex software and develop new and
                effective algorithms for solving computing problems. The program
                includes the study of the standards and practices in Software
                Engineering.
              </p>
            </div>
            <div className="info-box">
              <h2>About IS</h2>
              <p>
                The Bachelor of Science in Information Systems (BSIS) program
                prepares students to design, develop, and manage information
                systems that meet the needs of various organizations. It offers
                elective tracks in Business Analytics and Service Management to
                equip students with both the technical and management skills
                needed in today's data-driven economy.
              </p>
            </div>
            <div className="info-box">
              <h2>About IT</h2>
              <p>
                The Bachelor of Science in Information Technology (BSIT) program
                provides students with the skills to design, manage, and secure
                IT infrastructures. The program includes professional elective
                tracks such as Network and Security, Web and Mobile App
                Development, and IT Automation, aimed at producing globally
                competitive IT professionals.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default StudentHome;
