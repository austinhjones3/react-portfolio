import React from "react";
import "../styles/About.css";
import AboutPortrait from "../components/AboutPortrait";
import Intro from "../components/Intro";
import SectionAboutMe from "../components/SectionAboutMe";

export default function About() {
  const makeQA = (question, answer, icon) => ({ question, answer, icon });
  const questionsAndAnswers = [
    makeQA(
      "What am I doing?",
      "I am currently deepening my knowledge of React and JavaScript by reviewing my bootcamp's content and progressing through freeCodeCamp. After then, I plan on starting the designing and unit test building phase of my next project: A Full-Stack Healthcare Management Application. I plan on building this application with TypeScript, React, and either MongoDB/Mongoose/PostgreSQL/Knex paired with Node and Express, or ASP.NET Core and Azure. At this current moment, the user (a healthcare worker) will be able to manage and access a patient's information, appointments, medications, and other information. A patient portal is a prospective addition later on.",
      null
    ),
  ];
  return (
    <>
      <AboutPortrait />
      <Intro />
      {questionsAndAnswers.map(({ question, answer, icon }, idx) => (
        <SectionAboutMe key={idx} question={question} answer={answer} icon={icon} />
      ))}
    </>
  );
}
