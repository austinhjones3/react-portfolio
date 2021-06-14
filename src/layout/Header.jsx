import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { palette } from "../palette";
import "../styles/Header.css";
import { FaReact } from "react-icons/fa";
import {
  BsHouseDoorFill,
  BsFillEnvelopeFill,
  BsNewspaper,
  BsTerminalFill,
  BsFillPersonLinesFill,
} from "react-icons/bs";

export default function Header() {
  const linkStyle = {
    color: palette.skyBlueCrayola,
    fontSize: "16px",
    fontFamily: "Fira Mono",
  };
  const logoStyle = { color: palette.skyBlueCrayola };
  const iconStyle = { fontSize: "24px", color: palette.hanBlue };
  return (
    <header>
      <h1 className="d-flex justify-content-center mt-2 header-title">
        Austin{" "}
        <span style={logoStyle} className="ml-1 mr-1">
          <FaReact />
        </span>{" "}
        Jones
      </h1>
      <h3 className="d-flex justify-content-center header-title">
        Software Engineer
      </h3>
      <div className="d-flex justify-content-center">
        <Navbar sticky variant="light" className="text-center" expand="md">
          <Container>
            <Navbar.Toggle
              id="toggle-hamburger"
              variant="light"
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto text-center">
                <Nav.Link as={Link} style={linkStyle} to="/" className="">
                  <BsHouseDoorFill style={iconStyle} /> =&gt; Home
                </Nav.Link>
                <Nav.Link as={Link} style={linkStyle} to="/about" className="">
                  <BsFillPersonLinesFill style={iconStyle} /> =&gt; About Me
                </Nav.Link>
                <Nav.Link as={Link} style={linkStyle} to="/projects" className="">
                  <BsTerminalFill style={iconStyle} /> =&gt; Projects
                </Nav.Link>
                <Nav.Link as={Link} style={linkStyle} to="/resume" className="">
                  <BsNewspaper style={iconStyle} /> =&gt; Resume
                </Nav.Link>
                <Nav.Link as={Link} style={linkStyle} to="/contact" className="">
                  <BsFillEnvelopeFill style={iconStyle} /> =&gt; Contact Me
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}
