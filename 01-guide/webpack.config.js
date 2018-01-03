const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJs = require('uglify-es')

module.exports = {
	entry: {
		app: './src/index.js',
		print: './src/print.js',
	},

	devtool: 'inline-source-map',

	plugins: [
		new CleanWebpackPlugin(['dist']),

		new HTMLWebpackPlugin({
			title: 'Output Management'
		})
	],

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}