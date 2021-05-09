/* jshint esversion: 9 */

const postcssMixins = require('postcss-mixins');
const postcssAtRulesVariables = require('postcss-at-rules-variables');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const postcssNested = require('postcss-nested');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const purgeCSS = require('@fullhuman/postcss-purgecss');

/**
 * If You are using the only postcss for the whole application,
 * you will need to create a separate js file where you define the global variables.
 */
// const variables = require('./config/postcss/variables.cjs');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
	syntax: 'postcss-scss',
	plugins: [
		postcssMixins(),
		postcssAtRulesVariables(),
		postcssImport(),
		postcssSimpleVars(),
		postcssNested(),
		tailwindcss(),
		purgeCSS({
			content: ['./src/**/*.{svelte, html, postcss, scss}'],
			defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
		}),
		autoprefixer({
			cascade: true,
		}),
		!dev &&
			cssnano({
				preset: 'default',
			}),
	],
};
