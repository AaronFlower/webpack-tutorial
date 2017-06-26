/**
 * 针对  client-entry.js 我们的 webpack 文件根本不需要任务变化，
 * 但是针对我们自己启动一个 NodeJS 服务器来加载 entry-server.js 变化就大了。
 */
 // 从 entry-server 加载。
 const createApp = require('./src/entry-server')
 const server = require('express')()

 server.get('*', (req, res) => {
   const context = { url: req.url }
   const app = createApp(context)

   renderer.renderToString(app, (err, html) => {
     // handle error...
     res.end(html)
   })
 })


 // const fs = require('fs')
 // const createApp = require('./app')
 // // 编译好的代码注入 template 模版中。
 // const renderer = require('vue-server-renderer').createRenderer({
 // 	template: fs.readFileSync('../02-index.template.html', 'utf-8')
 // })

 // const server = require('express')()

 // server.get('*', (req, res) => {
 // 	const context = {url: req.url}
 // 	const app = createApp(context)

 // 	renderer.renderToString(app, (err, html) => {
 // 		if (err) {
 // 			console.log(err)
 // 			res.status(500).end('Internal Server Error')
 // 		}
 // 		console.log(html)
 // 		res.end(html)
 // 	})
 // })

 console.log('The server is listening in: http:://localhost:8082')
 server.listen(8082)

