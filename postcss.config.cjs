/* jshint esversion: 9 */

const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const postcssNested = require('postcss-nested');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
	syntax: 'postcss-scss',
	plugins: [
		postcssImport(),
		postcssNested(),
		tailwindcss(),
		autoprefixer({
			cascade: true,
		}),
		!dev &&
			cssnano({
				preset: 'advanced',
			}),
	],
};

module.exports = config;
