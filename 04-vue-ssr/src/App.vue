<template>
<div>
	<h2>Hello Vue SSR</h2>
	<p>
		{{message}}
	</p>
	<p>
		The url is: {{url}}
	</p>	
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
