export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	decorators: [require('@storybook/addon-info').withInfo],
	apolloClient: {
		MockedProvider: require('@apollo/client/testing').MockedProvider,
	},
};
