import js from "@eslint/js"
import globals from "globals"
import { defineConfig } from "eslint/config"
import stylingConfig from "./index.js"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node },
    plugins: { js },
    extends: ["js/recommended"]
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    extends: [stylingConfig.stylistic],
  }
])
