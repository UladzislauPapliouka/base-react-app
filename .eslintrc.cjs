module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react','react-refresh','simple-import-sort','prettier'],
  rules: {
    'react/react-in-jsx-scope':'off',
    'prettier/prettier':'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": [
          "const",
          "let",
          "var",
          "for",
          "if",
          "case",
          "function",
          "expression",
          "switch"
        ],
        "next": "*"
      },
      {
        "blankLine": "always",
        "prev": ["const", "let", "var"],
        "next": ["const", "let", "var"]
      },
      { "blankLine": "always", "prev": "*", "next": "return" }
    ],
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          ["^react", "^@?\\w"],
          [
            // Add alias name here to add it to this group of imports
            "^(@|@root)(/.*|$)"
          ],
          ["^\\u0000"],
          ["^\\.\\.(?!/?$)', '^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$"],
          ["^.+\\.?(css)$"]
        ]
      }
    ]
  },
}
