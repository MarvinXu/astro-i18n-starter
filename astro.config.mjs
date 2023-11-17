import { defineConfig } from "astro/config";
import { i18n } from "astro-i18n-aut/integration";
const defaultLocale = "cn";
const locales = {
  cn: "zh-CN", // the `defaultLocale` value must present in `locales` keys
  en: "en-US",
};

// https://astro.build/config
export default defineConfig({
  // site: "/",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    i18n({
      locales,
      defaultLocale,
    }),
  ],
});
