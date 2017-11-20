/* 
// 可以自己指定位置。
const atImport = require('postcss-import')
console.log('with: postcss.config.js')
module.exports = {
	plugins: [atImport]
}
*/
// https://www.npmjs.com/package/postcss-import-webpack-resolver  fixed https://github.com/postcss/postcss-import/issues/190#issuecomment-298078092
const createResolver = require('postcss-import-webpack-resolver')
const webpackConfig = require('./webpack.config.js')

/**
 * 也可以让 Postcss 帮你引入。
 */
module.exports = {
	plugins: {
		'postcss-import': {
			resolve: createResolver({
				alias: webpackConfig.resolve.alias,
				modules: ['./', 'node_moduels']
			})
		}
	}
}