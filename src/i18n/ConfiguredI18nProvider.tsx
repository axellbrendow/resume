import React, { useState, useEffect } from "react";
import { createIntl, createIntlCache, RawIntlProvider } from "react-intl";

import BgWithSpinner from "components/core/BgWithSpinner";

import history from "utils/history";
import flattenMessages from "utils/flattenMessages";
import translations from "./translations";
import { DEFAULT_LANGUAGE, localeIsSupported, getUrlLang } from "./languages";

export const cache = createIntlCache();
export let intl = createIntl(
  { locale: DEFAULT_LANGUAGE.locale, messages: {} },
  cache
);
export let fmt = intl.formatMessage;

const getAppropriateLocale = () => {
  const urlLang = getUrlLang();
  let { locale } = DEFAULT_LANGUAGE;

  if (localeIsSupported(urlLang)) locale = urlLang;
  else if (localeIsSupported(navigator.language)) locale = navigator.language;

  return locale.toLowerCase();
};

const initialLocale = getAppropriateLocale();

const ConfiguredI18nProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [locale, setLocale] = useState(initialLocale);

  useEffect(() => {
    return history.listen(location => setLocale(getUrlLang(location.pathname)));
  }, [setLocale]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (locale) {
        const messages = flattenMessages(await translations.getOne(locale));
        intl = createIntl({ locale, messages }, cache);
        fmt = intl.formatMessage;
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        document.documentElement.lang = locale;
        document.title = fmt({ id: "title" });
      }
    })();
  }, [locale]);

  return loading ? (
    <BgWithSpinner />
  ) : (
    <RawIntlProvider value={intl}>{children}</RawIntlProvider>
  );
};

export default ConfiguredI18nProvider;
