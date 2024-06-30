// @ts-check 
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  env: {es2021: true, node: true},
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  extends: {
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings,'
		'plugin:import/typescript,'
  }
  {
    languageOptions: {
        parser: '@typescript-eslint/parser',
				parserOptions: {
        project: true,
				tsconfigRootDir: import.meta.dirname,
      },

    },
  },
  {
    files: ['**/*.js'],
  }
);



