import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";


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
axios.defaults.baseURL = 'https://garbage-collectors.herokuapp.com/garbagecollectors'




// axios.defaults.baseURL = 'http://localhost:8081/garbagecollectors'




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
