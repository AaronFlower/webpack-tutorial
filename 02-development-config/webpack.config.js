const path = require('path')
const htmlPlugin = require('html-webpack-plugin')

let config = {
	'entry': './src/index.js',
	
	'output': {
		'path': path.resolve(__dirname, 'build/dist'),
		'filename': 'bundle.js'
	},

	'plugins': [
		new htmlPlugin()
	]
}

module.exports = config
