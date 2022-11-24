/* jshint esversion: 11 */

// Imports
import preprocess from 'svelte-preprocess';

// Adapters
import vercelAdapter from '@sveltejs/adapter-vercel';

// Custom require function as replacement for the require from the commonJS in ES Module

const options = JSON.stringify(process.env.OPTIONS || '{}');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
			preserve: ['ld+json', 'module'],
			typescript: true,
		}),
	],

	kit: {
		adapter: vercelAdapter(options),
		prerender: {
			crawl: true,
			handleHttpError: 'fail',
			entries: ['*'],
		},
	},
};

export default config;
