const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let config = {
	'entry': './src/index.js',
	
	'output': {
		'path': path.resolve(__dirname, 'build/dist'),
		'filename': 'bundle.js'
	},

	'devtool': 'cheap-eval-source-map',

	'plugins': [
		new htmlPlugin(),
		new BundleAnalyzerPlugin()
	],
	'devServer': {
		'port': 8083
	}
}

module.exports = config
