<template>
  <div class="container">
    {{foo}},{{bar}},{{zoo}}
  </div>
</template>

<script>
  export default {
    props: ['foo', 'bar', 'zoo']
  }
</script>

<style>
  .container {
    width: 500px;
    height: 400px;
    border: 1px solid red;
  }
</style>
