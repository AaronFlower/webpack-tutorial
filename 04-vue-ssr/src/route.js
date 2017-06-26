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
		    component: (resolve) => require(['./App.vue'], resolve)
		  },
		  {
		    path: '/bar',
		    name: 'bar',
		    component: () => import('./components/Bar.vue')
		  },
		  {
		    path: '/baz',
		    name: 'baz',
		    component: (resolve) => require(['./components/Baz.vue'], resolve)
		  },
		  {
		    path: '/foo',
		    name: 'foo',
		    component: (resolve) => require(['./components/Foo.vue'], resolve)
		  }
		 ]
	})
}