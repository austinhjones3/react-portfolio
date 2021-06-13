import React from "react";
import BrowserRouter from "react-router-dom/BrowserRouter";
import Header from "./Header";
import Routes from "./Routes";
import Footer from "./Footer";

export default function Layout() {
  return (
    <BrowserRouter>
      <main className="container">
        <div>
          <Header />
        </div>
        <div>
          <Routes />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </BrowserRouter>
  );
}
