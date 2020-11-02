import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";

import Resume from "containers/Resume";

import history from "./history";

const Routes = () => (
  <BrowserRouter>
    <Router history={history}>
      <Route exact path="/resume/:lang?" component={Resume} />
    </Router>
  </BrowserRouter>
);

export default Routes;
