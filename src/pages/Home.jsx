import React from "react";
import "../styles/Home.css";
import { palette } from "../palette";
import Skills from "./Skills";

export default function Home() {
  // write media query
  return (
    <>
      <div className="row">
        <div className="col-1 col-md-3"> </div>
        <div className="col-10 col-md-6">
          <h3 className="home-messages mt-4" align="center">
            Greetings from the Code Offices of Austin Henry Jones!
            <br />
          </h3>
        </div>
        <div className="col-1 col-md-3"> </div>
      </div>
      <div className="row mt-3">
        <div align="center" className=" mx-auto ml-2 col-lg-5 col-12">
          <Skills />
        </div>
        <div align="center" className="mx-auto col-lg-7 col-12">
          <p className="pitch mt-3">
            From building REST API's, to React Single Page Applications, or general
            JavaScript problems and programs, I'm the person for the job.
          </p>
        </div>
      </div>
    </>
  );
}
