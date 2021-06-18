import React, { Component } from "react";
import { palette } from "../styles/palette";
import { SiJavascript, SiPostgresql } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { ExpressIcon } from "../images/SVG";

export default class LeftSkills extends Component {
  render() {
    return (
      <ul className="col-6 skills">
        <li>
          <SiJavascript style={{ color: "#f7df1e" }} className="mr-2 skill-logo" />{" "}
          JavaScript
        </li>
        <li>
          <SiPostgresql style={{ color: "#73a7c9" }} className="mr-2 skill-logo" />{" "}
          PostgreSQL
        </li>
        <li>
          <ExpressIcon
            className="skill-logo"
            stroke={palette.cultured}
            fill={palette.cultured}
          />
          <span className="ml-2">Express.js</span>
        </li>
        <li>
          <FaReact
            style={{ color: palette.skyBlueCrayola }}
            className="mr-2 skill-logo App-logo"
          />{" "}
          React.js
        </li>
        <li>
          <FaNodeJs style={{ color: "#7bd474" }} className="mr-2 skill-logo" />{" "}
          Node.js
        </li>
      </ul>
    );
  }
}
