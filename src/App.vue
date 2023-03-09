<template>
  <div>
    <app-form  v-if="!isSubmitted"></app-form>  <!-- :submit="submit" -->
    <p v-else>OK</p>
  </div>  
</template>

<script>
import AppForm from './components/Form.vue'

export default {
  name: 'App',
  components: {
    AppForm,
  },
  provide(){
    return {
      submit: this.submit,
    }
  },
  data() {
    return {
      isSubmitted: false
    }
  },
  methods: {
    submit() {
      this.isSubmitted = true
    }
  }
}
</script>

<style>
</style>
