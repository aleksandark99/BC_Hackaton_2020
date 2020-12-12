import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueSocialSharing from 'vue-social-sharing'
 
Vue.use(VueSocialSharing);


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
// axios.defaults.baseURL = 'https://garbage-collectors.herokuapp.com/garbagecollectors'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'
 
Vue.use(VueHead)
Vue.use(VueRouter)



axios.defaults.baseURL = 'http://localhost:8081/garbagecollectors'




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
