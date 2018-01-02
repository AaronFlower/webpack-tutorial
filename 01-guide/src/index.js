import _ from 'lodash'
import printMe from './print.js'

function component() {
	var element = document.createElement('div')
	
	element.innerHTML = _.join(['Hello', 'webpack'], ' ')
	element.classList.add('hello')

	var btn = document.createElement('button')
	btn.innerHTML = 'Click me and check the console!'
	btn.onclick = printMe

	element.appendChild(btn)

	return element
}

document.body.appendChild(component())

