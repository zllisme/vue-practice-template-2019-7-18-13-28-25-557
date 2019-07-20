<template>
  <div>
    <span>{{countNum}}</span>
    <br>
    <button @click="add">点我+</button>
    <button @click="sub">点我-</button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  data: function () {
    return {
      countNum: 0
    };
  },
  methods: {
      add: function () {
          this.countNum++;
          this.$emit('add')
      },
      sub: function () {
          this.countNum--;
          this.$emit('sub')
      }
  }
}
</Script>
