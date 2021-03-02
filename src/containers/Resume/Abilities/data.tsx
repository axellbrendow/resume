import { fmt } from "i18n/ConfiguredIntlProvider";

export interface AbilityItem {
  width: number;
  name: string;
}

export interface Ability {
  title: string;
  items: AbilityItem[];
}

export const abilities = (): Ability[] => [
  {
    title: fmt({ id: "abilities.skills.title" }),
    items: [
      {
        width: 60,
        name: fmt({ id: "abilities.skills.softwareArchitecture" }),
      },
      {
        width: 50,
        name: fmt({ id: "abilities.skills.kubernetes" }),
      },
      {
        width: 80,
        name: fmt({ id: "abilities.skills.docker" }),
      },
      {
        width: 70,
        name: fmt({ id: "abilities.skills.react" }),
      },
    ],
  },
  {
    title: fmt({ id: "abilities.languages.title" }),
    items: [
      {
        width: 70,
        name: fmt({ id: "abilities.languages.english" }),
      },
      {
        width: 90,
        name: fmt({ id: "abilities.languages.portuguese" }),
      },
    ],
  },
];
