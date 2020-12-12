<template>
  <div>
    <div class="container" id="s">
      <div class="row">
        <div class="col-md-4 mx-auto">
          <b-form @submit="onSubmit" @reset="onReset" >
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
import axios from "axios";
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
  methods: {
     onSubmit(event) {
       event.preventDefault();
       console.log(event)
      var formData = new FormData();
      formData.append("username", this.form.username);
      formData.append("password", this.form.password);

      axios
        .post(
          "/login",
          JSON.stringify({
            username: this.form.username,
            password: this.form.password,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          localStorage.setItem("jwt", res.data.jwt);
          localStorage.setItem("username", this.form.username);
          localStorage.setItem("role", res.data.role);
          this.$store.commit("setUsername", this.form.username);
          this.$store.commit("setIsNotLogged", false);
          if(res.data.role=="ADMIN"){
                      this.$store.commit("setIsAdmin",true)

          }
          this.$router.push("/")
                 console.log("1")

        })
        .catch((res) => {
          console.log(res);
        });

    },
    onReset() {
      this.username="",
      this.password=""
    },
  },
};
</script>

<style>
</style>
