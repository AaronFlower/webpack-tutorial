const path = require('path')

module.exports = {
	entry: './src/index.js',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	resolveLoader: {
		alias: {
			'my-loader': path.resolve(__dirname, 'loaders/my-loader.js'),
			'capitalizer': path.resolve(__dirname, 'loaders/capitalizer-loader.js')
		}
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				/**
				 * 可以使用 use 传递 loader 数组。
				 */
				use: [
					{
						loader: 'my-loader',
						options: {
							name: 'webpack 2'
						}
					},
					'capitalizer'
				]
			}
		]
	}
}