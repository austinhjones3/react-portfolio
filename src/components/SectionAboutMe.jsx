import React, { Component } from "react";

export default class SectionAboutMe extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <>
        <span className="text-center">
          <h4 className="section-header">{this.props.question}</h4>
        </span>
        <div className=" d-flex justify-content-center">
          <this.props.icon className="about-icon" />
        </div>
        <div className="text-container mt-2">
          <span className="about-text">{this.props.answer}</span>
        </div>
      </>
    );
  }
}
