const UglifyJS = require('uglify-es')

const code = `
	function component() {
		var element = document.createElement('div')
		
		element.innerHTML = ['Hello', 'webpack'].join(' ')
		element.classList.add('hello')

		var btn = document.createElement('button')
		btn.innerHTML = 'Click me and check the console!'
		btn.onclick = printMe

		element.appendChild(btn)

		return element
	}

	document.body.appendChild(component())
`

var result = UglifyJS.minify(code, {
    parse: {},
    compress: false,
    mangle: false,
    output: {
        ast: true,
        code: false  // optional - faster if false
    }
});

console.log('result.ast: ')
console.log(result.ast)