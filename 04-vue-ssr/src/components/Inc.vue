<template>
	<div>{{fooCount}}</div>
</template>

<script>
	import fooStoreModule from '../store/modules/foo'

	export default {
		asyncData ({store}) {
			store.registerModule('foo', fooStoreModule)
			return store.dispatch('foo/inc')
		},

		// IMPORTANT: avoid duplicate module registration on the client
		// when the route is visited multiple times.
		destroyed () {
		  this.$store.unregisterModule('foo')
		},

		computed: {
		  fooCount () {
		    return this.$store.state.foo.count
		  }
		}
	}
</script>