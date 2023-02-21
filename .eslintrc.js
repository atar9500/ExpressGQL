module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['generated.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', '@welldone-software'],
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          'index',
          'object',
          ['parent', 'sibling'],
        ],
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'no-debugger': 'warn',
  },
};
