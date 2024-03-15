import React from "react";
import "./Projects.scss";
import { SingleProject } from "../components/SingleProject";
import periodicTablesPic from "../img/periodic-tables-pic.png";
import algoSpeedPic from "../img/algo-speed-pic.png";
import weLoveMoviesPic from "../img/welovemovies-pic.png";
import flashcardPic from "../img/flashcard-pic.png";

export const Projects = () => {
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
      "The restaurant reservation system, affectionately named Periodic Tables, is a reservation and table management tool for restaurants. The user, a restaurant worker or manager, is able to create reservations, edit reservation details, and affect the status of reservations by seating the reservation at a table or by canceling the reservation. In turn, the table they are placed at becomes unavailable in the system until the reservation is finished. The user is also able to create new tables to keep the layout of the restaurant up-to-date. The user is also able to affect the view of the reservations data on the dashboard by selecting which day's reservations to view. Lastly, the user is able to search all of the reservations, regardless of the reservation's status, by mobile phone number.",
      "JavaScript ES6, PostgreSQL, Knex.js, Express.js, React.js, Node.js, Bootstrap, CSS3",
      "6/8/2021",
      `${githubDefault}periodic-tables`,
      "https://periodic-tables.vercel.app/dashboard"
    ),
    makeProject(
      "algo-speedometer",
      algoSpeedPic,
      "Algo Speedometer",
      "After a deep dive into data structures and algorithms, I wanted to apply my knowledge of time complexity and Big O Notation to start timing my algorithms in milliseconds/seconds. So, I built a tool to do so. The user is able to clone the project and input their algorithms in the algo1 and algo2 files to time their algorithms side by side. By default, faker.js and a script to load in as many sentences (data points) as the user wants is provided. The user is able to edit the loadData file to fit their data needs for the algorithms they are comparing. However, if an array of sentences is sufficent for their purposes, the user can run npm start along with two arguments representing the number of times to run both algorithms, and the number of data points for the algorithms to iterate over, like so: npm start 100 100000. The terminal will spit back out a small table to report the average time each algorithm took to work through the data.",
      "Node.js",
      "5/13/2021",
      `${githubDefault}algo-speedometer`
    ),
    makeProject(
      "we-love-movies",
      weLoveMoviesPic,
      "WeLoveMovies",
      "The WeLoveMovies API is an Express and Node REST API built alongside Knex and PostgreSQL. This API was built with a React App frontend that was provided by Thinkful in mind. The user is able to access lists of movies based on whether they are currently showing in theaters or not. The user can also access reviews for a specified movie. If the user wants to know more about a specific review, they can access that review alone. The user is also able to update or delete reviews, if they have the specified permissions to do so. The user is also able to view a list of theaters and the movies they are showing. If the user wants to see which theaters are showing a certain movie, they are allowed to search by that parameter as well.",
      "PostgreSQL, Knex.js, Express.js, Node.js",
      "4/19/2021",
      `${githubDefault}we-love-movies`
    ),
    makeProject(
      "flashcard-o-matic",
      flashcardPic,
      "Flashcard-O-Matic",
      "Flashcard-O-Matic is a flashcards studying tool. The user is able to create, edit, and delete decks and their cards. The user is also able to study the cards one at a time. The user must view the cards one side at a time, one card at a time in order to ensure the best studying experience possible. ",
      "JavaScript ES6, React.js, Bootstrap",
      "3/28/21",
      `${githubDefault}flashcard-o-matic`
    ),
  ];
  return (
    <>
      <center>
        <h2 className="section-header">My Projects</h2>
      </center>
      <div className="d-flex row justify-content-center">
        {projects.map((project) => (
          <SingleProject key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
