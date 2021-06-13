import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import { Navbar, Container, Nav } from "react-bootstrap";
export default function Header() {
  return (
    <>
      {/* <nav>
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/about" className="">
          About Me
        </Link>
        <Link to="/projects" className="">
          Projects
        </Link>
        <Link to="/resume" className="">
          Resume
        </Link>
        <Link to="/contact" className="">
          Contact Me
        </Link>
      </nav> */}

      <Navbar bg="light" expand="sm">
        <h3>Austin Jones</h3>
        <h4>Full Stack Developer</h4>
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="">
                Home
              </Link>
              <Link to="/about" className="ml-3">
                About Me
              </Link>
              <Link to="/projects" className="ml-3">
                Projects
              </Link>
              <Link to="/resume" className="ml-3">
                Resume
              </Link>
              <Link to="/contact" className="ml-3">
                Contact Me
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
