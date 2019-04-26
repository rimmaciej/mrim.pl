'use strict';
const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GoogleFonts = require('@beyonk/google-fonts-webpack-plugin');

module.exports = {
	entry: {
		main: './src/main.js'
	},

	output: {
		filename: 'js/[name].bundle.js',
		path: path.resolve(__dirname, '../dist/')
	},

	// resolve: {
	// 	alias: {
	// 		GlobalStyle: path.resolve(__dirname, '../src/global.scss')
	// 	}
	// },

	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},

			{
				test: /\.js$/,
				use: 'babel-loader'
			}
		]
	},

	plugins: [
		new VueLoaderPlugin(),

		new GoogleFonts({
			fonts: [{ family: 'Josefin Sans', variants: ['100'] }]
		})

		// new CopyWebpackPlugin([
		// 	{
		// 		from: path.resolve(__dirname, '../src/assets'),
		// 		to: path.resolve(__dirname, '../dist/'),
		// 		toType: 'dir'
		// 	}
		// ])
	]
};
