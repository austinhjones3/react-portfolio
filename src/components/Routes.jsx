import React from "react";
import { Switch, Route } from "react-router-dom";
import { Contact } from "../pages/Contact";
import { Projects } from "../pages/Projects";
import { About } from "../pages/About";
import { Home } from "../pages/Home";

export const Routes = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </main>
  );
}
