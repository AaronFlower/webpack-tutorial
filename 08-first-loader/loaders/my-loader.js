module.exports = function (source) {
	console.log(source)
	let result = source.replace('world', 'Webpack')
	return result
}