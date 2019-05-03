'use strict';
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const GoogleFonts = require('@beyonk/google-fonts-webpack-plugin');

module.exports = {
	entry: {
		main: './src/main.js'
	},

	output: {
		filename: 'js/[name].bundle.js',
		path: path.resolve(__dirname, '../dist/')
	},

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
	]
};
