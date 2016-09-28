	// var precss 	= require('precss')
	// var autoprefixer = require('autoprefixer')
	module.exports = {
		entry: './app.js',
		output: {
			path: './dist', // 路径不存在，会自动创建。
			filename: 'bundle.js'
		},
		module: {
		    loaders: [
		    	{
		        test: /\.js$/,
		        exclude: /node_modules/,
		        loader: 'babel-loader'
		      },
		      {
		      	test: /\.css$/,
		      	exclude: /node_modules/,
		      	// loaders: ['style', 'css'], // 顺序从右向左，支持loaders 和loader两种写法。
		      	loader: 'style!css'
		      }
		    ]
		}
	}
