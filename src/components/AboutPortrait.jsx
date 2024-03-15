import React from "react";
import portrait from "../img/austin-portrait.jpg";
import { DownloadResume } from "./DownloadResume";

export const AboutPortrait = () => {
  return (
    <>
      <span className="text-center">
        <h4 id="about-header">Who is Austin Jones?</h4>
      </span>
      <img src={portrait} alt="This is my face." className="w-75" id="portrait" />
      <div className="text-center text-container">
        <h6 className="mt-2 about-text">This is my face.</h6>
      </div>
      <div className="d-flex mb-1 justify-content-center">
        <DownloadResume />
      </div>
    </>
  );
}
