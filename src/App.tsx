import React from "react";

import Routes from "utils/routes";
import ConfiguredIntlProvider from "i18n/ConfiguredIntlProvider";

import "./bootstrap.css";
import "./styles.css";

const App = () => {
  return (
    <ConfiguredIntlProvider>
      <Routes />
    </ConfiguredIntlProvider>
  );
};

export default App;
