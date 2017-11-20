export default {
  install (Vue) {
    let component = {
      data: {
        items: [],
        content: '',
        showCount: 0
      },
      render (h) {
        return h(
          'div',
          {class: 't-alert-container'},
          ['Hello Vue SSR....']
        )
      }
    }
    if (!Vue.prototype.$isServer) {
    	console.log('After to the client....')
	    let vm = new Vue(component).$mount()
	    document.body.appendChild(vm.$el)
    }

    Vue.prototype.$alert = function show() {
    	console.log('Vue show...')
    	alert('Vue show...')
    }
  }
}
