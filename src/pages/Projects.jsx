import React from "react";
import "../styles/Projects.css";
import SingleProject from "../components/SingleProject";
import periodicTablesPic from "../images/periodic-tables-pic.png";
export default function Projects() {
  const githubDefault = "https://github.com/austinhjones3/";
  const makeProject = (id, img, name, desc, tech, date, repo, prod) => ({
    id,
    img,
    name,
    desc,
    tech,
    date,
    repo,
    prod,
  });
  const projects = [
    makeProject(
      "periodic-tables",
      periodicTablesPic,
      "Restaurant Reservation System, Periodic Tables",
      "desc",
      "JavaScript ES6, PostgreSQL, Knex.js, Express.js, React.js, Node.js, Bootstrap, CSS3",
      "6/8/2021",
      `${githubDefault}periodic-tables`,
      "https://periodic-tables.vercel.app/dashboard"
    ),
  ];
  return (
    <>
      {projects.map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </>
  );
}
