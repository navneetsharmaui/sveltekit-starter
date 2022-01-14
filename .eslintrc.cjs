/* jshint esversion: 11 */

const typescript = require('typescript');

module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
		extraFileExtensions: ['.svelte'],
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	rules: {
		semi: ['error', 'always'],
		'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
		'tsdoc/syntax': 'warn',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'import/prefer-default-export': 'off',
		'import/no-mutable-exports': 0,
		'no-labels': 0,
		'no-restricted-syntax': 0,
	},
	overrides: [
		{
			files: ['**/*.svelte'],
			processor: 'svelte3/svelte3',
			rules: {
				'import/no-unresolved': 'off',
				'import/first': 'off',
				'import/no-duplicates': 'off',
				'import/no-mutable-exports': 'off',
				'import/extensions': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/no-unsafe-argument': 'off',
				'@typescript-eslint/restrict-template-expressions': [
					'warn',
					{
						allowNumber: true,
						allowBoolean: true,
						allowNullish: true,
						allowAny: true,
					},
				],
			},
		},
	],
	settings: {
		'svelte3/typescript': () => typescript,
		'svelte3/ignore-styles': () => true,
		'import/extensions': ['.js', '.ts'],
		'import/resolver': {
			node: {
				extensions: ['.js', '.ts'],
			},
			typescript: {},
		},
	},
	plugins: ['svelte3', '@typescript-eslint', 'eslint-plugin-tsdoc'],
	extends: [
		'airbnb-base',
		'airbnb-typescript/base',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:eslint-comments/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'prettier',
	],
	ignorePatterns: ['*.cjs', 'static/*.js', 'svelte.config.js', 'scripts/js/*.ts'],
	env: {
		browser: true,
		node: true,
		es2020: true,
	},
};
