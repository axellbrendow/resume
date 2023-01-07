import React from "react";

import { fmt } from "i18n/ConfiguredI18nProvider";
import { getContacts, Contact } from "./data";

const ContactContainer = ({
  classNameLi,
  iconType,
  iconName,
  anchorHref,
  anchorChildren,
  srOnlyAnchorChildren,
}: Contact) => (
  <li key={classNameLi} className={`${classNameLi} col-sm-6 col-md`}>
    <i className={`${iconType} fa-${iconName}`} />
    {' '}
    <a href={anchorHref}>
      <span className="sr-only">{srOnlyAnchorChildren}</span>
      {anchorChildren}
    </a>
  </li>
);

const Contacts = () => (
  <section className="contact-section">
    <h2>
      <i className="fas fa-address-card" /> {fmt({ id: "contacts.title" })}
    </h2>
    <ul className="informations row mt-4">{getContacts().map(ContactContainer)}</ul>
  </section>
);

export default Contacts;
