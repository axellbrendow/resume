import React from "react";
import styled from "styled-components";

import { fmt } from "i18n/ConfiguredIntlProvider";

import Presentation from "./Presentation";
import Contacts from "./Contacts";
import Experiences from "./Experiences";
import ReactLogo from "./ReactLogo";

import { ellipseHeight } from "./ReactLogo/styles";

const ReactLogoContainerStyle = styled.div`
  margin: 10px 0;
  > p {
    margin-left: calc(${ellipseHeight} + 1ch);
    position: relative;
    top: calc(${ellipseHeight} / 4);
  }
`;

const ReactLogoContainer = () => (
  <ReactLogoContainerStyle>
    <a href="https://pt-br.reactjs.org/">
      <ReactLogo />
    </a>
    <p>{fmt({ id: "madeIn" })} React :D</p>
  </ReactLogoContainerStyle>
);

const Resume = () => (
  <div className="container site-container">
    <Presentation />
    <Contacts />
    <Experiences />
    <ReactLogoContainer />
  </div>
);

export default Resume;
