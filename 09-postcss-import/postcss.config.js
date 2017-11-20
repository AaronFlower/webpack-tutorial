/* 
// 可以自己指定位置。
const atImport = require('postcss-import')
console.log('with: postcss.config.js')
module.exports = {
	plugins: [atImport]
}
*/

/**
 * 也可以让 Postcss 帮你引入。
 */
module.exports = {
	plugins: {
		'postcss-import': {}
	}
}