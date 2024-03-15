import React from "react";

export const SectionAboutMe = (props) => {
  return (
    <>
      <div className="text-center">
        <h4 className="section-header">{props.question}</h4>
      </div>
      <div className=" d-flex justify-content-center">
        <props.icon className="about-icon" />
      </div>
      <div className="text-container mt-2">
        <div className="about-text">{props.answer}</div>
      </div>
    </>
  );
}
