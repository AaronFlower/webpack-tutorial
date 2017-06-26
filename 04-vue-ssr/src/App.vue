<template>
<div>
	<h2>Hello Vue SSR</h2>
	<p>
		{{message}}
	</p>
	<p>
		The url is: {{url}}
	</p>	
	<router-link to="/foo">Go to Foo</router-link>
	<router-link to="/bar">Go to Bar</router-link>
	<router-link to="/bar">Go to Baz</router-link>
	<div>
	 <router-view></router-view>
	</div>
</div>
</template>

<script>
	export default {
		props: {
			url: ''
		},
		data () {
			return {
				message: 'Hello SSR!'
			}
		}
	}	
</script>

<style>
	h2 {
		color: deepskyblue;
	}
</style>
