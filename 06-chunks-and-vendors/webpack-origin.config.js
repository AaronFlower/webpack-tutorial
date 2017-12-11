const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
	entry: {
		app: './src/main.js',
		moduleA: './src/moduleA.js',
		moduleB: './src/moduleB.js',
		moduleC: './src/moduleC.js',
		modulejQueryA: './src/modulejQueryA.js',
		modulejQueryB: './src/modulejQueryB.js',
		modulejQueryC: './src/modulejQueryC.js'
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
			names: ['vendor'], 
			// chunks: ['moduleA', 'moduleB', 'moduleC'],
			minChunks: 4 
		})
	]
}