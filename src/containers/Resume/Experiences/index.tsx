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
    className="row"
  >
    <div className="col-sm-3">
      <strong className="period">{period}</strong>
    </div>
    <div className="col-sm-9">
      <p className="name">
        <strong>{name}</strong>
      </p>
      <p className="description">{description}</p>
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
