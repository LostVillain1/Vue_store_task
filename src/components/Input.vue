<template>
  <div class="form-group">
    <label>{{ name }}</label>
    <input type="text"
    class="form-control"
    :class="{valid: isValid}"
    v-model="value"
    @input="changeValue">
  </div>
</template>
  
<script>
  export default {
    name: 'BaseInput', 
    data() {
      return {
        value: ''
      }
    },
    props: ['name', 'pattern'],
    computed : {
      isValid() {
        return this.pattern.test(123)
      },      
    },
    methods: {
      changeValue() {
        console.log(this.value)
        console.log(this.pattern)
        console.log(this.pattern.test(this.value))
      }
    }
  }
</script>

<style scoped>

.valid {
  background-color: red;
}

</style>