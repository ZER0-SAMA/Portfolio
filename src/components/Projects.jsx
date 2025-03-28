import React, { useState } from "react";
import Peer from "../assets/peer2.png";
import "./Projects.css";
export default function Projects() {
  const [activeCard, setActiveCard] = useState(false);
  const projects = [{ title: "RandomChat", url: "", gitHub: "" }];

  // const mouseHover = () => {
  //   console.log("MouseHover");
  //   // setActiveCard(true);
  //   document.getElementById("project-hover").style.display = "block";
  //   // document.getElementById("project-hover").style.height = "100%";
  //   //  {
  //   //   display: "visible",
  //   //   background: "red",
  //   // };
  // };
  return (
    <>
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(({ title, link, github }) => (
          <div
            key={title}
            className="project-card"
            // onMouseEnter={mouseHover}
            // onMouseLeave={() => {
            //   document.getElementById("project-hover").style.display = "none";
            // }}
          >
            <div className="project-hover one">
              <h3>Project {title}</h3>
              <p style={{ color: "red", opacity: "100%" }}>
                Description of project{" "}
              </p>
            </div>
            <div className="project-icon">
              <img src={Peer} alt={"RandomChat"} />
              <button>Try Now</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
