import React, { Component } from "react";

export default class SectionAboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <>
        <span className="text-center">
          <h4 className="section-header">{this.state.question}</h4>
        </span>
        <div className=" d-flex justify-content-center">
          <this.state.icon className="about-icon" />
        </div>
        <div className="text-container">
          <span className="about-text">{this.state.answer}</span>
        </div>
      </>
    );
  }
}
