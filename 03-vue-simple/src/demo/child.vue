<template>
  <grand-child v-bind="$attrs"></grand-child>
</template>
<script>
  import grandChild from './grandChild'
  export default {
    components: {grandChild},
    inheritAttrs: false,
    props: ['foo', 'bar', 'zoo'],
    created () {
      console.log(this.$attrs)
    }
  }
</script>
