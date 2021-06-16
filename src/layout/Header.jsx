/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { palette } from "../palette";
import "../styles/Header.css";
import { FaReact } from "react-icons/fa";
import {
  BsHouseDoorFill,
  BsFillEnvelopeFill,
  BsTerminalFill,
  BsFillPersonLinesFill,
} from "react-icons/bs";
import { MenuContext } from "./context";
import useSideClick from "./useSideClick";

export default function Header() {
  const context = useContext(MenuContext);
  const handleSideClick = useSideClick(context);

  // when a click occurs on a button or link that should close the menu, close it
  useEffect(handleClickSideEffect, [context.clickEvent]);
  function handleClickSideEffect() {
    if (context.menuIsOpen) {
      document.getElementById("toggle-hamburger").click();
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
  return (
    <header className="fixed-header">
      <h1 className="d-flex justify-content-center mt-2 header-title">
        <span className="row">
          <span className="col-5">Austin </span>
          <span style={logoStyle} className="col-2">
            <FaReact className="App-logo" />
          </span>{" "}
          <span className="col-5">Jones</span>
        </span>
      </h1>
      <h3 className="d-flex justify-content-center header-title">
        Software Engineer
      </h3>
      <div className="d-flex justify-content-center">
        <Navbar sticky variant="light" className="text-center " expand="md">
          <Container className="d-flex justify-content-center">
            <Navbar.Toggle
              onClick={() => context.setMenuIsOpen(() => !context.menuIsOpen)}
              id="toggle-hamburger"
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
