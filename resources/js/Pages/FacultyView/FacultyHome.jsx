import React, { useState } from "react";
import "../../../css/AdminView/AdminHome.css"; // Include your custom styles here
import FacultySidebar from "./FacultySidebar.jsx";
import Header from "../General/Header";
import Footer from "../General/Footer";

const FacultyHome = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleExpand = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="admin-home">
      <Header />
      <div className="content-container">
        <FacultySidebar />
        <main className="main-content">
          <h1 className="text-white font-bold ml-8">Homepage</h1>

          {/* First row of info boxes */}
          <div className="info-section">
            <div className="info-box">
              <h2>
                <b>About UST</b>
              </h2>
              <p>
                The University of Santo Tomas (UST), established in 1611, is the
                oldest university in Asia and one of the world's largest
                Catholic universities, located in Manila, Philippines. Founded
                by Spanish friar Miguel de Benavides, UST is recognized as a
                Pontifical and Royal University, with titles granted by both the
                Spanish monarchy and the Catholic Church.
              </p>
              {expandedSections.ust && (
                <p>
                  The university offers over 180 undergraduate and graduate
                  programs, with several designated as Centers of Excellence by
                  the Commission on Higher Education (CHED). UST is home to 22
                  colleges, a teaching hospital, and historical structures
                  declared National Cultural Treasures.
                </p>
              )}
              <button
                className="read-more-button"
                onClick={() => toggleExpand("ust")}
              >
                {expandedSections.ust ? "Read Less" : "Read More"}
              </button>
            </div>
            <div className="info-box">
              <h2>
                <b>History</b>
              </h2>
              <p>
                The University of Santo Tomas (UST), founded on April 28, 1611,
                is the oldest university in Asia and the largest Catholic
                university in the world located on a single campus. Established
                by Bishop Miguel de Benavides, O.P., UST began as a
                seminary-college to prepare men for the priesthood, funded by a
                donation of 1,500 pesos and Benavides' personal library.
              </p>
              {expandedSections.history && (
                <p>
                  Originally named Colegio de Nuestra Señora del Santisimo
                  Rosario, it was later renamed in honor of St. Thomas Aquinas.
                  UST was authorized to grant degrees in theology and philosophy
                  in 1619 and was elevated to university status by Pope Innocent
                  X in 1645.
                </p>
              )}
              <button
                className="read-more-button"
                onClick={() => toggleExpand("history")}
              >
                {expandedSections.history ? "Read Less" : "Read More"}
              </button>
            </div>
            <div className="info-box">
              <h2>
                <b>About CICS</b>
              </h2>
              <p>
                The College of Information and Computing Sciences (CICS) is a
                hub of technological innovation and academic excellence,
                offering comprehensive programs designed to equip students with
                advanced skills in the fields of Information Technology,
                Information Systems, and Computer Science.
              </p>
              {expandedSections.cics && (
                <p>
                  Established as a dynamic learning environment, CICS aims to
                  meet the demands of the evolving tech landscape by offering
                  specialized tracks across its programs. Through its diverse
                  programs and industry-aligned curriculum, CICS nurtures
                  students to become future leaders and innovators in the IT
                  field.
                </p>
              )}
              <button
                className="read-more-button"
                onClick={() => toggleExpand("cics")}
              >
                {expandedSections.cics ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>

          {/* Second row of info boxes (for CS and IT) */}
          <div className="info-section">
            <div className="info-box">
              <h2>
                <b>About CS</b>
              </h2>
              <p>
                Bachelor of Science in Computer Science (BSCS) is a four-year
                program that includes the study of computing concepts and
                theories, algorithmic foundations, and new developments in
                computing.
              </p>
              {expandedSections.cs && (
                <p>
                  The program prepares its students to design and create
                  algorithmically complex software and develop new and effective
                  algorithms for solving computing problems. The program
                  includes the study of the standards and practices in Software
                  Engineering.
                </p>
              )}
              <button
                className="read-more-button"
                onClick={() => toggleExpand("cs")}
              >
                {expandedSections.cs ? "Read Less" : "Read More"}
              </button>
            </div>
            <div className="info-box">
              <h2>
                <b>About IS</b>
              </h2>
              <p>
                The Bachelor of Science in Information Systems (BSIS) program
                prepares students to design, develop, and manage information
                systems that meet the needs of various organizations.
              </p>
              {expandedSections.is && (
                <p>
                  It offers elective tracks in Business Analytics and Service
                  Management to equip students with both the technical and
                  management skills needed in today's data-driven economy.
                </p>
              )}
              <button
                className="read-more-button"
                onClick={() => toggleExpand("is")}
              >
                {expandedSections.is ? "Read Less" : "Read More"}
              </button>
            </div>
            <div className="info-box">
              <h2>
                <b>About IT</b>
              </h2>
              <p>
                The Bachelor of Science in Information Technology (BSIT) program
                provides students with the skills to design, manage, and secure
                IT infrastructures.
              </p>
              {expandedSections.it && (
                <p>
                  The program includes professional elective tracks such as
                  Network and Security, Web and Mobile App Development, and IT
                  Automation, aimed at producing globally competitive IT
                  professionals.
                </p>
              )}
              <button
                className="read-more-button"
                onClick={() => toggleExpand("it")}
              >
                {expandedSections.it ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default FacultyHome;
