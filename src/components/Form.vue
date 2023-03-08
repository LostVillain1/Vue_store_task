<template>
  <div class="wrapper">
    <base-input 
     v-for="(input, index) in inputs"
     :key="index"
     :name="input.name"
     :pattern="input.pattern">
    </base-input>
    <button>Submit</button>
  </div>
</template>

<script>
import BaseInput from './Input.vue';
import { mapGetters } from 'vuex' 

export default {
  name: 'AppForm',
  components: {
    BaseInput,
  },
  computed: {
    ...mapGetters(['inputs'])
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
