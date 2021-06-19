import React from "react";
import "../styles/About.css";
import AboutPortrait from "../components/AboutPortrait";
import Intro from "../components/Intro";
import SectionAboutMe from "../components/SectionAboutMe";
import { FaLaptopCode, FaTrophy } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";

export default function About() {
  const makeQA = (question, answer, icon) => ({ question, answer, icon });
  const questionsAndAnswers = [
    makeQA(
      "What am I doing?",
      "I am currently deepening my knowledge of JavaScript and the libaries I've learned by reviewing my bootcamp's content and progressing through freeCodeCamp. Soon, I will start the design and unit test building phase of my next project: A Full-Stack Healthcare Management Application. I plan on building this application with TypeScript, React, and either Node/Express or ASP.NET Core/Azure. At this current moment, the user (a healthcare worker) will be able to manage and access a patient's information and appointments. A patient portal is a prospective addition later on.",
      FaLaptopCode
    ),
    makeQA(
      "What are my goals?",
      "I plan on learning more and more constantly. In five years, I want to be five years better than I am today as a developer. In the short term, I want to learn as much about front-end JavaScript UI libraries as I possibly can. I am actively looking for a new challenge. A great, enriched company cultured is what I am really looking for from my next position. I am huge believer in collabortive, deeply-meshed, nurturing culture that empowers team members to learn and grow confidently each day. I also want to believe in my next company's mission. It would be awesome to not only be confident in the way I fulfill my company's needs, but also to feel attached to the mission. I want to work on products that I believe in.",
      GiStairsGoal
    ),
    makeQA(
      "What are my greatest accomplishments?",
      "As a Computer Science student at Southeastern Louisiana University, I was distinguished for my ability to grasp the material quickly and became a teaching assistant for my Java Algorithm Design and Implementation course. Years later, as a student in Thinkful's Engineering Immersion Program, I co-hosted a three-hour workshop on React.js and a particular project that a lot of my classmates were having trouble with. After a few days, it was clear that the workshop was a success. We received a ton of positive feedback about the session, and everyone soon passed the project and moved on to the next phase of the course. I learned a lot about myself from this. For one, I enjoy teaching. It is gratifying to help others and to know that you are impacting their life positively. And also, there is a lot to learn from teaching others. There is no better way to make sure you understand a concept than to try to teach it to someone else. I am definitely a believer in educating proactively and being receptive to education in return.",
      FaTrophy
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
