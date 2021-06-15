import React from "react";
import "../styles/Resume.css";
import { ImDownload } from "react-icons/im";
import resumeImg from "../images/austin-jones-resume.jpg";

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="row">
        <center className="col-12">
          <a
            href="./austin-jones-resume.pdf"
            class="btn mt-4 text-center download-resume  mx-auto"
            download
          >
            <ImDownload /> Download Resume
          </a>
        </center>
        <img src={resumeImg} alt="my resume!" className="mx-auto mt-4" />
      </div>
    </div>
  );
}
