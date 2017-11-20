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
		filename: '[name].js'
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

	plugins: [
	  // new webpack.optimize.CommonsChunkPlugin({
	  //   name: "vendor",
	  //   minChunks: function(module){
	  //     return module.context && module.context.indexOf("node_modules") !== -1;
	  //   }
	  // }),
	  // new webpack.optimize.CommonsChunkPlugin({
	  //   name: "manifest",
	  //   minChunks: Infinity
	  // }),
		// new webpack.optimize.CommonsChunkPlugin({
		//   name: 'vendor'
		// }),
		// // split vendor js into its own file
		// new webpack.optimize.CommonsChunkPlugin({
		//   name: 'vendor',
		//   minChunks: function (module, count) {
		//     // any required modules inside node_modules are extracted to vendor
		//     return (
		//       module.resource &&
		//       /\.js$/.test(module.resource) &&
		//       module.resource.indexOf(
		//         path.join(__dirname, '../node_modules')
		//       ) === 0
		//     )
		//   }
		// }),
		// extract webpack runtime and module manifest to its own file in order to
		// prevent vendor hash from being updated whenever app bundle is updated
		// new webpack.optimize.CommonsChunkPlugin({
		//   name: 'manifest',
		//   chunks: ['vendor']
		// }),
		// Important: this splits the webpack runtime into a leading chunk
		// so that async chunks can be injected right after it.
		// this also enables better caching for your app/vendor code.
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'manifest',
		// 	minChunks: Infinity
		// }),
		// This plugins generates `vue-ssr-client-manifest.json` in the
		// output directory.
		new VueSSRClientPlugin()
	]
}
