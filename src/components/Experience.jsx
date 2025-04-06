import React from "react";
import "./Experience.css";
import TimeLine from "./TimeLine";
export default function Experience() {
  const preWork = [
    {
      company: "Thoughts2Binary",
      joining_year: "2022",
      leaving_year: "2023",
      work_exp: [
        "Developed and fine-tuned 5+ scalable web applications using ReactJS, JavaScript, Redux, and RxJS, improving performance and ensuring maintainable, efficient code.",
        "Engineered responsive UIs using the Grommet design library, ensuring 100% cross-device compatibility for users.",
        "Documented 20+ detailed Low-level design (LLD) documents, outlining system architecture, component interactions, and workflows to facilitate clear understanding and smooth onboarding for developers.",
        "Led end-to-end development of an HR portal from the ground up, solving complex business challenges and deploying a functional prototype within 7 months that automated 3+ manual HR processes, reducing administrative workload by 60%.",
      ],
    },
  ];
  return (
    <>
      <div className={"work-box"}>
        <TimeLine data={preWork} />
      </div>
    </>
  );
}
