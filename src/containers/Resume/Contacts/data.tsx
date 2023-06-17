import React from "react";

import { fmt } from "i18n/ConfiguredI18nProvider";

import { BrazilFlag } from "./styles";

export interface Contact {
  classNameLi: string;
  iconType: string;
  iconName: string;
  anchorHref: string;
  anchorChildren: React.ReactNode;
  accessibilityAnchorChildren: string;
}

export const getContacts = (): Contact[] => [
  {
    classNameLi: "email",
    iconType: "fas",
    iconName: "envelope",
    anchorHref: "mailto:breno.axel@gmail.com",
    anchorChildren: "breno.axel@gmail.com",
    accessibilityAnchorChildren: "Email:",
  },
  {
    classNameLi: "phone",
    iconType: "fas",
    iconName: "mobile-alt",
    anchorHref: "tel:+5531989575463",
    anchorChildren: (
      <>
        +55 31 98957 5463
        <BrazilFlag
          src="https://cdn-icons-png.flaticon.com/256/4628/4628714.png"
          alt={fmt({ id: "brazil" })}
          title={fmt({ id: "brazil" })}
          width="20"
          height="20"
        />
      </>
    ),
    accessibilityAnchorChildren: `${fmt({
      id: "contacts.phone.accessibility",
    })}:`,
  },
  {
    classNameLi: "linkedin",
    iconType: "fab",
    iconName: "linkedin-in",
    anchorHref: "https://www.linkedin.com/in/axellbrendow/",
    anchorChildren: "axellbrendow",
    accessibilityAnchorChildren: "LinkedIn:",
  },
  {
    classNameLi: "github",
    iconType: "fab",
    iconName: "github-square",
    anchorHref: "https://github.com/axellbrendow",
    anchorChildren: "axellbrendow",
    accessibilityAnchorChildren: "GitHub:",
  },
];
