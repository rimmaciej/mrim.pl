'use strict';
const merge = require('webpack-merge');

// Plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ExtractCss = require('mini-css-extract-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');

module.exports = merge(require('./config.js'), {
	mode: 'production',

	output: {
		publicPath: '/'
	},

	optimization: {
		minimizer: [
			new TerserPlugin({
				cache: true,
				parallel: true,
				sourceMap: false,
				terserOptions: {
					compress: {
						dead_code: true,
						conditionals: true,
						booleans: true,
						ecma: 6
					}
				}
			}),
			new OptimizeCss({})
		]
	},

	plugins: [
		new CleanWebpackPlugin(),
		new ExtractCss({
			filename: 'css/[name].bundle.css'
		})
	]
});
