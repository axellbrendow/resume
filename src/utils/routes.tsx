import React from "react";
import { HashRouter, Router, Route } from "react-router-dom";

import Resume from "containers/Resume";

import history from "./history";

const Routes = () => (
  <HashRouter>
    <Router history={history}>
      <Route exact path="/:lang?" component={Resume} />
    </Router>
  </HashRouter>
);

export default Routes;
