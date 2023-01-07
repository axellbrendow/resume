import React from "react";

import Routes from "utils/routes";
import ConfiguredI18nProvider from "i18n/ConfiguredI18nProvider";

import "./bootstrap.css";
import "./styles.css";

const App = () => {
  return (
    <ConfiguredI18nProvider>
      <Routes />
    </ConfiguredI18nProvider>
  );
};

export default App;
