'use strict';
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.js'
	},

	output: {
		filename: 'js/[name].bundle.js',
		path: './dist/'
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader'
				}
			},
			{
				test: /\.(css|sass|scss)$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{
						loader: 'sass-loader',
						options: { implementation: require('sass') }
					}
				]
			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'assets/fonts/[name].[ext]'
					}
				}
			}
		]
	},

	plugins: [
		new HtmlPlugin({
			template: './src/index.html',
			filename: './index.html',
			favicon: './src/assets/icons/icon.png'
		}),
		new CopyPlugin([
			{
				from: './src/assets/',
				to: './assets/',
				toType: 'dir'
			}
		])
	]
};
