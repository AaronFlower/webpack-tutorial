const path = require('path')
const distPath = path.resolve(__dirname, 'dist')
const htmlPlugin = require('html-webpack-plugin')

let config = {
	'entry': './src/index.js',
	'output': {
		'path': distPath,
		'filename': 'bundle.js',
	},

	'plugins': [
		new htmlPlugin({
			title: 'Webpack getting started'
		})
	]
}

module.exports = config
