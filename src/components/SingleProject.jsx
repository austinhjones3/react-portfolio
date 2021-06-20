import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SingleProject extends Component {
  render() {
    const project = this.props.project;
    return (
      <div id={project.id} className="project card mt-3">
        <img className="card-img-top" src={project.img} alt={project.name} />
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.desc}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="project list-group-item">{project.tech}</li>
          <li className="project list-group-item">Completed: {project.date}</li>
        </ul>
        <div className="card-body">
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
        </div>
      </div>
    );
  }
}
