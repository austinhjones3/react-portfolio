import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
      <Row className="mt-2">
        <Col></Col>
      </Row>
      <Navbar bg="light" expand="sm">
        <Row>
          <Container>
            <h4>Austin Jones | Full Stack Developer</h4>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
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
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Row>
      </Navbar>
    </>
  );
}
