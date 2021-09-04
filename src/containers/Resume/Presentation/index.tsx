import React from "react";

import { fmt } from "i18n/ConfiguredIntlProvider";

import LanguageList from "components/core/LanguageList";

// import MyPhoto from "assets/axell.png";

const Presentation = () => (
  <section className="presentation-section">
    <div className="presentation container row">
      <div className="name col-sm">
        {/* <img src={MyPhoto} alt="Me" className="photo" /> */}
      </div>
      <div className="about-me col-sm">
        <h3>{fmt({ id: "presentation.aboutMe" })}</h3>
        <p>{fmt({ id: "presentation.aboutMeValue" })}</p>
      </div>
    </div>
    <LanguageList />
  </section>
);

export default Presentation;
