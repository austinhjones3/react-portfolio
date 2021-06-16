import React, { useContext } from "react";
import "../styles/Contact.css";
import { useHistory } from "react-router-dom";
import useSideClick from "../layout/useSideClick";
import { MenuContext } from "../layout/context";
export default function Contact() {
  const history = useHistory();
  const context = useContext(MenuContext);
  const handleSideClick = useSideClick(context);

  function handleClick() {
    context.menuIsOpen && handleSideClick();
    history.push("/");
  }
  return (
    <div className="contact">
      <form
        action="https://formspree.io/f/xleoyjpn"
        onSubmit={handleClick}
        method="POST"
        target="_blank"
      >
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="input"
            name="name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Jane Appleseed"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">
            Message
          </label>
          <textarea
            name="message"
            class="form-control"
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
          onClick={handleClick}
          type="button"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
