<template>
<div>
	<h2>Hello Vue Simple Foo</h2>
	<p>
		{{message}}
	</p>
</div>
</template>

<script>
	export default {
		data () {
			return {
				message: 'I love vue!'
			}
		}
	}	
</script>

<style>
	h2 {
		color: deepskyblue;
	}
</style>
