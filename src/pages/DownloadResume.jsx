import React from "react";
import { palette } from "../styles/palette";
import { ImDownload } from "react-icons/im";
import "../styles/DownloadButton.css";

export default function DownloadResume({ margin }) {
  return (
    <a
      href="../images/austin-jones-resume.pdf"
      className={`${margin} resume-link`}
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
