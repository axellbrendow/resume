import { fmt } from "i18n/ConfiguredIntlProvider";

export interface Contact {
  classNameLi: string;
  iconType: string;
  iconName: string;
  anchorHref: string;
  anchorChildren: React.ReactNode;
  srOnlyAnchorChildren: string;
}

export const getContacts = (): Contact[] => [
  {
    classNameLi: "email",
    iconType: "fas",
    iconName: "envelope",
    anchorHref: "mailto:breno.axel@gmail.com",
    anchorChildren: "breno.axel@gmail.com",
    srOnlyAnchorChildren: "Email:",
  },
  {
    classNameLi: "phone",
    iconType: "fas",
    iconName: "mobile-alt",
    anchorHref: "tel:+5531989575463",
    anchorChildren: "+55 31 98957-5463",
    srOnlyAnchorChildren: `${fmt({ id: "contacts.phone.sr" })}:`,
  },
  {
    classNameLi: "linkedin",
    iconType: "fab",
    iconName: "linkedin-in",
    anchorHref: "https://www.linkedin.com/in/axell-brendow/",
    anchorChildren: "axell-brendow",
    srOnlyAnchorChildren: "LinkedIn:",
  },
  {
    classNameLi: "github",
    iconType: "fab",
    iconName: "github-square",
    anchorHref: "https://github.com/axell-brendow",
    anchorChildren: "axell-brendow",
    srOnlyAnchorChildren: "GitHub:",
  },
];
