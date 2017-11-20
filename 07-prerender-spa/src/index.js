import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './route/index.js'
import App from './App.vue'

Vue.use(VueRouter)

const root = new Vue({
	router,
	render: h => h(App)
})

document.addEventListener('DOMContentLoaded', function () {
  root.$mount('#app')
})
