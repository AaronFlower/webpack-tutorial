const webpack = require('webpack')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const baseConfig = require('./webpack.base.config')

Object.keys(baseConfig.entry).forEach(name => {
	baseConfig.entry[name] = ['webpack-hot-middleware/client'].concat(baseConfig.entry[name])
})
console.log(baseConfig.entry)
const compiler = webpack(baseConfig)

const app = express()
/**
 * https://github.com/webpack/webpack-dev-middleware
 */
 app.use(webpackDevMiddleware(compiler, {
	noInfo: false,
	publicPath: '/',
	stats: {
		colors: true
	}
}))

/**
 * https://www.npmjs.com/package/webpack-hot-middleware
 * 对于 IE 可能需要 EventSource polyfill https://libraries.io/search?platforms=NPM&q=eventsource+polyfill
 */
app.use(webpackHotMiddleware(compiler, {
	noInfo: true,
	publicPath: '/'
}))

app.listen(3033, (err) => {
	if (err) {
		console.log(err)
	} else {
		console.log('The server is listening at : http://localhost:3033')
	}
})

