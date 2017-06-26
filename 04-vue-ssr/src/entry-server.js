import {createApp} from './app'

export default context => {
	// without route
	// const {app} = createApp(context)
	// return app
	
	/**
	 * since there could potentially be asynchronous route hooks or components,
	 * we will be returning a Promise so that the server can wait until
	 * everything is ready before rendering.
	 */
	return new Promise((resolve, reject) => {
	  const {app, router} = createApp(context)

	  // set server-side router's location
	  router.push(context.url)

	  // wait until router has resolved possible async components and hooks
	  router.onReady(() => {
			/**
			 * router.getMatchedComponents(location?) 
			 * 返回目标位置或是当前路由匹配的组件数组（是数组的定义/构造类，不是实例）。通常在服务端渲染的数据预加载时时候。
			 */
			const matchedComponents = router.getMatchedComponents()
			console.log('matchedComponents: ', matchedComponents)

			if (!matchedComponents.length) {
				reject({code: 404})
			}

			resolve(app)
	  }, reject)
	})   
}
