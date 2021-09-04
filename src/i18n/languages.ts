import history from "utils/history";

interface Language {
  locale: string;
  name: string;
}

export const LANGUAGES: Record<string, Language> = {
  "en-us": {
    locale: "en-us",
    name: "English",
  },
  "pt-br": {
    locale: "pt-br",
    name: "Português",
  },
};

export const localeIsSupported = (locale: string) =>
  locale.toLowerCase() in LANGUAGES;

export const getLang = (locale: string) => LANGUAGES[locale.toLowerCase()];

export const splitUrl = (url = history.location.pathname) => url.split("/");
export const getUrlLang = (url = history.location.pathname) =>
  splitUrl(url)[2] || "";

export const changeUrlLangTo = (
  locale: string,
  url = history.location.pathname
) => {
  const splittedUrl = splitUrl(url);
  if (splittedUrl.length === 2) splittedUrl.push(locale);
  else splittedUrl[2] = locale;
  return splittedUrl.join("/");
};

export const changeLang = (locale: string) => {
  history.push(changeUrlLangTo(locale));
};

export const DEFAULT_LOCALE = "en-us";
export const DEFAULT_LANGUAGE = LANGUAGES[DEFAULT_LOCALE];
