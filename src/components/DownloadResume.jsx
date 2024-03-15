import React from "react";
import { palette } from "../util/palette";
import { ImDownload } from "react-icons/im";
import "./DownloadButton.scss";
import resume from "../img/01-Austin-Jones-Resume.pdf";

export const DownloadResume = (props) => (
  <a
    href={resume}
    className={`${props.margin} resume-link`}
    style={{ color: palette.ultraViolet, textDecoration: "none" }}
    download="01-Austin-Jones-Resume.pdf"
  >
    <span className="row">
      <ImDownload id="dwnld-btn" style={{ fontSize: "32px" }} />{" "}
    </span>
    <span className="row resume-link-text">Resume</span>
  </a>
);
