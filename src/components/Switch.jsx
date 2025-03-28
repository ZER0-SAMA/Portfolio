import React, { useState } from "react";
import Dark from "../assets/DARK.png";
import Light from "../assets/LIGHT.png";
export default function Switch() {
  const [dark, setDark] = useState(true);
  return (
    <div className={"switch-box"}>
      <div
        className={dark ? "dark-switch" : "light-switch"}
        onClick={() => {
          setDark(!dark);
        }}
      >
        {dark ? (
          <img src={Dark} style={{ height: "100px", width: "100px" }} />
        ) : (
          <img src={Light} style={{ height: "80px", width: "80px" }} />
        )}
      </div>
    </div>
  );
}
