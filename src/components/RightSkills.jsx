import React from "react";
import { palette } from "../util/palette";
import { FaNodeJs, FaReact, FaTerminal } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { FaAngular } from "react-icons/fa6";

export const RightSkills = () => {
  return (
    <ul className="col-6 skills">
      <li>
        <SiPostgresql style={{color: "#73a7c9"}} className="mr-2 skill-logo"/>
        <span className="ml-1">SQL</span>
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
      <li>
        <FaTerminal
          style={{color: palette.cultured}}
          className="mr-2 skill-logo"
        />
        <span className="ml-1">Pwsh|Bash</span>
      </li>
    </ul>
  );
}
