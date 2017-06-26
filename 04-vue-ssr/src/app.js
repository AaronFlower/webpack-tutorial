console.log('Hello Vue SSR')
/**
 * 在传统的 Client APP 是要在 app.js 将 vue 直接注入到 DOM 中的。但是现在却不同了。
 */
import Vue from 'vue'
import App from './App.vue'
import {createRouter} from './route'

/**
 * 在这里添加一个 context 参数用于标识 client/server 端的环境测试。
 */
export function createApp (context) {

	const router = createRouter()

	const app = new Vue({
		router,
		render: h => h('div', [
			h(App, {
				props: {
					url: context && context.url ? 'server' : 'client'
				}
			})
		])
	})

	return {app, router}
}