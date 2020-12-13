<template>
  <div>
    <b-navbar id="nav" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">GarbageCollectors</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-button v-show="!isLoggedIn"  to="/newevent"  class="my-2 my-sm-0" variant="success">Create new event</b-button
          >

          <b-nav-item to="/finishedEvents">Finished events</b-nav-item>
          <b-nav-item to="/score">SCOREBOARD</b-nav-item>
          <b-nav-item  v-show="isAdmin" to="/approve">Pending events to be approved</b-nav-item>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
                              <b-nav-item  v-show="isLoggedIn" href="#">Register</b-nav-item>
                              <b-nav-item  v-show="isLoggedIn" to="/login">Login</b-nav-item>
                              <!-- <b-nav-item v-show="!isLoggedIn" :to="`/users/${this.$store.state.username}`">My events</b-nav-item> -->


                     
                      <!-- <b-button to="/login" size="sm" class="my-2 my-sm-0" variant="success">Login</b-button> -->


  

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em v-show="!isLoggedIn" > Profile</em>
            </template>
            <b-dropdown-item             :to="`/users/${this.$store.state.username}`">My Profile</b-dropdown-item>
            <b-dropdown-item to="/logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          
          


        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
    props: 
    {

      isLoggedIn:{
             type: Boolean,
      required: true,
      },
            isAdmin:{
             type: Boolean,
      required: true,
      }
    }
};
</script>

<style scoped>

#nav{
    margin-bottom: 20px;
}
</style>
