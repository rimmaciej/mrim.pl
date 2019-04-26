'use strict';
const path = require('path');
const baseConf = require('./webpack.base.js');
const merge = require('webpack-merge');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(baseConf, {
	mode: 'development',

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['vue-style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader', 'sass-loader']
			}
		]
	},

	devServer: {
		contentBase: path.join(__dirname, '../dist'),
		compress: true,
		host: '0.0.0.0',
		port: 8080,
		hot: true,
		quiet: true
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new FriendlyErrorsWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, '../dist/index.html'),
			template: 'src/index.html',
			inject: true
		})
	]
});
