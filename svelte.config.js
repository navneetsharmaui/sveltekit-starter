/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* jshint esversion: 9 */

// command env properties
const hasAdapter = process.env.ADAPTER;
const adapt = hasAdapter ? hasAdapter : 'node';
const isAMP = process.env.AMP ? true : false;

// Imports
import { imagetools } from 'vite-imagetools';

import preprocess from 'svelte-preprocess';
import { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Adapters
import staticAdapter from '@sveltejs/adapter-static';
import nodeAdapter from '@sveltejs/adapter-node';
import netlifyAdapter from '@sveltejs/adapter-netlify';
import vercelAdapter from '@sveltejs/adapter-vercel';

// Custom require function as replacement for the require from the commonJS in ES Module

// Custom __dirname as replacement for the __dirname from the commonJS in ES Module
const __dirname = dirname(fileURLToPath(import.meta.url)); // jshint ignore:line

const options = JSON.stringify(process.env.OPTIONS || '{}');

const getAdapters = (adapt) => {
	switch (adapt) {
		case 'node':
			return nodeAdapter;
		case 'static':
			return staticAdapter;
		case 'netlify':
			return netlifyAdapter;
		case 'vercel':
			return vercelAdapter;
		default:
			return nodeAdapter;
	}
};

const adapter = getAdapters(adapt);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
			scss: {
				prependData: `@import 'src/styles/variables/index.scss';`,
				outputStyle: 'compressed',
			},
			preserve: ['ld+json'],
		}),
	],

	kit: {
		target: '#starter',
		ssr: true,
		amp: isAMP,
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'fail',
			pages: ['*'],
		},
		vite: () => ({
			resolve: {
				alias: {
					$stores: resolve(__dirname, './src/stores'),
					$components: resolve(__dirname, './src/lib/shared/components'),
					$ui: resolve(__dirname, './src/lib/shared/ui'),
					$layouts: resolve(__dirname, './src/lib/layouts'),
					$shared: resolve(__dirname, './src/lib/shared'),
					$models: resolve(__dirname, './src/lib/models'),
					$data: resolve(__dirname, './src/lib/data'),
					$core: resolve(__dirname, './src/lib/core'),
					$utils: resolve(__dirname, './src/lib/utils'),
					$environment: resolve(__dirname, './src/environments'),
				},
			},
			envPrefix: ['VITE_', 'SVELTEKIT_STARTER_'],
			plugins: [imagetools({ force: true })],
		}),
	},
};

if (hasAdapter) {
	config.kit.adapter = adapter(options);
}

export default config;
