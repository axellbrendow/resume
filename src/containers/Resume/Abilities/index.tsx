import React from "react";

import { abilities, AbilityItem, Ability } from "./data";

const AbilityItemContainer = ({ width, name }: AbilityItem) => (
  <li key={name}>
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${width}%` }}
        aria-valuenow={width}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {name}
      </div>
    </div>
  </li>
);

const AbilityContainer = ({ title, items }: Ability) => (
  <div key={title} className="col-sm">
    <h3>{title}</h3>
    <ul>{items.map(AbilityItemContainer)}</ul>
  </div>
);

const Abilities = () => (
  <section className="abilities-section">
    <div className="row">{abilities().map(AbilityContainer)}</div>
  </section>
);

export default Abilities;
