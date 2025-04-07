import React, { useState } from "react";
import Peer from "../assets/peer2.png";
import "./Projects.css";
export default function Projects() {
  const [activeCard, setActiveCard] = useState(false);
  const projects = [{ title: "Random Friend", url: "", gitHub: "" }];

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
              <p style={{ color: "black", opacity: "100%", fontSize: "large" }}>
                Built a 1-on-1 video chat platform using WebRTC and Socket.io
                for real-time communication and instant matchmaking. Designed a
                responsive React.js frontend with Figma, enabling smooth user
                interactions and fast, random pairing in under 2 seconds.
              </p>
              <button
                style={{ borderRadius: "5px", width: "150px", outline: "none" }}
              >
                Try Now
              </button>
            </div>
            <div className="project-icon">
              <h1>Random Friend</h1>
              <img src={Peer} alt={"RandomChat"} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
