const path = require('path')
const webpack = require('webpack')
const webpackHtmlPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].[hash:5]',
		path: path.resolve(__dirname, './dist')
	},
	resolve: {
		alias: {
			Components: path.resolve(__dirname, 'src/components')
		},
		extensions: ['.js', '.vue']
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},

	devServer: {
		port: 3000
	},

	plugins: [
		new webpackHtmlPlugin({
			template: './src/index.html'
		}),
		// new webpack.HotModuleReplacementPlugin()
	]
}