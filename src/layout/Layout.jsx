import React from "react";
import Header from "./Header";
import Routes from "./Routes";
import Footer from "./Footer";

export default function Layout() {
  return (
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
  );
}
