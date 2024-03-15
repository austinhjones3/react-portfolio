import React from "react";
import useState from "react-usestateref";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";
import { Routes } from "./Routes";
import { Footer } from "./Footer";
import "./Header.scss";
import { MenuContext } from "../hooks/context.js";

export const Layout = () => {
  const [clickEvent, setClickEvent, clickEventRef] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const context = {
    clickEvent,
    setClickEvent,
    clickEventRef,
    menuIsOpen,
    setMenuIsOpen,
  };
  return (
    <BrowserRouter>
      <MenuContext.Provider value={context}>
        <div className="container content">
          <div className="header-container">
            <Header />
          </div>
          <div>
            <Routes />
          </div>
        </div>
        <Footer />
      </MenuContext.Provider>
    </BrowserRouter>
  );
}
