/* jshint esversion: 9 */

const postcssMixins = require('postcss-mixins');
const postcssAtRulesVariables = require('postcss-at-rules-variables');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const postcssNested = require('postcss-nested');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const variables = require('./config/postcss/variables.cjs');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
	syntax: 'postcss-scss',
	plugins: [
		postcssMixins(),
		postcssAtRulesVariables(),
		postcssImport(),
		postcssSimpleVars({
			variables: variables,
		}),
		postcssNested(),
		tailwindcss(),
		autoprefixer(),
		!dev &&
			cssnano({
				preset: 'default',
			}),
	],
};
