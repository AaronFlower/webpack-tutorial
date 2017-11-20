<template>
	<div>
		<p>Bar...</p>
		<p>isH5: {{isH5}}</p>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				isH5: false
			}
		},
		mounted () {
			this.isH5 = !!window.FormData
		}
	}
</script>