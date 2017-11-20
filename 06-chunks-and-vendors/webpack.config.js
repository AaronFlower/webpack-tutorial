const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
  devtool: '#cheap-module-source-map',
	entry: {
		app: './src/main.js',
		moduleA: './src/moduleA.js',
		moduleB: './src/moduleB.js',
		moduleC: './src/moduleC.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].[chunkhash].js'
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'Webpack CommonsChunkPlugin'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'self.lodash.vendor', 
			chunks: ['main', 'moduleA', 'moduleB', 'moduleC'] // 如果不指定 chunks 则 entry 的所有 chunk 都会被选中。
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			minChunks: Infinity
		})
	]
}