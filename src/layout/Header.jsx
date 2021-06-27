/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useRef, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { palette } from "../styles/palette";
import "../styles/Header.css";
import { FaTerminal } from "react-icons/fa";
import {
  BsHouseDoorFill,
  BsFillEnvelopeFill,
  BsTerminalFill,
  BsFillPersonLinesFill,
} from "react-icons/bs";
import { MenuContext } from "../util/context";
import useSideClick from "../util/useSideClick";
import $ from "jquery";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

export default function Header() {
  const context = useContext(MenuContext);
  const handleSideClick = useSideClick(context);
  const toggleHamburger = useRef();
  const [typing, setTyping] = useState(true);

  // when a click occurs on a button or link that should close the menu, close it
  useEffect(handleClickSideEffect, [context.clickEvent]);
  function handleClickSideEffect() {
    if (context.menuIsOpen && $(window).width() < 768) {
      toggleHamburger.current.click();
      context.setMenuIsOpen(() => false);
    }
  }

  const linkStyle = {
    color: palette.skyBlueCrayola,
  };

  const newPhrase = (text, delay) => ({ text, delay });

  // phrases and their delays before backspace to be typed in header
  const phrases = [
    newPhrase("Austin Jones", 4000),
    newPhrase("Developer", 4000),
    newPhrase("Programmer", 2500),
    newPhrase("React Buff", 2500),
    newPhrase("Techie", 1200),
    newPhrase("Father", 500),
    newPhrase("Teacher", 500),
    newPhrase("Learner", 500),
    newPhrase("Gamer", 500),
    newPhrase("Friend", 500),
  ];

  // when the phrases are finished mapping, change state to rerender and loop
  function loop() {
    setTyping(() => false);
    setTyping(() => true);
  }

  return (
    <header className="fixed-header">
      <h1 className="d-flex justify-content-center mt-2" id="header-title">
        <FaTerminal className="mr-3" id="terminal-logo" />
        {typing && (
          <Typist onTypingDone={loop}>
            {phrases.map(({ text, delay }, idx) => (
              <span key={idx}>
                {text}
                <Typist.Backspace count={text.length} delay={delay} />
              </span>
            ))}
          </Typist>
        )}
      </h1>
      <div className="d-flex justify-content-center">
        <Navbar sticky variant="light" className="text-center " expand="md">
          <Container className="d-flex justify-content-center">
            <Navbar.Toggle
              onClick={() => context.setMenuIsOpen(() => !context.menuIsOpen)}
              id="toggle-hamburger"
              ref={toggleHamburger}
              variant="light"
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto text-center">
                <Nav.Link
                  as={Link}
                  onClick={handleSideClick}
                  style={linkStyle}
                  to="/"
                  className="header-link"
                >
                  <BsHouseDoorFill className="link-icon" /> =&gt; Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  onClick={handleSideClick}
                  style={linkStyle}
                  to="/about"
                  className="header-link"
                >
                  <BsFillPersonLinesFill className="link-icon" /> =&gt; About
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  onClick={handleSideClick}
                  style={linkStyle}
                  to="/projects"
                  className="header-link"
                >
                  <BsTerminalFill className="link-icon" /> =&gt; Projects
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  onClick={handleSideClick}
                  style={linkStyle}
                  to="/contact"
                  className="header-link"
                >
                  <BsFillEnvelopeFill className="link-icon" /> =&gt; Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}
