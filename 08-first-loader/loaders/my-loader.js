const loaderUtils = require('loader-utils')

module.exports = function (source) {
	console.log('my-loader')
	let options = loaderUtils.getOptions(this) || {}
	let result = source.replace(/world/ig, options.name || 'webpack')
	return result
}