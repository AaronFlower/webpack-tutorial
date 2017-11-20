<template>
<div>
	<h2>Hello Vue Simple Foo</h2>
	<p>
		{{message}}
	</p>
	<parent :foo="foo" :bar="bar" :zoo="zoo"></parent>
</div>
</template>

<script>
	import parent from './demo/parent'

	export default {
		components: {
			parent
		},

		data () {
			return {
				message: 'I love vue!',
				foo: 'foo',
				bar: 'bar',
				zoo: 'zoo'
			}
		}
	}	
</script>

<style>
	h2 {
		color: deepskyblue;
	}
</style>
