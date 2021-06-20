import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SingleProject extends Component {
  render() {
    const project = this.props.project;
    return (
      <div id={project.id} className="project card mt-3 col-12">
        <img className="card-img-top" src={project.img} alt={project.name} />

        <h5 className="card-title ml-3 mt-3">{project.name}</h5>
        <ul className="list-group list-group-flush">
          <li className="project list-group-item">
            <strong>Tech Used: </strong>
            {project.tech}
          </li>
          <li className="project list-group-item">
            <strong>Completed: </strong>
            {project.date}
          </li>
          <li className="project list-group-item">
            <Link
              to={{ pathname: project.repo }}
              target="_blank"
              className="card-link"
            >
              Repository
            </Link>
            {project.prod && (
              <Link
                to={{ pathname: project.prod }}
                target="_blank"
                className="card-link"
              >
                Production
              </Link>
            )}
          </li>
        </ul>
        <div className="card-body">
          <p className="card-text">{project.desc}</p>
        </div>
      </div>
    );
  }
}
