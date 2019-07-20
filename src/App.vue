<template>
  <div id="app">
    <span>counter number: </span>
    <input type="text" v-model="counterNum">
    <counter v-for="n in parseInt(counterNum)" v-bind:key="n" ref="child"></counter>
  </div>
</template>

<script>
import counter from './components/Counter.vue'

export default {
  name: 'app',
  data: function () {
    return {
      counterNum: 8
    };
  },
  components: {
    counter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
