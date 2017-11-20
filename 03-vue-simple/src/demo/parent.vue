<template>
	<div>
		<p>parent: {{$attrs}}</p>
	  <child v-bind="$attrs"></child>
	</div>
</template>
<script>
  import child from './child'
  export default {
    components: {child},
    props: ['foo', 'bar', 'zoo'],
    created () {
      console.log(this.$attrs)
    }
  }
</script>
