module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["custom", "next"],
    globals: {},
    overrides: [
      {
        files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
        rules: {
          // "@next/next/no-html-link-for-pages": ["error", "apps/smp/pages"]
        },
      },
      {
        files: ["*.ts", "*.tsx"],
        rules: {},
      },
      {
        files: ["*.js", "*.jsx"],
        rules: {},
      },
    ],
    rules: {
      // react
      "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
      "react/function-component-definition": [
        2,
        {
          namedComponents: ["arrow-function", "function-expression"],
        },
      ],
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  };