// eslint.config.cjs  —  Flat-config for ESLint 9
const { FlatCompat } = require("@eslint/eslintrc");
const { configs: jsConfigs } = require("@eslint/js");
const globals = require("globals");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: jsConfigs.recommended,
});

module.exports = [
  /* ── 0) ignore patterns ─────────────────────────────────── */
  {
    ignores: [
      "node_modules/**",
      ".astro/**",
      "dist/**",
      "eslint.config.cjs",
      "**/*.d.ts",
    ],
  },

  /* ── 1) built-in recommended rules ─────────────────────── */
  jsConfigs.recommended,

  /* ── 2) legacy shareable configs (TypeScript + Astro) ──── */
  ...compat.extends(
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended",
  ),

  /* ── 3) project-wide JS + TS (uses TS parser) ───────────── */
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
  },

  /* ── 3b) Node helper scripts (plain JS) ─────────────────── */
  {
    files: ["scripts/**/*.js"], // adjust path if needed
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.node }, // enable process, console, etc.
    },
  },

  /* ── 4) Astro component files ───────────────────────────── */
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
  },
];
