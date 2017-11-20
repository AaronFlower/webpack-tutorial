import {createApp} from './app'
import Vue from 'vue'

// client-specific bootstrapping logic ...
/**
 * 对于 entry-client 的 Client Data Fetching 有两种处理方法：
 * 1. 在跳转之前处理获取数据， resolve data before route navigation
 * 2. 或者在 view 渲染之后再获取数据，fetch data after the mathced view is rendered。
 * 采用那种方法，还是看你需要那种 UX。
 * 但是无论那一种都需要实现 beforeRouteUpdate() 函数，即当 component 重用进其 asyncData 应该先调用。
 * 对于大项目的 Vuex store 可以分隔成多个模块。 
 */
// a global mixin that calls `asyncData` when a route component's params change
// Vue.mixin({
//   beforeRouteUpdate (to, from, next) {
//     const { asyncData } = this.$options
//     if (asyncData) {
//       asyncData({
//         store: this.$store,
//         route: to
//       }).then(next).catch(next)
//     } else {
//       next()
//     }
//   }
// })

const {app, router, store} = createApp()

// if (window.__INITIAL_STATE__) {
// 	store.replaceState(window.__INITIAL_STATE__)
// }

// router.onReady(() => {

// 	// Add router hook for handling asyncData.
// 	// Doing it after initial route is resolved so that we don't double-fetch
// 	// the data that we already have. Using router.beforeResolve() so that all
// 	// async components are resolved.
// 	router.beforeResolve((to, from, next) => {
// 	  const matched = router.getMatchedComponents(to)
// 	  const prevMatched = router.getMatchedComponents(from)
// 	  let diffed = false
// 	  const activated = matched.filter((c, i) => {
// 	    return diffed || (diffed = (prevMatched[i] !== c))
// 	  })
// 	  const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _)
// 	  if (!asyncDataHooks.length) {
// 	    return next()
// 	  }

// 	  Promise.all(asyncDataHooks.map(hook => hook({ store, route: to })))
// 	    .then(() => {
// 	      next()
// 	    })
// 	    .catch(next)
// 	})

// })
console.log('Vue.prototype.$isServer', Vue.prototype.$isServer)
if (!Vue.prototype.$isServer) {
	app.$mount('#app')
}
