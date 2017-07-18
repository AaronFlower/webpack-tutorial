const path = require('path')

module.exports = {
	entry: './src/index.js',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	resolveLoader: {
		alias: {
			'my-loader': path.resolve(__dirname, 'loaders/my-loader.js')
		}
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'my-loader',
					options: {
						name: 'webpack 2'
					}
				}
			}
		]
	}
}