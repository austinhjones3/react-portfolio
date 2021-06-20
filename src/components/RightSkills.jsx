import React, { Component } from "react";
import { palette } from "../styles/palette";
import { FaHtml5, FaGithub } from "react-icons/fa";
import { SiCss3, SiSass } from "react-icons/si";
import { KnexIcon } from "../images/SVG";

export default class RightSkills extends Component {
  render() {
    return (
      <ul className="col-6 skills">
        <li>
          <KnexIcon className="skill-logo" />
          <span className="ml-1">Knex.js</span>
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
    );
  }
}
