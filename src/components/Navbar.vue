<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">GarbageCollectors</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-button size="sm" class="my-2 my-sm-0" variant="success">Create new event</b-button
          >

          <b-nav-item href="#">Finished events</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
                      <b-button size="sm" class="my-2 my-sm-0" variant="success">Register</b-button>
                      <br>
                      <br>

                                <b-button size="sm" class="my-2 my-sm-0" variant="danger">Login</b-button>

  

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          
          


        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.btn-success {
  margin-right: 5px;
  padding-bottom: 5px;
}
</style>
