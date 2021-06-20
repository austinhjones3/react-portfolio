import React, { Component } from "react";

export default class SectionAboutMe extends Component {
  render() {
    return (
      <>
        <div className="text-center">
          <h4 className="section-header">{this.props.question}</h4>
        </div>
        <div className=" d-flex justify-content-center">
          <this.props.icon className="about-icon" />
        </div>
        <div className="text-container mt-2">
          <div className="about-text">{this.props.answer}</div>
        </div>
      </>
    );
  }
}
