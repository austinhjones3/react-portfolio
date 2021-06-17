/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useRef, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { palette } from "../palette";
import "../styles/Header.css";
import { FaTerminal } from "react-icons/fa";
import {
  BsHouseDoorFill,
  BsFillEnvelopeFill,
  BsTerminalFill,
  BsFillPersonLinesFill,
} from "react-icons/bs";
import { MenuContext } from "./context";
import useSideClick from "./useSideClick";
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
    fontSize: "16px",
    fontFamily: "Fira Mono",
  };
  const logoStyle = {
    color: palette.skyBlueCrayola,
  };
  const iconStyle = { fontSize: "24px", color: palette.hanBlue };

  function loop() {
    setTyping(() => false);
    setTyping(() => true);
  }

  function generatePhrase(text, delay) {
    return { text, delay };
  }

  const phrases = [
    generatePhrase("Austin Jones", 4000),
    generatePhrase("Developer", 4000),
    generatePhrase("Programmer", 2000),
    generatePhrase("React Buff", 2000),
    generatePhrase("Techie", 1000),
    generatePhrase("Father", 500),
    generatePhrase("Teacher", 500),
    generatePhrase("Learner", 500),
    generatePhrase("Gamer", 500),
    generatePhrase("Friend", 500),
  ];

  return (
    <header className="fixed-header">
      <h1 className="d-flex justify-content-center mt-2 header-title">
        <FaTerminal style={logoStyle} className="mr-3" />
        {typing && (
          <Typist onTypingDone={loop}>
            {phrases.map(({ text, delay }) => (
              <span>
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
                  className=""
                >
                  <BsHouseDoorFill style={iconStyle} /> =&gt; Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  onClick={handleSideClick}
                  style={linkStyle}
                  to="/about"
                  className=""
                >
                  <BsFillPersonLinesFill style={iconStyle} /> =&gt; About
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  onClick={handleSideClick}
                  style={linkStyle}
                  to="/projects"
                  className=""
                >
                  <BsTerminalFill style={iconStyle} /> =&gt; Projects
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  onClick={handleSideClick}
                  style={linkStyle}
                  to="/contact"
                  className=""
                >
                  <BsFillEnvelopeFill style={iconStyle} /> =&gt; Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}
