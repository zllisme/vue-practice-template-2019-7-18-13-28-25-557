<template>
  <div id="app">
    <!-- <div v-if="isShow">
      <HelloWorld></HelloWorld>
    </div>
    <div v-else>
      <span>counter number: </span>
      <input type="text" v-model="counterNum">
      <counter v-for="n in parseInt(getCounterNumber)" :key="n"></counter>
      <span>total: {{this.$store.getters.getTotalNumber}}</span>
    </div> -->
    <router-view></router-view> 
    </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      hello: '',
      counterNum: 5,
      totalNum: 0,
      // showComponent: this.$router.currentComponent
    };
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
