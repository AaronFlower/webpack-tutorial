const webpack = require('webpack')
const path  = require('path')

module.exports = {
	entry: './src/index.js',
	
	output: {
		path: path.resolve(__dirname, 'build/dist'),
		filename: 'bundle.js'
	},

	devServer: {
		noInfo: true,
		historyApiFallback: true 
	}

}	
