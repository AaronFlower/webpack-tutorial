const path = require('path')
const webpack = require('webpack')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = {
  /**
   * 需要配置我个 entry 了，先配置下和往长一样的 entry-client.js
   */
	entry: './src/entry-client.js',

	output: {
		path: path.resolve(__dirname, '../dist/client'),
		publicPath: '/dist/client',
		filename: 'main.js'
		// chunkFilename: '[id].[chunkhash].js'
	},

	devServer: {
		// noInfo: true,
		port: 8081
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},

	// plugins: [
	// 	// Important: this splits the webpack runtime into a leading chunk
	// 	// so that async chunks can be injected right after it.
	// 	// this also enables better caching for your app/vendor code.
	// 	// new webpack.optimize.CommonsChunkPlugin({
	// 	// 	name: 'manifest',
	// 	// 	minChunks: Infinity
	// 	// }),
	// 	// This plugins generates `vue-ssr-client-manifest.json` in the
	// 	// output directory.
	// 	// new VueSSRClientPlugin()
	// ]
}
