import history from "utils/history";

interface Language {
  locale: string;
  name: string;
}

export const LANGUAGES: Record<string, Language> = {
  "pt-br": {
    locale: "pt-br",
    name: "Português",
  },
  "en-us": {
    locale: "en-us",
    name: "English",
  },
};

export const localeIsSupported = (locale: string) =>
  locale.toLowerCase() in LANGUAGES;

export const getLang = (locale: string) => LANGUAGES[locale.toLowerCase()];

export const splitUrl = (url = history.location.pathname) => url.split("/");
export const getUrlLang = (url = history.location.pathname) => splitUrl(url)[1];

export const changeLang = (locale: string) => {
  const splittedUrl = splitUrl();
  splittedUrl[1] = locale;
  history.push(splittedUrl.join("/"));
};

export const DEFAULT_LOCALE = "en-us";
export const DEFAULT_LANGUAGE = LANGUAGES[DEFAULT_LOCALE];
