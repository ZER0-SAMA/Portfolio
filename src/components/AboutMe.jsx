import React, { useState, useEffect } from "react";
import "./AboutMe.css";
import Resume from "../assets/resume.pdf";
import portfolio_resume from "../assets/portfolio_resume.png";
// import FileViewer from "react-file-viewer";
import DocViewer from "react-doc-viewer";
export default function AboutMe() {
  const docs = [
    { uri: Resume }, // Local File
  ];
  // const url = URL.createObjectURL(Resume);
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    if (Resume instanceof Blob) {
      const url = URL.createObjectURL(Resume);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPreviewUrl(Resume);
    }
  }, []);
  return (
    <>
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-box-1">
          <div style={{ textAlign: "center" }}>
            <p id="aboutMe-content">
              I’m a Frontend Developer with 2 years of experience building
              dynamic and responsive web applications using React.js. Passionate
              about crafting intuitive user interfaces, I thrive on transforming
              design concepts into functional, pixel-perfect experiences.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ul className="card-collection">
              <li className="small-card">
                Developing high-performance web applications with smooth,
                engaging interactions.
              </li>
              <li className="small-card">
                Integrating RESTful APIs and optimizing frontend workflows for
                seamless user experiences.
              </li>
              <li className="small-card">
                Writing clean, maintainable code while following modern web
                development best practices.
              </li>
              <li className="small-card">
                Staying updated with the latest trends in frontend technologies
                to deliver cutting-edge solutions.
              </li>
            </ul>
          </div>
        </div>
        <div
          className="about-box-2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ padding: "20px" }}>
            <img
              src={portfolio_resume}
              alt="Preview"
              style={{
                maxWidth: "100%",

                // border: "1px solid black",
              }}
            />
          </div>
          <div
            className="resume"
            style={{
              width: "90%",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <a href={Resume} target="_blank">
              <button style={{ outline: "none" }} id="resume-btn">
                View
              </button>
            </a>
            <a href={Resume} download="Nikhi_Resume">
              <button style={{ outline: "none" }} id="resume-btn">
                Download
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
