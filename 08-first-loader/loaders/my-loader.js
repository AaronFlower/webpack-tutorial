const loaderUtils = require('loader-utils')

module.exports = function (source) {
	let options = loaderUtils.getOptions(this) || {}
	let result = source.replace('world', options.name || 'webpack')
	return result
}