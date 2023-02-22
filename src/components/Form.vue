<template>
  <div class="wrapper">
    <base-input></base-input>
  </div>
</template>

<script>
import BaseInput from './Input.vue';
// import { mapGetters } from 'vuex' 

export default {
  name: 'AppForm',
  components: {
    BaseInput,
  },
  props: {
    msg: String
  },
  computed: {
    // ...mapGetters(['test'])
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
