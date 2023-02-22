<template>
  <div class="form-group">
    <label>{{ value }}</label>
    <input type="text" class="form-control">
  </div>
</template>
  
<script>
  export default {
    name: 'BaseInput',  
    props: ['name', 'value', 'pattern'],
    computed : {
      isValid() {
        return 0
      },
      
    }

  }
</script>

<style scoped>
</style>