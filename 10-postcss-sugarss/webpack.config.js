const path = require('path')
const ExtractPlugin = require('extract-text-webpack-plugin')

let config = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname),
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /sss$/,
				use: ExtractPlugin.extract({
					use: [
						'css-loader',
						'postcss-loader?parser=sugarss'
					]
				})
			}
		]
	},

	plugins: [
		new ExtractPlugin('index.css')
	]

}

module.exports = config
