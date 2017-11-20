/**
 * 利用该 webpack config 文件生成 vue-ssr-server-bundle.json 供 ssr 渲染。
 */
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const projectRoot = path.resolve(__dirname, '../')
const buildPath = path.resolve(projectRoot, 'dist')
const srcPath = path.resolve(projectRoot, 'src')

module.exports = {
	entry: {
		app: './src/entry-server.js'
	},

	// output: {
	//   filename: 'server-bundle.js',
	//   libraryTarget: 'commonjs2'
	// },

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
					// fix: true
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: '/node_modules/'
			}
		]
	},

	target: 'node',

	 // For bundle renderer source map support
	 devtool: 'source-map',

	 // This tells the server bundle to use Node-style exports
	 output: {
	   libraryTarget: 'commonjs2',
	   filename: '[name].js',
	   path: buildPath
	 },

	 // https://webpack.js.org/configuration/externals/#function
	 // https://github.com/liady/webpack-node-externals
	 // Externalize app dependencies. This makes the server build much faster
	 // and generates a smaller bundle file.
	 externals: nodeExternals({
	   // do not externalize dependencies that need to be processed by webpack.
	   // you can add more file types here e.g. raw *.vue files
	   // you should also whitelist deps that modifies `global` (e.g. polyfills)
	   whitelist: /\.css$/
	 }),

	 // This is the plugin that turns the entire output of the server build
	 // into a single JSON file. The default file name will be
	 // `vue-ssr-server-bundle.json`
	 plugins: [
	   new VueSSRServerPlugin()
	 ]
}