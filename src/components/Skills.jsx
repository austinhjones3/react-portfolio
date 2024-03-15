import React from "react";
import { SiDotnet, SiGoland, SiJavascript, SiOpenai, SiPostgresql } from "react-icons/si";
import { palette } from "../util/palette";
import { FaAngular, FaJava } from "react-icons/fa6";
import { FaNodeJs, FaReact, FaTerminal } from "react-icons/fa";

export const Skills = () => {
  return (
    <>
      <h5 className="skills-header mb-3">$ git checkout my-skills</h5>
      <div className="row skills-container">
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
            <FaJava style={{color: "aquamarine"}} className="mr-2 skill-logo"/>
            <span className="ml-1">Java|Spring</span>
          </li>
          <li>
            <SiPostgresql style={{color: "#73a7c9"}} className="mr-2 skill-logo"/>
            <span className="ml-1">SQL</span>
          </li>
          <li>
            <FaTerminal
              style={{color: palette.cultured}}
              className="mr-2 skill-logo"
            />
            <span className="ml-1">Pwsh|Bash</span>
          </li>
        </ul>
        <ul className="col-6 skills">
          <li>
            <SiOpenai style={{color: palette.cultured}} className="mr-2 skill-logo"/>
            <span className="ml-1">AI Prompting</span>
          </li>
          <li>
            <SiJavascript style={{color: "#f7df1e"}} className="mr-2 skill-logo"/>
            <span className="ml-1">JavaScript</span>
          </li>
          <li>
            <FaReact
              style={{color: "#159fca"}}
              className="mr-2 skill-logo App-logo"
            />
            <span className="ml-1">React</span>
          </li>
          <li>
            <FaAngular style={{color: "orange"}} className="mr-2 skill-logo"/>
            <span className="ml-1">Angular</span>
          </li>
          <li>
            <FaNodeJs style={{color: "#7bd474"}} className="mr-2 skill-logo"/>
            <span className="ml-1">Node</span>
          </li>
        </ul>
      </div>
    </>
  );
}
