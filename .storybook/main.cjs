/* jshint esversion: 9 */

const postcss = require('postcss');
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-svelte-csf',
		'@storybook/addon-cssresources',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: postcss,
				},
			},
		},
		'@storybook/preset-scss',
	],
	svelteOptions: {
		preprocess: [
			sveltePreprocess({
				postcss: true,
				scss: {
					prependData: `@import 'src/styles/variables/index.scss';`,
					outputStyle: 'compressed',
				},
				preserve: ['ld+json'],
			}),
		],
	},
};
