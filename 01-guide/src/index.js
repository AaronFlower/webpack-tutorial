import _ from 'lodash'
import './style.css'
import Logo from './logo.png'

function component() {
	var element = document.createElement('div')
	
	element.innerHTML = _.join(['Hello', 'webpack'], ' ')
	element.classList.add('hello')

	var img = document.createElement('img')
	img.src = Logo

	element.appendChild(img)

	return element
}

document.body.appendChild(component())

