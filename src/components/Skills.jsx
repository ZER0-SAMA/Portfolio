// import React from "react";

// export default function Skills() {
//   return (
//     <>
//       <h2>My Skills</h2>
//       <div className="skills-list">
//         {["HTML", "CSS", "JavaScript", "React"].map((skill) => (
//           <div key={skill} className="skill-item">
//             {skill}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
import bootstrapicon from "../assets/bootstrap.png";
import cplus from "../assets/cplus.png";
import cssicon from "../assets/css.png";
import dockericon from "../assets/docker.png";
import exicon from "../assets/ex.png";
import figmaicon from "../assets/figma.png";
import htmlicon from "../assets/html.png";
import jsicon from "../assets/js.png";
import mongoicon from "../assets/mongo.png";
import reactjsicon from "../assets/react.png";
import reduxicon from "../assets/redux.png";
import sassicon from "../assets/sass.png";
import giticon from "../assets/git.png";
import nodeicon from "../assets/nodejs.png";
import mysqlicon from "../assets/mysql.png";
import { useState, useEffect, useCallback } from "react";
import "./Skills.css";
const category = ["Frontend", "Backend", "Programming Langauge", "Others"];
const items = [
  { development: "Frontend", Tech: "React JS", Logo: reactjsicon },
  { development: "Frontend", Tech: "Redux", Logo: reduxicon },
  { development: "Frontend", Tech: "CSS", Logo: cssicon },
  { development: "Frontend", Tech: "HTML", Logo: htmlicon },
  { development: "Frontend", Tech: "Figma", Logo: figmaicon },
  { development: "Frontend", Tech: "BootStrap", Logo: bootstrapicon },
  { development: "Frontend", Tech: "Sass", Logo: sassicon },
  { development: "Backend", Tech: "NodeJS", Logo: nodeicon },
  { development: "Backend", Tech: "Express", Logo: exicon },
  { development: "DataBase", Tech: "MySql", Logo: mysqlicon },
  { development: "DataBase", Tech: "MongoDB", Logo: mongoicon },
  { development: "Others", Tech: "Git", Logo: giticon },
  { development: "Others", Tech: "Docker", Logo: dockericon },
  { development: "Programming Langauge", Tech: "C++", Logo: cplus },
  { development: "Programming Langauge", Tech: "JS", Logo: jsicon },
];

export default function Skills() {
  const [filterCategory, setFilterCategory] = useState([]);
  const [filterItems, setFilterItems] = useState(items);
  // const [searachItem, setSearchItem] = useState("");
  const filteritemsfunc = useCallback(() => {
    if (filterCategory.length !== category && filterCategory.length !== 0) {
      const allfilteritems = filterCategory.map((i) => {
        const filter = items.filter((e) => e.development === i);
        return filter.flat();
      });

      setFilterItems(allfilteritems.flat()); //2d array to 1
    } else {
      setFilterItems(items);
    }
  }, [filterCategory]);
  useEffect(() => {
    filteritemsfunc();
  }, [filteritemsfunc]);

  // const clickStyleFunc = (name) => {
  //   const element = document.getElementById(name);
  //   element.style.outline = "none";
  //   // element.style = {
  //   //   background: "yellow",
  //   // };
  // };
  const handleClick = (e) => {
    // clickStyleFunc("cat-btn");
    if (category.length !== filterCategory && !filterCategory.includes(e)) {
      setFilterCategory([...filterCategory, e]);
    } else if (filterCategory.includes(e)) {
      setFilterCategory(filterCategory.filter((value) => value !== e));
    }
  };

  return (
    <div className="filter-container">
      {/* <div>
        <input
          className="search-bar"
          value={searachItem}
          placeholder="Search..."
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
      </div> */}

      <div className="options-bar">
        {category.map((e) => {
          return (
            <div
              className={`category-btn${
                filterCategory?.includes(e) ? "active" : ""
              }`}
              key={e}
              onClick={() => handleClick(e)}
            >
              <button id="cat-btn" onClick={() => handleClick(e)}>
                {e}
              </button>
            </div>
          );
        })}
      </div>
      {/* {console.log(filterItems)} */}
      {/* {console.log(typeof null)}
      {console.log(typeof undefined)} */}
      <div className="options-items-selected">
        {filterItems.map(({ development, Tech, Logo }) => {
          return (
            <div className={"item-card"} key={Tech}>
              <div className={"item-card-brand-heading"}>{Tech}</div>
              {/* <div className={"item-card-brand"}>{brand}</div> */}
              <div className={"item-card-Logo"}>
                <img src={Logo} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
