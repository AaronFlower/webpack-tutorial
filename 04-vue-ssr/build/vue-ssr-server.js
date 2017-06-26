const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const server = require('express')()
// 加载 config-server 的配置
const webpackConfig = require('./config-server')
const compiler = webpack(webpackConfig)

/**
 * 把 webpack config-server.js 的生成的 json 文件加载过来。
 */
const {createBundleRenderer} = require('vue-server-renderer')

/**
 * 要传一个 template 不然 css 都不知道注入那里。
 * createBundleRenderer 是用来解决开发时支持 hot-module-replacement 的，如果不支持 HMR 还有什么意思那？
 */
/**
 * template 支持一些高级特性：
 * Auto injection of critical CSS when using *.vue components;
 * Auto injection of asset links and resource hints when using clientManifest;
 * Auto injection and XSS prevention when embedding Vuex state for client-side hydration.
 */
const renderer = createBundleRenderer(
	JSON.parse(fs.readFileSync(path.resolve(__dirname, './build/dist/vue-ssr-server-bundle.json')), 'utf-8'), 
	{
		template: fs.readFileSync(path.resolve(__dirname, '../src/index.template.html'), 'utf-8') 
	}
)

/**
 * server-side 在开发时应该支持 hot-module-replacement 才行。
 */
server.get('*', (req, res) => {
	let context = {
		url: req.url
	}

	renderer.renderToString(context, (err, html) => {
	  if (err) {
	  	if (err.code === 404) {
	  		res.status(404).end('Page not found')
	  	} else {
		  	console.log(err)
		  	res.status(500).end('Internal Server Error!')
	  	}
	  } else {
		  console.log(html)
		  res.end(html)
	  }
	})
})

server.listen(8087, () => {
  console.log('The server is listening at: http://localhost:8087')
})
