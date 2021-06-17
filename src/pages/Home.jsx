import React from "react";
import "../styles/Home.css";
import Skills from "./Skills";

export default function Home() {
  // write media query
  return (
    <>
      <div className="row">
        <div className="col-1 col-md-3"> </div>
        <div className="col-10 col-md-6">
          <h3 className="mt-3" id="home-greeting" align="center">
            Greetings from the Code Offices of Austin Henry Jones!
            <br />
          </h3>
        </div>
        <div className="col-1 col-md-3"> </div>
      </div>
      <div className="row mt-3">
        <div align="center" className=" mx-auto ml-2 col-12">
          <Skills />
        </div>
        <div align="center" className="mx-auto col-12">
          <p className="mt-3" id="home-pitch">
            From building REST API's, to React Single Page Applications, or managing
            a SQL database, I'm the person for the job.
          </p>
        </div>
      </div>
    </>
  );
}
