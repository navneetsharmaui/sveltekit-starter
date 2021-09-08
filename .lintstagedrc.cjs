/* jshint esversion: 9 */

module.exports = {
	'*.{js,ts,json,svelte}': ['npm run format', 'git add'],
	'./src/**/*.{svelte,ts}': ['npm run format', 'git add', 'npm run lint:fix'],
	'./.{ts,cjs,js}': ['npm run lint:fix'],
};
