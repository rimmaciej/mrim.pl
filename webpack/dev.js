'use strict';
const { merge } = require('webpack-merge');
const webpack = require('webpack');

const FriendlyErrors = require('friendly-errors-webpack-plugin');

module.exports = merge(require('./config.js'), {
	mode: 'development',

	devServer: {
		contentBase: './dist',
		compress: true,
		host: '0.0.0.0',
		port: 5000,
		hot: true,
		quiet: true,
	},

	plugins: [new webpack.HotModuleReplacementPlugin(), new FriendlyErrors()],
});
