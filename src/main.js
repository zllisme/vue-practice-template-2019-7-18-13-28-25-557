import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import store from './store/index'
import counter from './components/Counter.vue';
import HelloWorld from './components/HelloWorld.vue';
import VueRouter from 'vue-router'
import someThingCool from './components/someTingCool';
import superCool from './components/superCool';

Vue.use(VueRouter)

const routes = [
  { path: '/counter', component: counter },
  { path: '/HelloWorld', component: HelloWorld,
    children: [
      {
        path: 'cool',
        component: someThingCool
      },
      {
        path: 'super',
        component: superCool
      }
    ]
  }
]
  
const router = new VueRouter({
  routes,
  mode: "history"
})



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
