export interface Contact {
  classNameLi: string;
  iconType: string;
  iconName: string;
  anchorHref: string;
  anchorChildren: React.ReactNode;
}

export const contacts: Contact[] = [
  {
    classNameLi: "email",
    iconType: "fas",
    iconName: "envelope",
    anchorHref: "mailto:breno.axel@gmail.com",
    anchorChildren: " breno.axel@gmail.com",
  },
  {
    classNameLi: "phone",
    iconType: "fas",
    iconName: "mobile-alt",
    anchorHref: "tel:+5531989575463",
    anchorChildren: " +55 31 98957-5463",
  },
  {
    classNameLi: "linkedin",
    iconType: "fab",
    iconName: "linkedin-in",
    anchorHref: "https://www.linkedin.com/in/axell-brendow/",
    anchorChildren: " axell-brendow",
  },
  {
    classNameLi: "github",
    iconType: "fab",
    iconName: "github-square",
    anchorHref: "https://github.com/axell-brendow",
    anchorChildren: " axell-brendow",
  },
];
