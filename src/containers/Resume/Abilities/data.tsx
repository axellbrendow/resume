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
        width: 90,
        name: fmt({ id: "abilities.skills.css" }),
      },
      {
        width: 90,
        name: fmt({ id: "abilities.skills.javaScript" }),
      },
      {
        width: 55,
        name: fmt({ id: "abilities.skills.php" }),
      },
      {
        width: 55,
        name: fmt({ id: "abilities.skills.docker" }),
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
