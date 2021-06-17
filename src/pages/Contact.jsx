/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import "../styles/Contact.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useSideClick from "../layout/useSideClick";
import { MenuContext } from "../layout/context";
import { useForm } from "@formspree/react";
import ErrorAlert from "../layout/ErrorAlert";
import { GiCheckMark } from "react-icons/gi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { palette } from "../palette";

export default function Contact() {
  const [state, sendResponse] = useForm("xleoyjpn");
  const [error, setError] = useState(null);
  const history = useHistory();
  const context = useContext(MenuContext);
  const handleSideClick = useSideClick(context);

  useEffect(redirect, [state.succeeded, state.errors]);
  function redirect() {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        history.push("/");
      }, 3000);
      return () => clearTimeout(timer);
    } else if (state.errors.length) {
      setError(() => new Error(state.errors[0].message));
    }
  }

  function handleSubmit(event) {
    setError(() => null);
    context.menuIsOpen && handleSideClick();
    sendResponse(event);
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
        <h3 id="contact-header" className="mt-3">
          Contact Me!
        </h3>
        <div className="mt-1 mb-4">
          <Link
            to={{ pathname: "https://linkedin.com/in/austinhjones3/" }}
            target="_blank"
            className="mr-3"
          >
            <FaLinkedin style={{ fontSize: "50px", color: palette.hanBlue }} />
          </Link>
          <Link
            to={{ pathname: "https://github.com/austinhjones3" }}
            target="_blank"
            className="ml-3"
          >
            <FaGithub style={{ fontSize: "50px", color: palette.cultured }} />
          </Link>
        </div>
        <ErrorAlert error={error} />
        <h5>Fill out the form, or email me at austin@austinjones.io</h5>
        <form onSubmit={handleSubmit} className="w-75">
          <div className="mb-3">
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
          <div className="mb-3">
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
            onClick={() => history.push("/")}
            type="button"
          >
            Cancel
          </button>
        </form>
      </center>
    </div>
  );
}
