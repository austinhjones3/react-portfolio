import React from "react";
import useState from "react-usestateref";
import BrowserRouter from "react-router-dom/BrowserRouter";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Routes from "./Routes";
import Footer from "./Footer";
import "../styles/Header.css";
import { MenuContext } from "./context.js";

export default function Layout() {
  const [clickEvent, setClickEvent, clickEventRef] = useState(false);
  const [menuIsOpen, setMenuIsOpen, menuIsOpenRef] = useState(false);
  const context = {
    clickEvent,
    setClickEvent,
    clickEventRef,
    menuIsOpen,
    setMenuIsOpen,
    menuIsOpenRef,
  };
  return (
    <Container>
      <BrowserRouter>
        <MenuContext.Provider value={context}>
          <div className="container">
            <div className="header-container">
              <Header />
            </div>
            <div>
              <Routes />
            </div>
            <div className="spacer"></div>
            <div className="footer-container">
              <Footer />
            </div>
          </div>
        </MenuContext.Provider>
      </BrowserRouter>
    </Container>
  );
}
