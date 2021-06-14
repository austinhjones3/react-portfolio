import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
// import { Navbar, Container, Nav } from "react-bootstrap";
export default function Header() {
  return (
    <>
      <h2 className="d-flex justify-content-center">Austin Jones</h2>
      <h4 className="d-flex justify-content-center">Full Stack Developer</h4>
      <div className="d-flex justify-content-center">
        <Navbar className="text-center" expand="md">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto text-center" pullRight>
                <Nav.Link as={Link} to="/" className="">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="">
                  About Me
                </Nav.Link>
                <Nav.Link as={Link} to="/projects" className="">
                  Projects
                </Nav.Link>
                <Nav.Link as={Link} to="/resume" className="">
                  Resume
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="">
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
