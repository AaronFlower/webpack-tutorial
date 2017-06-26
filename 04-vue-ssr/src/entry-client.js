import {createApp} from './app'

// client-specific bootstrapping logic ...

const {app, router} = createApp()

router.onReady(() => {
	app.$mount('#app')
})
