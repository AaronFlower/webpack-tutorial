const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
	entry: {
		vendor: ['lodash'],
		main: './src/main.js',
		moduleA: './src/moduleA.js',
		moduleB: './src/moduleB.js',
		moduleC: './src/moduleC.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'Webpack CommonsChunkPlugin'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		})
	]
}