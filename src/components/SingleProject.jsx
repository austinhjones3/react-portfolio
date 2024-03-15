import React from "react";
import { Link } from "react-router-dom";

export const SingleProject = (props) => {
  return (
    <div id={props.project.id} className="project card mt-3 col-12">
      <img className="card-img-top" src={props.project.img} alt={props.project.name} />

      <h5 className="card-title ml-3 mt-3">{props.project.name}</h5>
      <ul className="list-group list-group-flush">
        <li className="project list-group-item">
          <strong>Tech Used: </strong>
          {props.project.tech}
        </li>
        <li className="project list-group-item">
          <strong>Completed: </strong>
          {props.project.date}
        </li>
        <li className="project list-group-item">
          <Link
            to={{ pathname: props.project.repo }}
            target="_blank"
            className="card-link"
          >
            Repository
          </Link>
          {props.project.prod && (
            <Link
              to={{ pathname: props.project.prod }}
              target="_blank"
              className="card-link"
            >
              Production
            </Link>
          )}
        </li>
      </ul>
      <div className="card-body">
        <p className="card-text">{props.project.desc}</p>
      </div>
    </div>
  );
}
