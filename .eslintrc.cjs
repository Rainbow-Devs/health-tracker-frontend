module.exports = {
  env: {
    browser: true,
    commonjs: false,
    es6: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:github/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:tailwindcss/recommended",
    "next/core-web-vitals",
    "plugin:storybook/recommended",
    "prettier"
  ],
  ignorePatterns: ["/*.cjs", "/node_modules/**/*"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
      ],
      parserOptions: {
        project: ["./tsconfig.json"],
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        "@typescript-eslint/no-explicit-any": "off"
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "2020",
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint",
    "github",
    "import",
    "jest",
    "jest-dom",
    "jsx-a11y",
    "react",
    "react-hooks",
    "tailwindcss",
    "testing-library"
  ],
  rules: {
    camelcase: [
      "error",
      {
        ignoreDestructuring: true,
        properties: "never"
      }
    ],
    "linebreak-style": "error",
    "no-console": "off",
    "prefer-destructuring": "error",
    "filenames/match-regex": "off",
    "i18n-text/no-en": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  }
};
