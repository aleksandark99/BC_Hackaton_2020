<template>
  <div>Logout</div>
</template>

<script>
export default {
  name: 'Logout',
  mounted(){
      localStorage.removeItem("username")
    localStorage.removeItem("role")
   this.$router.push("/login")

  }
};
</script>

<style>
</style>
