<template>
  <div>Logout</div>
</template>

<script>
export default {
  name: 'Logout',
  mounted(){
    localStorage.removeItem("username")
    localStorage.removeItem("role")
        localStorage.removeItem("jwt")

         this.$store.commit("setUsername", null);
          this.$store.commit("setIsNotLogged", true);
          this.$store.commit("setIsAdmin",false)

    this.$router.push("/login")

  }
};
</script>

<style>
</style>
