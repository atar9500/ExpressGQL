module.exports = {
  extends: 'airbnb-base',
  root: true,
  plugins: ['@typescript-eslint', 'prettier', 'import', '@welldone-software'],
  rules: {
    'no-unused-vars': ['warn'],
    'no-var': ['error'],
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
    'no-console': ['warn', {allow: ['error', 'warn']}],
    '@typescript-eslint/no-explicit-any': 'error',
    '@welldone-software/modules-engagement': 'error',
  },
};
