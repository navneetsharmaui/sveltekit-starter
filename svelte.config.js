/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* jshint esversion: 9 */

// command env properties
const hasAdapter = process.env.ADAPTER;
const adapt = hasAdapter ? hasAdapter : 'node';
const isSSR = process.env.SSR ? true : false;
const isAMP = process.env.AMP ? true : false;

// Imports
import sveltePreprocess from 'svelte-preprocess';
import { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

// Adapters
import staticAdapter from '@sveltejs/adapter-static';
import nodeAdapter from '@sveltejs/adapter-node';
import netlifyAdapter from '@sveltejs/adapter-netlify';
import vercelAdapter from '@sveltejs/adapter-vercel';

// Custom require function as replacement for the require from the commonJS in ES Module
const customRequire = createRequire(import.meta.url); // jshint ignore:line

// Custom __dirname as replacement for the __dirname from the commonJS in ES Module
const __dirname = dirname(fileURLToPath(import.meta.url)); // jshint ignore:line
const pkg = customRequire('./package.json');

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
		sveltePreprocess({
			defaults: {
				style: 'scss',
			},
			postcss: true,
			scss: {
				prependData: `@import 'src/styles/variables/index.scss';`,
				outputStyle: 'compressed',
			},
		}),
	],
	kit: {
		ssr: isSSR,
		amp: isAMP,
		target: '#starter',
		prerender: {
			crawl: true,
			enabled: true,
			force: true,
			pages: ['*'],
		},
		vite: () => ({
			ssr: {
				noExternal: [...Object.keys(pkg.dependencies || {})],
			},
			resolve: {
				alias: {
					$components: resolve(__dirname, './src/lib/shared/components'),
					$ui: resolve(__dirname, './src/lib/shared/ui'),
					$shared: resolve(__dirname, './src/lib/shared'),
					$models: resolve(__dirname, './src/lib/models'),
					$data: resolve(__dirname, './src/lib/data'),
					$core: resolve(__dirname, './src/lib/core'),
					$utils: resolve(__dirname, './src/lib/utils'),
				},
			},
		}),
	},
};

if (hasAdapter) {
	config.kit.adapter = adapter(options);
}

export default config;
