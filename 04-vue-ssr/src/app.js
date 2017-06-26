console.log('Hello Vue SSR')
/**
 * 在传统的 Client APP 是要在 app.js 将 vue 直接注入到 DOM 中的。但是现在却不同了。
 */
import Vue from 'vue'
import App from './App.vue'
import {createRouter} from './route'
import {createStore} from './store'
// Sync vue-router's current $route as part of vuex store's state.
import {sync} from 'vuex-router-sync' 

/**
 * 在这里添加一个 context 参数用于标识 client/server 端的环境测试。
 */
export function createApp (context) {

	// create router and store instances
	const router = createRouter()
	const store = createStore()


	// sync so that route state is available as part of the store
	sync(store, router)

	const app = new Vue({
		router,
		store,
		render: h => h('div', [
			h(App, {
				props: {
					url: context && context.url ? 'server' : 'client'
				}
			})
		])
	})

	return {app, router, store}
}