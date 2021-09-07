/* jshint esversion: 9 */
const typescript = require('typescript');

module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => typescript,
		'svelte3/ignore-styles': () => true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	env: {
		browser: true,
		node: true,
		es2020: true,
	},
	rules: {
		semi: ['error', 'always'],
		'no-console': ['warn'],
	},
};
