import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
    username:"User",
   isNotLogged:true,


 },
 getters: {},
 mutations: {
    setUsername (state, payload) {
        state.username = payload
      },
 },
 actions: {}
});