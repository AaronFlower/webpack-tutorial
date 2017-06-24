import _ from 'lodash'
import cats from './cats'

function component() {
	let element = document.createElement('div')
	element.innerHTML = _.join(['Hello', 'Webpack'], '-- ')
	return element
}

document.body.appendChild(component())

cats.map(_ => console.log(_))
