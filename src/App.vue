<template>
  <div id="app">
    <!-- <h2>{{hello}}</h2> -->
    <span>counter number: </span>
    <input type="text" v-model="counterNum">
    <counter v-for="n in parseInt(getCounterNumber)" :key="n"></counter>
    <span>total: {{this.$store.getters.getTotalNumber}}</span>
  </div>
</template>

<script>
import counter from './components/Counter.vue';

export default {
  name: 'app',
  data: function () {
    return {
      hello: '',
      counterNum: 5,
      totalNum: 0
    };
  },
  components: {
    counter
  },
  computed: {
    getCounterNumber () {
      return this.$store.getters.getCounterNumber
    }
  },
  watch: {
    counterNum (val) {
      this.$store.commit('setCounterNumber', val)
    }
  },
  methods: {
    calculateTotal: function (number) {
      this.totalNum += number;
    }
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
