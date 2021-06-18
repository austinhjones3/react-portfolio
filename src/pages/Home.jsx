import React from "react";
import "../styles/Home.css";
import "../styles/Skills.css";
import Greeting from "../components/Greeting";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Greeting />
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
