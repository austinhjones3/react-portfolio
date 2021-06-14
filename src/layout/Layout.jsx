import React from "react";
import BrowserRouter from "react-router-dom/BrowserRouter";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Routes from "./Routes";
import Footer from "./Footer";

export default function Layout() {
  return (
    <Container>
      <BrowserRouter>
        <div className="container">
          <div>
            <Header />
          </div>
          <div>
            <Routes />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </Container>
  );
}
