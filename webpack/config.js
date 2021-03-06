'use strict';
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.jsx',
	},

	output: {
		filename: 'js/[name].[hash].js',
		path: path.join(__dirname, '../dist/'),
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				resolve: { extensions: ['.js', '.jsx'] },
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
				},
			},
			{
				test: /\.(ttf|eot|woff|woff2|svg)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'assets/fonts/[name].[ext]',
					},
				},
			},
		],
	},

	plugins: [
		new HtmlPlugin({
			template: './assets/index.html',
			filename: './index.html',
			favicon: './assets/icon.png',
		}),
		new CopyPlugin({
			patterns: [
				{
					from: './assets/',
					to: './assets/',
					toType: 'dir',
				},
			],
		}),
	],
};
