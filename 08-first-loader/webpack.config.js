module.exports = {
	entry: './src/index.js',

	output: {
		filename: 'bundle.js',
		path: require('path').resolve(__dirname, 'dist')
	}
}