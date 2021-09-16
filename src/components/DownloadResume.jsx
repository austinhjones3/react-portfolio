import React, { Component } from "react";
import { palette } from "../styles/palette";
import { ImDownload } from "react-icons/im";
import "../styles/DownloadButton.css";
import resume from "../images/austin-jones-cv.pdf";

export default class DownloadResume extends Component {
  render() {
    return (
      <a
        href={resume}
        className={`${this.props.margin} resume-link`}
        style={{ color: palette.cultured, textDecoration: "none" }}
        download="austin-jones-resume.pdf"
      >
        <span className="row">
          <ImDownload id="dwnld-btn" style={{ fontSize: "32px" }} />{" "}
        </span>
        <span className="row">Resume</span>
      </a>
    );
  }
}
