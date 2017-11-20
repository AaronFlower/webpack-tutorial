var path = require('path')
var distPath = path.resolve(__dirname)
var ExtractTextPlugin = require('extract-text-webpack-plugin')

let config = {
	entry: './index.js',
	output: {
		path: distPath,
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader', // style-loader 需要 https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/503 fallback-only
					use: [
						'css-loader',
						'postcss-loader'
					]
				})
			}
		]
	},

	plugins: [
		new ExtractTextPlugin('index.css')
	]
}

module.exports = config

