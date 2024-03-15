/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSideClick } from "../hooks/useSideClick";
import { MenuContext } from "../hooks/context";
import { useForm } from "@formspree/react";
import { ErrorAlert } from "../components/ErrorAlert";
import { GiCheckMark } from "react-icons/gi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { palette } from "../util/palette";
import { DownloadResume } from "../components/DownloadResume";

export const Contact = () => {
  const [state, sendResponse] = useForm("xleoyjpn");
  const [error, setError] = useState(null);
  const history = useHistory();
  const context = useContext(MenuContext);
  const handleSideClick = useSideClick(context);

  useEffect(processRequest, [state.succeeded, state.errors]);
  function processRequest() {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        history.push("/");
      }, 3500);
      return () => clearTimeout(timer);
    } else if (state.errors) {
      setError(() => new Error(state.errors[0].message));
    }
  }

  function handleButtonClick(event) {
    setError(() => null);
    context.menuIsOpen && handleSideClick();
    event.target.nodeName === "FORM" ? sendResponse(event) : history.goBack();
  }

  return state.succeeded ? (
    <div id="contact-success" className="mt-5">
      <h1>
        <GiCheckMark id="check" />
        <br />
        Your message was received. Thank you!
      </h1>
    </div>
  ) : (
    <div className="contact">
      <center>
        <h3 id="contact-header" className="section-header mt-2">
          Contact Me!
        </h3>
        <div className="mt-3 mb-2 row d-flex justify-content-center">
          <Link
            to={{ pathname: "https://linkedin.com/in/austinjonesdev/" }}
            target="_blank"
            className="mr-3"
          >
            <FaLinkedin style={{ fontSize: "50px", color: palette.hanBlue }} />
          </Link>
          <Link
            to={{ pathname: "https://github.com/austinjones31" }}
            target="_blank"
            className="mr-3"
          >
            <FaGithub style={{ fontSize: "50px", color: palette.cultured }} />
          </Link>
          <DownloadResume margin="ml-3" />
        </div>
        {error ? (
          <ErrorAlert error={error} />
        ) : (
          <h5>Fill out the form, or email me at austinhjones3@gmail.com</h5>
        )}
        <form onSubmit={handleButtonClick} className="w-100" id="contact-form">
          <div className="mb-1">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="input"
              name="name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Jane Appleseed"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              name="message"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Your message for me."
            ></textarea>
          </div>
          <button className="btn contact-submit" type="submit">
            Submit
          </button>
          <button
            className="btn ml-2 contact-cancel"
            onClick={handleButtonClick}
            type="button"
          >
            Cancel
          </button>
        </form>
      </center>
    </div>
  );
}
