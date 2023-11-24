// eslint-disable-next-line @typescript-eslint/no-var-requires
const stylistic = require("@stylistic/eslint-plugin");

const customized = stylistic.configs.customize({
  indent: 2,
  quotes: "double",
  semi: true,
  jsx: false,
});

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
    es2023: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:astro/recommended",
    "plugin:jsonc/recommended-with-jsonc",
  ],
  plugins: [
    "@stylistic",
  ],
  rules: {
    ...customized.rules,
  },
  overrides: [
    {
      files: ["*.{js,cjs,mjs,json}"],
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
    },
  ],
};
