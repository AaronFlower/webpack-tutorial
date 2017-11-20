var fs = require('fs')
var postcss = require('postcss')
var atImport = require('postcss-import')


// css to be processed
var css = fs.readFileSync('input.css', 'utf8')

// process css
// postcss()
// 	.use(atImport) // 使用插件与 postcss([atImport()]) 一样

// postcss([atImport])
postcss().use(atImport)
	.process(css, {
		from: 'input.css'
	})
	.then((result) => {
		var output = result.css
		console.log(output)
	})
