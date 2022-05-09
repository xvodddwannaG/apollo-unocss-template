module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  plugins: ["@typescript-eslint", "prettier", "react", "react-hooks"],
  rules: {
    'react/react-in-jsx-scope': 0,
  },
  overrides: [
    {
      files: ["*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      rules: {
        "prettier/prettier": [2, { parser: "graphql" }],
        "@graphql-eslint/avoid-duplicate-fields": "error",
        "@graphql-eslint/executable-definitions": "error",
        "@graphql-eslint/fields-on-correct-type": "error",
        "@graphql-eslint/fragments-on-composite-type": "error",
        "@graphql-eslint/known-argument-names": "error",
        "@graphql-eslint/known-directives": "error",
        "@graphql-eslint/known-type-names": "error",
        "@graphql-eslint/no-anonymous-operations": "error",
        "@graphql-eslint/no-deprecated": "warn",
        "@graphql-eslint/no-unused-variables": "warn",
        "@graphql-eslint/provided-required-arguments": "error",
        "@graphql-eslint/scalar-leafs": "error",
        "@graphql-eslint/unique-argument-names": "error",
        "@graphql-eslint/unique-input-field-names": "error",
        "@graphql-eslint/unique-variable-names": "error",
        "@graphql-eslint/value-literals-of-correct-type": "error",
        "@graphql-eslint/variables-are-input-types": "error",
        "@graphql-eslint/variables-in-allowed-position": "error",
        "@graphql-eslint/match-document-filename": [
          "error",
          {
            fileExtension: ".graphql",
            query: "PascalCase",
            mutation: "PascalCase",
            subscription: "PascalCase",
            fragment: { style: "PascalCase", suffix: ".fragment" },
          },
        ],
        // TODO: try the following rules later (they didn't work in August 2021)
        // '@graphql-eslint/unique-fragment-name': 'error',
        // '@graphql-eslint/unique-operation-name': 'error',
      },
    },
  ],
};
