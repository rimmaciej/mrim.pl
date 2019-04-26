'use strict';
const path = require('path');
const baseConf = require('./webpack.base.js');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConf, {
	mode: 'production',

	output: {
		publicPath: '.'
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
			new OptimizeCSSAssetsPlugin({})
		]
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},

			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin({
			root: path.resolve(__dirname, '..'),
			verbose: true,
			dry: false
		}),

		new MiniCssExtractPlugin({
			filename: 'css/[name].bundle.css'
		}),

		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, '../dist/index.html'),
			template: 'src/index.html',
			inject: true
		})
	]
});
