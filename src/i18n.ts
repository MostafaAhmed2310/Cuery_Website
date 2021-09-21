import { Locales } from "./locales";

import en from "./locales/en.json";
import ar from "./locales/ar.json";

export const messages = {
  [Locales.EN]: en,
  [Locales.AR]: ar
};

export const defaultLocale = Locales.EN;