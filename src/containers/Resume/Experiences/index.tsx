import React from "react";
import ReactDOMServer from "react-dom/server";

import { ExperienceItem, Experience, experiences } from "./data";

const ExperienceItemContainer = ({
  period,
  name,
  description,
}: ExperienceItem) => (
  <li
    key={
      typeof name === "string"
        ? name
        : ReactDOMServer.renderToString(name as React.ReactElement)
    }
    className="row mb-3"
  >
    <div className="col">
      <div>
        <strong className="period">{period}</strong>
      </div>
      <div>
        <p className="name">
          <strong>{name}</strong>
        </p>
        <div className="description">{description}</div>
      </div>
    </div>
  </li>
);

const ExperienceContainer = ({ title, titleIconClass, items }: Experience) => (
  <div key={titleIconClass} className="col-sm-6">
    <h3 className="title">
      <i className={`fas fa-${titleIconClass}`} /> {title}
    </h3>
    <ul>{items.map(ExperienceItemContainer)}</ul>
  </div>
);

const Experiences = () => (
  <section className="experiences-section">
    <div className="row">{experiences().map(ExperienceContainer)}</div>
  </section>
);

export default Experiences;
