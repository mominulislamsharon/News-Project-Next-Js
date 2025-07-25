import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  rules,
  {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    "no-unused-vars": "warn",
    "semi": ["error", "always"],
    "typescript-eslint/no-empty-object-type": "off",
    "react-hooks/exhaustive-deps": "off",
  },
];

export default eslintConfig;
