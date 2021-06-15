import React from "react";
import "../styles/Skills.css";
import { SiPostgresql, SiJavascript, SiCss3, SiSass } from "react-icons/si";
import { FaReact, FaNodeJs, FaHtml5, FaGithub } from "react-icons/fa";
import { ExpressIcon, KnexIcon } from "../images/SVG";
import { palette } from "../palette";

export default function Skills() {
  return (
    <>
      <h5 className="skills-header mb-3">git checkout my-skills</h5>
      <div className="row skills-container">
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
            <ExpressIcon stroke={palette.cultured} fill={palette.cultured} />
            <span className="ml-2 skill-logo">Express.js</span>
          </li>
          <li>
            <FaReact
              style={{ color: palette.skyBlueCrayola }}
              className="mr-2 skill-logo"
            />{" "}
            React.js
          </li>
          <li>
            <FaNodeJs style={{ color: "#7bd474" }} className="mr-2 skill-logo" />{" "}
            Node.js
          </li>
        </ul>
        <ul className="col-6 skills">
          <li>
            <KnexIcon /> <span className="ml-2 skill-logo">Knex.js</span>
          </li>
          <li>
            <FaHtml5 style={{ color: "#f56025" }} className="mr-2 skill-logo" />
            HTML5
          </li>
          <li>
            <SiCss3 style={{ color: "#2c99f2" }} className="mr-2 skill-logo" /> CSS3
          </li>
          <li>
            <SiSass style={{ color: "#cc6699" }} className="mr-2 skill-logo" />
            SASS
          </li>
          <li>
            <FaGithub
              style={{ color: palette.cultured }}
              className="mr-2 skill-logo"
            />{" "}
            Git/GitHub
          </li>
        </ul>
      </div>
    </>
  );
}
