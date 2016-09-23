import 'babel-polyfill'
import $ from 'jquery'
import cats from './cats'

cats.map(name => {
	console.log(name.toUpperCase())
})
console.log(cats)

$('<h1>Cats</h1>').appendTo('body')
const $ul = $('<ul/>').appendTo('body')
for(const cat of cats){
	$('<li/>').text(cat).appendTo($ul)
}
