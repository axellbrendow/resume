import React from "react";

import { fmt } from "i18n/ConfiguredIntlProvider";

import { ReactLogoStyle } from "./styles";

const ReactLogo = () => (
  <ReactLogoStyle title={`${fmt({ id: "madeIn" })} React :D`}>
    <span className="nucleo" />
  </ReactLogoStyle>
);

export default ReactLogo;
