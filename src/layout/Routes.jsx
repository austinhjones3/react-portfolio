import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import About from "../pages/About";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={Contact} />
        <Route exact path="/about" component={Resume} />
      </Switch>
    </BrowserRouter>
  );
}
