<template>
  <div>
    <span>{{countNum}}</span>
    <br>
    <button @click="countNum++">点我+</button>
    <button @click="countNum--">点我-</button>
  </div>
</template>

<script>
import { scrypt } from 'crypto';
import { Script } from 'vm';
export default {
  name: 'counter',
  data: function () {
    return {
      countNum: 0
    };
  }
}
</Script>
