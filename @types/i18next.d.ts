import common from "@/locales/en/common.json";

const resources = {
  common
} as const;

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: typeof resources;
  }
}