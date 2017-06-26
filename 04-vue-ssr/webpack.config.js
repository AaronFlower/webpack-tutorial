const path = require('path')

module.exports = {
  /**
   * 需要配置我个 entry 了，先配置下和往长一样的 entry-client.js
   */
	entry: './src/entry-client.js',

	output: {
		path: path.resolve(__dirname, 'build/dist'),
		publicPath: '/build/dist',
		filename: 'bundle.js'
	},

	devServer: {
		noInfo: true
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
