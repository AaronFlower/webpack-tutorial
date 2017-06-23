const path = require('path')
const distPath = path.resolve(__dirname, 'dist')

let config = {
	'entry': './src/index.js',
	'output': {
		'path': distPath,
		'filename': 'bundle.js',
	}
}

module.exports = config
