const path = require('path')
const fs = require('fs')
const express = require('express')
const VueServerRenderer = require('vue-server-renderer')
const { createBundleRenderer } = require('vue-server-renderer')

const serverBundleJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../dist/vue-ssr-server-bundle.json'), 'utf-8'))
const template = fs.readFileSync(path.resolve(__dirname, '../src/index.template.html'), 'utf-8')
const clientManifest = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../dist/vue-ssr-client-manifest.json'), 'utf-8')) 
const render = createBundleRenderer(serverBundleJson, {
	template,
	clientManifest
})


const app = express()
app.use('/client', express.static(path.resolve(__dirname, '../dist')))
app.get('/', (req, res) => {
	render.renderToString((err, html) => {
		if (err) {
			console.log(err)
			res.status(500).end('Internal Server Error!')
		} else {
			// console.log(html)
			res.end(html)
		}
	})
})

app.listen(process.env.PORT || 8082, () => {
	console.log('The server is listening at http://localhost:8082\n')
})
