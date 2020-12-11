<template>
  <div>
    <router-link to="/newevent">aaM</router-link>
    <div class="container" id="s">
      <div class="row">
        <div class="col-md-4 mx-auto">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Username:"
              label-for="input-1"
            >
            <b-form-input
                id="input-1"
                v-model="form.username"
                required
                placeholder="Enter username"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password:"
              label-for="input-2"
            >
              <b-form-input
                type="password"
                id="input-2"
                v-model="form.password"
                required
                placeholder="Enter password"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      show: true,
    };
  },
  methods:{
       async onSubmit(event) {
                  alert("submit",event)

       },
       onReset(){
         alert("reset")
       }

  }
};
</script>

<style>
</style>
