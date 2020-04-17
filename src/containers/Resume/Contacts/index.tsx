import React from "react";

import { fmt } from "i18n/ConfiguredIntlProvider";
import { contacts, Contact } from "./data";

const ContactContainer = ({
  classNameLi,
  iconType,
  iconName,
  anchorHref,
  anchorChildren,
}: Contact) => (
  <li key={classNameLi} className={`${classNameLi} col-sm-6 col-md`}>
    <i className={`${iconType} fa-${iconName}`} />
    <a href={anchorHref}>{anchorChildren}</a>
  </li>
);

const Contacts = () => (
  <section className="contact-section">
    <h2>
      <i className="fas fa-address-card" /> {fmt({ id: "contacts.title" })}
    </h2>
    <ul className="informations row mt-4">{contacts.map(ContactContainer)}</ul>
  </section>
);

export default Contacts;
