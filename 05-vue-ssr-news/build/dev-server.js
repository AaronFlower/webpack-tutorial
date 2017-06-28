const webpack = require('webpack')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')

const baseConfig = require('./webpack.base.config')
const compiler = webpack(baseConfig)

const app = express()
app.use(webpackDevMiddleware(compiler, {
	noInfo: false,
	publicPath: '/',
	stats: {
		colors: true
	}
}))


app.listen(3033, (err) => {
	if (err) {
		console.log(err)
	} else {
		console.log('The server is listening at : http://localhost:3033')
	}
})

