/* jshint esversion: 9 */

const { withInfo } = require('@storybook/addon-info');

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	decorators: [withInfo],
};
