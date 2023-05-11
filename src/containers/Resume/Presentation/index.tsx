import React from "react";

import { fmt } from "i18n/ConfiguredI18nProvider";

import LanguageList from "components/core/LanguageList";

// import MyPhoto from "assets/axell.png";

const Presentation = () => (
  <section className="presentation-section">
    <div className="presentation container row">
      <div className="name col-sm pb-3">
        {/* <img src={MyPhoto} alt="Me" className="photo" /> */}
        <h1 className="h2">Axell Brendow Batista Moreira</h1>
      </div>
      <div className="about-me col-sm">
        <h2>{fmt({ id: "presentation.aboutMe" })}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: fmt({ id: "presentation.aboutMeValue" }),
          }}
        />
      </div>
    </div>
    <LanguageList />
  </section>
);

export default Presentation;
