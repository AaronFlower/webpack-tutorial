<template>
<div>
	<h2>Hello Vue ssr $$$E</h2>
	<p>
		{{message}}
	</p>
	<p>
		The url is: {{url}}
	</p>	
	<p>
		isH5:{{isH5}}
	</p>
<!-- 	<router-link to="/foo">Go to Foo</router-link>
	<router-link to="/bar">Go to Bar</router-link>
	<router-link to="/baz">Go to Baz</router-link>
	<router-link to="/item/:3">Go to Item</router-link>
	<router-link to="/inc">Go to Inc</router-link> -->
<!-- 	<div>
	 <router-view></router-view>
	</div> -->
</div>
</template>

<script>
	export default {
		props: {
			url: ''
		},
		data () {
			return {
				message: 'Hello SSR!',
				isH5: false
				// isH5: !!window.FormData
			}
		},
		// 对于 SSR 渲染时，在 beforeMount 之前是无法访问浏览器的 API 的，所以把此类的 api 放在 mounted 中。
		mounted () {
			this.isH5 = true
			console.log('craze ... ')
			// this.isH5 = !!window.FormData
			setTimeout(() => {
				console.log('App mountedd....., is-h5', this.isH5)
				this.$alert()
			}, 2000)
		}
	}	
</script>

<style>
	h2 {
		color: deepskyblue;
	}
</style>
