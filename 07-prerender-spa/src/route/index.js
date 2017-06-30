import VueRouter from 'vue-router'
import Home from 'Components/home'
import Contact from 'Components/contact'
import About from 'Components/about'

const routes = [
	{
		path: '/',
		component: Home
	},	
	{
		path: '/Home',
		component: Home
	},		
	{
		path: '/Contact',
		component: Contact
	},	
	{
		path: '/About',
		component: About
	}
]

export default new VueRouter({
	mode: 'history',
	routes
})