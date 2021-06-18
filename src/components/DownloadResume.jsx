import React, { Component } from "react";
import { palette } from "../styles/palette";
import { ImDownload } from "react-icons/im";
import "../styles/DownloadButton.css";

export default class DownloadResume extends Component {
  constructor(props) {
    super(props);
    this.state = { margin: props.margin };
  }
  render() {
    return (
      <a
        href="../images/austin-jones-resume.pdf"
        className={`${this.state.margin} resume-link`}
        style={{ color: palette.cultured, textDecoration: "none" }}
        download
      >
        <span className="row">
          <ImDownload id="dwnld-btn" style={{ fontSize: "32px" }} />{" "}
        </span>
        <span className="row">Resume</span>
      </a>
    );
  }
}
