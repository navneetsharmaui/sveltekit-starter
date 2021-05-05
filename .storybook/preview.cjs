/* jshint esversion: 9 */

const { withInfo } = require('@storybook/addon-info');
// import '!style-loader!css-loader!sass-loader!./scss-loader.scss';

import '../static/global.css';

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
