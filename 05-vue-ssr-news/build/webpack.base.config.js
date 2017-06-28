const path = require('path')
const webpack = require('webpack')
const htmlPlugin = require('html-webpack-plugin')

const projectRoot = path.resolve(__dirname, '../')
const buildPath = path.resolve(projectRoot, 'dist')
const srcPath = path.resolve(projectRoot, 'src')

module.exports = {
	entry: {
		app: './src/main.js'
	},

	output: {
		path: buildPath,
		filename: 'bundle.js'
	},

	resolve: {
		extensions: ['.js', '.json', '.vue']
	},

	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.(js)$/,
				loader: 'eslint-loader',
				exclude: '/node_modules/',
				include: projectRoot,
				options: {
					fix: true
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: '/node_modules/'
			}
		]
	},

	devServer: {
		port: 3033
	},

	plugins: [
		new htmlPlugin({
			title: 'Vue-SSR',
			template: path.resolve(srcPath, './index.html')
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}