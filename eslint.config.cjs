// eslint.config.cjs
const { FlatCompat } = require("@eslint/eslintrc");
const { configs: jsConfigs } = require("@eslint/js");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: jsConfigs.recommended,
});

module.exports = [
  // ─── 0) Ignore everything except your source ───
  {
    ignores: [
      "node_modules/**",
      ".astro/**",
      "dist/**",
      "eslint.config.cjs",     // don’t lint your config file
      "**/*.d.ts"
    ],
  },

  // ─── 1) ESLint’s built‑in recommended rules ───
  jsConfigs.recommended,

  // ─── 2) Pull in shareable configs via FlatCompat ───
  ...compat.extends(
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended"
  ),

  // ─── 3) JS & TS files ───
  {
    files: ["**/*.{js,ts}"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    rules: {
      // your custom JS/TS rules here
    },
  },

  // ─── 4) Astro files ───
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: require("astro-eslint-parser"),
      parserOptions: {
        parser: require("@typescript-eslint/parser"),
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".astro"],
      },
    },
    plugins: {
      astro: require("eslint-plugin-astro"),
    },
    rules: {
      // your custom Astro rules here
    },
  },
];
