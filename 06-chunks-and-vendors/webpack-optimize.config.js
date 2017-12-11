const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
  devtool: '#cheap-module-source-map',
	entry: {
		app: './src/main.js',
		moduleA: './src/moduleA.js',
		moduleB: './src/moduleB.js',
		moduleC: './src/moduleC.js',
		modulejQueryA: './src/modulejQueryA.js',
		modulejQueryB: './src/modulejQueryB.js',
		modulejQueryC: './src/modulejQueryC.js',
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
			chunks: ['moduleA', 'moduleB', 'moduleC'] // 如果不指定 chunks 则 entry 的所有 chunk 都会被选中。 你会看到 app 引入的 lodash 更大。
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			minChunks: Infinity
		})
	]
}