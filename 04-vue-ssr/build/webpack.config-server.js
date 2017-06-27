/**
 * 
 * @type {[type]}
 */
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = {
  /**
   * 这里是使用 entry-server.js 作为入口。
   * Point entry to your app's server file
   */
	entry: './src/entry-server.js',

	// This allows webpack to handle dynamic imports in a Node-appropriate
  // fashion, and also tells `vue-loader` to emit server-oriented code when
  // compiling Vue components.
	target: 'node', 

	// For bundle renderer source map support
	devtool: 'source-map',

	output: {
		libraryTarget: 'commonjs2', // This tells the server bundle to use Node-style exports
		path: path.resolve(__dirname, '../dist/server'),
		// publicPath: '',
		filename: 'server-bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},

	externals: nodeExternals({
	  // do not externalize dependencies that need to be processed by webpack.
	  // you can add more file types here e.g. raw *.vue files
	  // you should also whitelist deps that modifies `global` (e.g. polyfills)
	  whitelist: /\.css$/
	}),

	plugins: [
		new VueSSRServerPlugin()
	]
}
