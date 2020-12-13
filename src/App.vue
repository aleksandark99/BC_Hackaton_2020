<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<Navbar

 :isLoggedIn="this.$store.state.isNotLogged"
 :isAdmin="this.$store.state.isAdmin"
/>

    <!-- <router-link to="/login">go to home test </router-link> -->

        <router-view />

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
     Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:  #99ffbb;
    height: 100%;


}
html, 
body {
    height: 100%;
    background: rgb(153, 255, 153);

}

</style>
