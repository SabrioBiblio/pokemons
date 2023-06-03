module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'import'],
  rules: {
    "max-len": ["error", { "code": 100 }],
    "indent": ["error", 2],
    "react-hooks/exhaustive-deps": "off",
    "object-curly-spacing": ["error", "always"],
    'react-refresh/only-export-components': 'warn',
    'import/order': ["error", {
      "groups": ["builtin", "external", "internal"],
      "pathGroups": [
        {
          "pattern": "react",
          "group": "external",
          "position": "before"
        }
      ],
      "pathGroupsExcludedImportTypes": ["react"],
      "newlines-between": "always",
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true
      }
    }]
  },
}
