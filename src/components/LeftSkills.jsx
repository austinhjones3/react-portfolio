import React from "react";
import { SiDotnet, SiGoland, SiJavascript, SiOpenai } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { palette } from "../util/palette";

export const LeftSkills = () => {
  return (
    <ul className="col-6 skills">
      <li>
        <SiDotnet style={{color: palette.ultraViolet}} className="mr-2 skill-logo"/>
        <span className="ml-1">C#|.NET</span>
      </li>
      <li>
        <SiGoland style={{color: "#01aeda"}} className="mr-2 skill-logo"/>
        <span className="ml-1">Golang</span>
      </li>
      <li>
        <SiJavascript style={{color: "#f7df1e"}} className="mr-2 skill-logo"/>
        <span className="ml-1">JavaScript</span>
      </li>
      <li>
        <FaJava style={{color: "aquamarine"}} className="mr-2 skill-logo"/>
        <span className="ml-1">Java|Spring</span>
      </li>
      <li>
        <SiOpenai style={{color: palette.cultured}} className="mr-2 skill-logo"/>
        <span className="ml-1">AI Prompting</span>
      </li>
    </ul>
  );
}
