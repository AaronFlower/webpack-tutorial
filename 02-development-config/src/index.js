import _ from 'lodash'

function component() {
	let element = document.createElement('div')
	element.innerHTML = _.join(['Hello', 'Webpack'], '-- ')
	return element
}

document.body.appendChild(component())
