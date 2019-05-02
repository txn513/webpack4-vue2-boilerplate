import Vue from 'vue'
import App from './App.vue'
import routes from './routes'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueRouter)
Vue.use(VueAxios,axios);

// import {add ,call} from './test.js' 

// add(function(){
//     console.log(1)
// })

// call()

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})