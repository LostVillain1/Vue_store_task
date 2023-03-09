<template>
  <div class="wrapper">
    <base-input
    v-for="(item, index) in inputs"
    :key="index"
    :name="item.name"
    :value="item.value"
    :pattern="item.pattern">
    </base-input>
  </div>
</template>

<script>
import BaseInput from './Input.vue';

export default {
  name: 'AppForm',
  components: {
    BaseInput,
  },
  props: {
    msg: String
  },
  computed: {
    inputs() {
      return this.$store.state.info
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
