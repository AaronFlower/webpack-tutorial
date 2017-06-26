import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
	return new Router({
		mode: 'history',
		routes: [
		  {
		    path: '/',
		    name: 'index',
		    component: () => import('./App.vue')
		  },
		  {
		    path: '/bar',
		    name: 'bar',
		    component: () => import('./components/Bar.vue')
		  },
		  {
		    path: '/baz',
		    name: 'baz',
		    component: () => import('./components/Baz.vue')
		  },
		  {
		    path: '/foo',
		    name: 'foo',
		    component: () => import('./components/Foo.vue')
		  },
		  {
		  	path: '/item/:id',
		  	component: () => import('./components/item.vue')
		  },
		  {
		  	path: '/inc',
		  	component: () => import('./components/Inc.vue')
		  }
		 ]
	})
}