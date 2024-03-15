import React from "react";
import { Link } from "react-router-dom";
import { palette } from "../util/palette";
export const Intro = () => {
  return (
    <div className="text-container">
      <span className="intro-text">
        I am a Full Stack Developer from New Orleans, LA specializing in the
        PostgreSQL, Express.js, React.js, and Node.js (PERN) stack. I recently
        graduated Thinkful's Engineering Immersion Bootcamp after completing a
        full-stack application: a{" "}
        <Link style={{ color: palette.hanBlue }} to="/projects#periodic-tables">
          Restaurant Reservation System called Periodic Tables.
        </Link>{" "}
        While I am confident across all facets of developing a web application, I
        really enjoy writing in React.js and working on the front-end in general. I
        believe my talents, commitment to teamwork, personability, and work-ethic
        would have an immediate positive impact on any engineering team.
      </span>
    </div>
  );
}
