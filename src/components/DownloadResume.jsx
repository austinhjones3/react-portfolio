import React from "react";
import { palette } from "../util/palette";
import { ImDownload } from "react-icons/im";
import "./DownloadButton.css";
import resume from "../img/austin-jones-cv.pdf";

export const DownloadResume = () => (
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
