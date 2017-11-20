const webpack = require('webpack')
const path  = require('path')

module.exports = {
	entry: './src/index.js',
	
	output: {
		path: path.resolve(__dirname, 'build/dist'),
		publicPath: 'build/dist', // 一定要加上这个哟，因为 webpack-dev-server 在编译时是打包在内存里的，需要知道这个配置。
		filename: 'bundle.js'
	},

	devServer: {
		noInfo: true,
		historyApiFallback: true 
	},

	resolve: {
		extensions: ['.js', '.vue']
	}, 

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]	
	}
	
}	
