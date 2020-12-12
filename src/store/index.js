import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
    username:"User",
    isNotLogged:true,
    isAdmin:false


 },
 getters: {},
 mutations: {
    setUsername (state, payload) {
        state.username = payload
      },
      setIsAdmin (state, payload) {
        state.isAdmin = payload
      },
      setIsNotLogged (state, payload) {
        state.isNotLogged = payload
      },
 },
 actions: {}
});