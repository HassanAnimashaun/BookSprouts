import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      globals: globals.node,
      sourceType: 'module',
    },
  },
  js.configs.recommended,
];
