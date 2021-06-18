import React, { Component } from "react";
import portrait from "../images/austin-portrait.jpg";

export default class AboutPortrait extends Component {
  render() {
    return (
      <>
        <span className="text-center">
          <h4 id="about-header">Who is Austin Jones?</h4>
        </span>
        <img src={portrait} alt="My Face!" className="w-75" id="portrait" />
        <span className="text-center">
          <h6 className="mt-2">This is my face.</h6>
        </span>
      </>
    );
  }
}
