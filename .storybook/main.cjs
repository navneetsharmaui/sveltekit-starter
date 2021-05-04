/* jshint esversion: 9 */

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-a11y',
		'@storybook/addon-storyshots',
		'@storybook/addon-essentials',
		'@storybook/addon-knobs',
		'@storybook/addon-events',
		'@storybook/addon-queryparams',
		'@storybook/addon-cssresources',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
		'@storybook/addon-svelte-csf',
	],
	svelteOptions: {
		preprocess: require('../svelte.config.cjs').preprocess,
	},
};
