import _ from 'lodash'
import {firstName, lastName, year} from './profile'

function component() {
	var element = document.createElement('div')
	element.innerHTML = _.join(['Hello', 'webpack'], ' ')
	return element
}
console.log(firstName, lastName, year)
document.body.appendChild(component())
