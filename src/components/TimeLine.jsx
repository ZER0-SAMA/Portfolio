import React, { useState } from "react";
import "./TimeLine.css";
export default function TimeLine({ data }) {
  const [dir, setDir] = useState(true);
  return (
    <div className={"timeline-container"}>
      <div class="timeline">
        {data.map((val) => {
          return (
            <div class={`container ${dir ? "right" : "left"}`}>
              <div class="content">
                <h1>{val.company}</h1>
                <h2>
                  {val.joining_year}-{val.leaving_year}
                </h2>
                <ul>
                  {val["work_exp"].map((e) => {
                    return <li>{e}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
