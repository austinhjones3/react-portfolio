import React, { Component } from "react";
import portrait from "../images/austin-portrait.jpg";

export default class AboutPortrait extends Component {
  render() {
    return (
      <>
        <span className="text-center">
          <h4 id="about-header">Who is Austin Jones?</h4>
        </span>
        <img src={portrait} alt="This is my face." className="w-75" id="portrait" />
        <div className="text-center text-container">
          <h6 className="mt-2 about-text">This is my face.</h6>
        </div>
      </>
    );
  }
}
