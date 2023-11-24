import { resources } from "@/locales/util";
import i18next, { type Resource } from "i18next";
import { getLocale, getLocaleUrl } from "astro-i18n-aut";
import { defineMiddleware } from "astro/middleware";

await i18next.init({
  resources: resources as Resource,
  defaultNS: "common",
  fallbackLng: "en",
  debug: false,
});

export function r(url: string) {
  return getLocaleUrl(url, i18next.language);
}

export const t = i18next.t;

// export function changeLanguage(Astro: AstroGlobal) {
//   const lang = getLocale(Astro.url);
//   i18next.changeLanguage(lang);
// }

export const i18nextMiddleware = defineMiddleware(async (context, next) => {
  const { pathname } = new URL(context.request.url);
  // filter `/_image` requests
  if (pathname.startsWith("/_")) {
    return next();
  }
  else {
    const lang = getLocale(pathname);
    await i18next.changeLanguage(lang);
  }
  return next();
});
