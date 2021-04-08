/* jshint esversion: 9 */

const { withInfo } = require('@storybook/addon-info');
const { MockedProvider } = require('@apollo/client/testing');

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	decorators: [withInfo],
	apolloClient: {
		MockedProvider: MockedProvider,
	},
};
