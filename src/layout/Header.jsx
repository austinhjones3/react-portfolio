import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaReact } from "react-icons/fa";
// import { Navbar, Container, Nav } from "react-bootstrap";
export default function Header() {
  const linkStyle = { color: "#f0f0f0" };
  const logoStyle = { color: "#42DDF5" };
  return (
    <>
      <h2 className="d-flex justify-content-center">
        Austin{" "}
        <span style={logoStyle} className="ml-1 mr-1">
          <FaReact />
        </span>{" "}
        Jones
      </h2>
      <h4 className="d-flex justify-content-center">Full Stack Developer</h4>
      <div className="d-flex justify-content-center">
        <Navbar className="text-center" expand="md">
          <Container>
            <Navbar.Toggle style={logoStyle} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto text-center" pullRight>
                <Nav.Link as={Link} style={linkStyle} to="/" className="">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} style={linkStyle} to="/about" className="">
                  About Me
                </Nav.Link>
                <Nav.Link as={Link} style={linkStyle} to="/projects" className="">
                  Projects
                </Nav.Link>
                <Nav.Link as={Link} style={linkStyle} to="/resume" className="">
                  Resume
                </Nav.Link>
                <Nav.Link as={Link} style={linkStyle} to="/contact" className="">
                  Contact Me
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
